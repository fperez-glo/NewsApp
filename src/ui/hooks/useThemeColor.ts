/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export const useThemeDefaultColor = () => {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme];
};

/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) => {
  const theme = useColorScheme() ?? 'light';

  const colorFromProps = props ? props[theme] : undefined;

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
};
