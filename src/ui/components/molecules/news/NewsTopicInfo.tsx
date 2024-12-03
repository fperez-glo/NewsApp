import { View, Text } from 'react-native';
import React from 'react';
import { ThemedText } from '../../atoms/ThemedText';

const NewsTopicInfo = ({ topic, readTime }: { topic?: string; readTime?: string }) => {
  return (
    <View className="flex-row gap-2 items-center">
      <ThemedText type="secondaryText" className="text-gray-100 text-xs font-semibold ">
        {topic}
      </ThemedText>
      <ThemedText type="secondaryText" className="text-md font-semibold ">
        •
      </ThemedText>
      <ThemedText type="secondaryText" className="text-xs font-semibold ">
        {readTime}
      </ThemedText>
    </View>
  );
};

export default NewsTopicInfo;
