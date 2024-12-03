import { View } from 'react-native';
import React from 'react';
import { Bookmark, Share2 } from 'lucide-react-native';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';

const NewsDetailHeader = ({ bookMark, onPressBookmark }: { bookMark?: boolean; onPressBookmark?: () => void }) => {
  const colorScheme = useThemeDefaultColor();
  return (
    <View className="flex-row gap-8 items-center">
      {/* <Share2 size={21} color={colorScheme.title} /> */}
      <Bookmark
        size={22}
        color={bookMark ? colorScheme.secondaryText : colorScheme.title}
        fill={bookMark ? colorScheme.primary : 'none'}
        strokeWidth={bookMark ? 0.5 : undefined}
        onPress={onPressBookmark}
      />
    </View>
  );
};

export default NewsDetailHeader;
