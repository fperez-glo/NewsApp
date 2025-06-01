import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import NewsCard from './NewsCard';
import { News } from '../../../../domain/entities/News';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';

interface NewsListProps {
  data: News[];
  onRefresh?: () => void;
  refreshing: boolean;
  onToggleBookmark: (itemId: string) => void;
}

const NewsList = ({ data, onRefresh, refreshing, onToggleBookmark }: NewsListProps) => {
  const colorScheme = useThemeDefaultColor();

  const renderItem = ({ item }: { item: News }) => (
    <NewsCard
      bookMark={item.bookmark}
      id={item.id}
      title={item.title}
      excerpt={item.excerpt}
      image={item.imageUrl}
      readTime={item.readTime}
      topic={item.category}
      onPressBookmark={() => onToggleBookmark?.(item.id)}
    />
  );

  const ITEM_HEIGHT = 144;

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      data={data}
      style={{ backgroundColor: colorScheme.background }}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      // Performance optimizations
      // getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
      maxToRenderPerBatch={20}
      updateCellsBatchingPeriod={50}
      initialNumToRender={20}
      windowSize={10}
    />
  );
};

export default NewsList;
