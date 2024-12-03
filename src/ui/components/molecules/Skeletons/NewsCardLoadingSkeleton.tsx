import { View, Text } from 'react-native';
import React from 'react';
import Skeleton from '../../atoms/Skeleton';
import { ThemedView } from '../../atoms/ThemedView';

const NewsCardLoadingSkeleton = () => {
  return (
    <ThemedView className="flex-row items-center gap-4 p-4 border-b last:border-b-1 border-gray-300">
      <View className="flex-1">
        <View className="gap-2 flex flex-row mb-4 items-center">
          <Skeleton className="w-20" />
          <Text className="text-xs text-gray-500">•</Text>
          <Skeleton className="w-8" />
        </View>

        <View className="flex-1 gap-1">
          <Skeleton className=" w-full " />
          <Skeleton className=" w-10/12 " />
          <Skeleton className=" w-11/12 " />
        </View>
      </View>
      <View className="flex-2 h-24">
        <Skeleton className="flex-1" />
      </View>
    </ThemedView>
  );
};

export default NewsCardLoadingSkeleton;
