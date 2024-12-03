import { Appearance, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { ThemedView } from '../../components/atoms/ThemedView';
import { ThemedText } from '../../components/atoms/ThemedText';
import BottomSheet, { BottomSheetRefProps } from '../../components/molecules/BottomSheet';
import { useThemeDefaultColor } from '../../hooks/useThemeColor';
import { useNavigation } from 'expo-router';
import { ChevronRight, Moon, Sun } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { useContainerInjection } from '../../hooks/useContainerInjection';
import { ConfigViewModel } from '../../viewModels/ConfigViewModel';
import { observer } from 'mobx-react-lite';
import { Translation } from '../../locale/translation';

const ConfigScreen = () => {
  const configViewModel = useContainerInjection<ConfigViewModel>('ConfigViewModel');
  const translationStore = useContainerInjection<Translation>('Translation');
  const languageBottomSheetRef = useRef<BottomSheetRefProps>(null);
  const themeBottomSheetRef = useRef<BottomSheetRefProps>(null);
  const colorScheme = useThemeDefaultColor();
  const navigation = useNavigation();
  const [backdrop, setBackdrop] = useState(false);
  const { t } = useTranslation(undefined, { keyPrefix: 'config' });

  const currentTheme = configViewModel.config.theme ?? useColorScheme();
  const currentLang = configViewModel.config.language;

  const onPressLanguage = useCallback(() => {
    const isActive = languageBottomSheetRef?.current?.isActive();

    setBackdrop(Boolean(isActive));
    if (isActive) {
      languageBottomSheetRef?.current?.scrollTo(0);
    } else {
      languageBottomSheetRef?.current?.scrollToTop();
    }
  }, []);

  const onPressTheme = useCallback(() => {
    const isActive = themeBottomSheetRef?.current?.isActive();

    setBackdrop(Boolean(isActive));
    if (isActive) {
      themeBottomSheetRef?.current?.scrollTo(0);
    } else {
      themeBottomSheetRef?.current?.scrollToTop();
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: languageBottomSheetRef?.current?.isActive(),
    });
  }, [backdrop, languageBottomSheetRef]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: themeBottomSheetRef?.current?.isActive() ? false : true,
    });
  }, [backdrop, themeBottomSheetRef]);

  return (
    <ThemedView className="flex-1">
      <View className="flex-1 px-3 py-4 gap-2">
        <TouchableOpacity
          onPress={onPressLanguage}
          className=" px-3 py-2 rounded-lg flex-row items-center justify-between"
          style={{ backgroundColor: colorScheme.backgroundForeground }}
        >
          <ThemedText className="font-semibold text-lg">{t('language.title')}</ThemedText>
          <View className="flex-row gap-2 items-center">
            <ThemedText className="text-base">{t(`language.${currentLang}`)}</ThemedText>
            <ChevronRight size={16} color={colorScheme.title} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressTheme}
          className=" px-3 py-2 rounded-lg flex-row items-center justify-between"
          style={{ backgroundColor: colorScheme.backgroundForeground }}
        >
          <ThemedText className="font-semibold text-lg">{t('theme')}</ThemedText>
          <View className="flex-row gap-2 items-center">
            <ThemedText className="text-base">{t(`${currentTheme}`)}</ThemedText>
            <ChevronRight size={16} color={colorScheme.title} />
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheet ref={themeBottomSheetRef}>
        <View className="flex-1 px-5 py-4 flex-col">
          <ThemedText type="title" className="font-semibold text-xl">
            Seleccionar tema
          </ThemedText>
          <TouchableOpacity
            className="mt-4 flex-row items-center gap-2"
            onPress={async () => {
              await configViewModel.saveConfig({
                language: configViewModel.config.language ?? currentLang,
                theme: 'light',
              });
            }}
          >
            <Sun className="w-6 h-6" color={colorScheme.title} />
            <ThemedText className="text-lg">{t('light')}</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-4 flex-row items-center gap-2"
            onPress={async () => {
              await configViewModel.saveConfig({
                language: configViewModel.config.language ?? currentLang,
                theme: 'dark',
              });
            }}
          >
            <Moon className="w-6 h-6" color={colorScheme.title} />
            <ThemedText className="text-lg">{t('dark')}</ThemedText>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      <BottomSheet ref={languageBottomSheetRef}>
        <View className="flex-1 px-5 py-4 flex-col">
          <ThemedText type="title" className="font-semibold text-xl">
            Seleccionar idioma
          </ThemedText>
          <TouchableOpacity
            className="mt-4 flex-row items-center gap-2"
            onPress={() => {
              configViewModel.saveConfig({ language: 'en', theme: configViewModel.config.theme ?? currentTheme });
              translationStore.setCurrentLang('en');
            }}
          >
            <ChevronRight size={19} color={colorScheme.title} />
            <ThemedText className="text-lg">{t('language.en')}</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-4 flex-row items-center gap-2"
            onPress={() => {
              configViewModel.saveConfig({ language: 'es', theme: configViewModel.config.theme ?? currentTheme });
              translationStore.setCurrentLang('es');
            }}
          >
            <ChevronRight size={19} color={colorScheme.title} />
            <ThemedText className="text-lg">{t('language.es')}</ThemedText>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </ThemedView>
  );
};

export default observer(ConfigScreen);
