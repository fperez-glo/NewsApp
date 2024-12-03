/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const primaryColor = '#2563eb';

export const Colors = {
  light: {
    primary: primaryColor,
    commonText: '#4b5563',
    secondaryText: '#6b7280',
    title: '#11181C',
    background: '#fff',
    backgroundForeground: '#f3f4f6',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: primaryColor,
    commonText: '#d1d5db',
    secondaryText: '#9ca3af',
    title: '#f3f4f6',
    background: '#151718',
    backgroundForeground: '#9ca3af73',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
