import { Text, type TextProps } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
  type?: 'commonText' | 'title' | 'secondaryText';
};

export function ThemedText({ className, lightColor, darkColor, style, type = 'commonText', ...rest }: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, type);

  return <Text className={className} style={[{ color }, style]} {...rest} />;
}
