import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Bookmark } from 'lucide-react-native';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';
import NewsTopicInfo from './NewsTopicInfo';
import { ThemedView } from '../../atoms/ThemedView';
import { ThemedText } from '../../atoms/ThemedText';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  topic: string;
  bookMark?: boolean;
  onPressBookmark?: (id: string) => void;
}

const NewsCard = ({ id, title, excerpt, image, readTime, topic, bookMark, onPressBookmark }: NewsCardProps) => {
  const colorScheme = useThemeDefaultColor();
  return (
    <Link asChild href={`./${id}`}>
      <TouchableOpacity activeOpacity={0.65} className="border-b last:border-b-1 border-gray-300 h-36">
        <ThemedView className="p-4 flex gap-4 flex-1 flex-row ">
          <View className="flex-1">
            <View className="flex flex-row mb-2 justify-between relative">
              <NewsTopicInfo topic={topic} readTime={readTime} />
              {onPressBookmark && (
                <TouchableOpacity
                  testID="bookmark-button"
                  onPress={() => onPressBookmark(id)}
                  className="absolute right-0"
                >
                  <Bookmark
                    testID="bookmark-icon"
                    size={20}
                    // style={{ opacity: bookMark ? 1 : 0.5 }}
                    color={!bookMark ? colorScheme.icon : colorScheme.title}
                    fill={!bookMark ? 'none' : colorScheme.primary}
                    strokeWidth={!bookMark ? 1.5 : 0.5}
                  />
                </TouchableOpacity>
              )}
            </View>
            <ThemedText type="title" className="font-semibold text-lg leading-[1.3rem]">
              {title}
            </ThemedText>
            <ThemedText className="text-sm text-gray-600 mt-1 line-clamp-2">{excerpt}</ThemedText>
          </View>
          <View className="flex-2 h-24 w-24">
            <Image className="h-full w-full rounded-md" src={image} alt={`newsPicture-${id}`} />
          </View>
        </ThemedView>
      </TouchableOpacity>
    </Link>
  );
};

export default React.memo(NewsCard);
