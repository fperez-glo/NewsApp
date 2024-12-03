import { View, Text } from 'react-native';
import React from 'react';
import Skeleton from '../../atoms/Skeleton';
import { ThemedView } from '../../atoms/ThemedView';

const NewsDetailLoading = () => {
  return (
    <ThemedView className="flex-1 flex-col gap-4 p-4 border-b last:border-b-1 border-gray-300">
      <Skeleton className="w-full h-72" />

      <View className="px-4 flex-col gap-7">
        <View className="gap-2 flex flex-row mb-0 items-center">
          <Skeleton className="w-24" />
          <Text className="text-xs text-gray-500">•</Text>
          <Skeleton className="w-10" />
        </View>

        <View className="gap-1">
          <Skeleton className=" w-full h-6" />
          <Skeleton className=" w-[80%] h-6" />
          <Skeleton className=" w-[90%] h-6" />
        </View>

        <Skeleton className="w-24" />

        <View className="gap-1">
          <Skeleton className="w-full" />
          <Skeleton className="w-[80%]" />
          <Skeleton className="w-[60%]" />
          <Skeleton className="w-[90%]" />
          <Skeleton className="w-full" />
          <Skeleton className="w-[80%] mb-4" />
          <Skeleton className="w-full" />
          <Skeleton className="w-[80%]" />
          <Skeleton className="w-[90%]" />
          <Skeleton className="w-[70%]" />
        </View>
      </View>
    </ThemedView>
  );
};

export default NewsDetailLoading;
