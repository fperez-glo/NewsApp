import '../assets/global.css';
import React, { useLayoutEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appearance, ColorSchemeName, Platform, useColorScheme } from 'react-native';
import { useThemeDefaultColor } from '../hooks/useThemeColor';
import { ConfigViewModel } from '../viewModels/ConfigViewModel';
import { useContainerInjection } from '../hooks/useContainerInjection';
import { observer } from 'mobx-react-lite';

const RootLayout = () => {
  const configViewModel = useContainerInjection<ConfigViewModel>('ConfigViewModel');
  const configTheme = configViewModel.config.theme;
  const deviceTheme = useColorScheme() ?? 'light';
  const [themeState, setThemeState] = useState<ColorSchemeName>(deviceTheme);
  const colorScheme = useThemeDefaultColor();

  useLayoutEffect(() => {
    if (!configTheme) return;
    const theme = Appearance.getColorScheme();
    if (theme !== configTheme) {
      Appearance.setColorScheme(configTheme as ColorSchemeName);
    }
    setThemeState(configTheme as ColorSchemeName);
  }, [configTheme]);

  return (
    <>
      <StatusBar style={themeState === 'dark' ? 'light' : 'dark'} backgroundColor={colorScheme.background} animated />
      <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme.background }}>
        <Stack
          screenOptions={{
            statusBarStyle: Platform.OS === 'android' ? (themeState === 'dark' ? 'light' : 'dark') : undefined,
            statusBarColor: Platform.OS === 'android' ? colorScheme.background : undefined,
            contentStyle: {
              backgroundColor: colorScheme.background,
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </>
  );
};

export default observer(RootLayout);
