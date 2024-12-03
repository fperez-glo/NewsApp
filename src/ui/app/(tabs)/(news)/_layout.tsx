import React from 'react';
import { Stack } from 'expo-router';
import NewsDetailHeader from '../../../components/molecules/news/NewsDetailHeader';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';

const NewsLayout = () => {
  const colorScheme = useThemeDefaultColor();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colorScheme.background,
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colorScheme.background,
          },
          headerTitleStyle: {
            color: colorScheme.title,
          },
          headerTintColor: colorScheme.title,
        }}
      />
    </Stack>
  );
};

export default NewsLayout;
