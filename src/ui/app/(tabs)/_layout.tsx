import { Tabs } from 'expo-router';
import React from 'react';
import { useThemeDefaultColor } from '../../hooks/useThemeColor';
import { Bookmark, Home, Search, Settings, Users } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
  const colorScheme = useThemeDefaultColor();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme.primary,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: colorScheme.background,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
          gap: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: colorScheme.background,
        },
        headerTitleStyle: {
          color: colorScheme.title,
        },
      }}
    >
      <Tabs.Screen
        name="(news)"
        options={{
          headerShown: true,
          headerTitle: t('header.news'),
          title: t('bottomTabs.home'),
          tabBarIcon: ({ color, focused }) => {
            return <Home className="w-6 h-6" color={color} strokeWidth={!focused ? 1.5 : undefined} />;
          },
        }}
      />
      {/* <Tabs.Screen
        name="news/index"
        options={{
          href: null,
        }}
      /> */}
      <Tabs.Screen
        name="search"
        options={{
          title: t('bottomTabs.search'),
          tabBarIcon: ({ color, focused }) => (
            <Search className="w-6 h-6" color={color} strokeWidth={!focused ? 1.5 : undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          headerShown: true,
          title: t('bottomTabs.bookmarks'),
          tabBarIcon: ({ color, focused }) => (
            <Bookmark className="w-6 h-6" color={color} strokeWidth={!focused ? 1.5 : undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          headerShown: true,
          title: t('bottomTabs.users'),
          tabBarIcon: ({ color, focused }) => (
            <Users className="w-6 h-6" color={color} strokeWidth={!focused ? 1.5 : undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          headerShown: true,
          title: t('bottomTabs.config'),
          tabBarIcon: ({ color, focused }) => (
            <Settings className="w-6 h-6" color={color} strokeWidth={!focused ? 1.5 : undefined} />
          ),
        }}
      />
    </Tabs>
  );
}
