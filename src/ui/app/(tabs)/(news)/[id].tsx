import { View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useContainerInjection } from '../../../hooks/useContainerInjection';
import { NewsViewModel } from '../../../viewModels/NewsViewModel';
import { useQuery, useQueryClient } from 'react-query';
import NewsDetailLoading from '../../../components/molecules/Skeletons/NewsDetailLoading';
import NewsTopicInfo from '../../../components/molecules/news/NewsTopicInfo';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';
import { ThemedView } from '../../../components/atoms/ThemedView';
import { ThemedText } from '../../../components/atoms/ThemedText';
import { observer } from 'mobx-react-lite';
import NewsDetailHeader from '../../../components/molecules/news/NewsDetailHeader';

const NewsDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const colorScheme = useThemeDefaultColor();

  const viewModel = useContainerInjection<NewsViewModel>('NewsViewModel');

  const queryClient = useQueryClient();

  const {
    data: newsDetail,
    isLoading,
    isFetching,
  } = useQuery(['news', id], () => viewModel.fetchNewsDetail(id as string), {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <NewsDetailLoading />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerRight() {
            return (
              <NewsDetailHeader
                bookMark={newsDetail?.bookmark}
                onPressBookmark={async () => {
                  await viewModel.toggleBookMark(id as string);
                  await queryClient.invalidateQueries(['news', id]);
                }}
              />
            );
          },
        }}
      />
      <ScrollView style={{ display: 'flex', flex: 1, backgroundColor: colorScheme.background }}>
        <ThemedView className="flex-col gap-4 flex-1 pb-8">
          <View className="w-full h-72">
            <Image className="h-full w-full text-gray-700" src={newsDetail?.imageUrl} alt={`newsPicture-${id}`} />
          </View>
          <View className="px-4 flex-col gap-3">
            <NewsTopicInfo topic={newsDetail?.category} readTime={newsDetail?.time} />
            <ThemedText type="title" className="text-3xl font-bold">
              {newsDetail?.title}
            </ThemedText>
            <ThemedText type="secondaryText" className="font-semibold">
              Por {newsDetail?.author}
            </ThemedText>
            <ThemedText>{newsDetail?.content}</ThemedText>

            {newsDetail?.tags && (
              <View className="flex flex-row flex-wrap gap-2 pt-4">
                {newsDetail?.tags.map((tag) => (
                  <ThemedText
                    style={{ backgroundColor: colorScheme.backgroundForeground }}
                    key={tag.id}
                    className="px-3 py-1 rounded-lg text-xs"
                  >
                    #{tag.title}
                  </ThemedText>
                ))}
              </View>
            )}
          </View>
        </ThemedView>
      </ScrollView>
    </>
  );
};

export default observer(NewsDetailScreen);
