import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import NewsCard from './NewsCard';

import { News } from '../../../../domain/entities/News';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';
import { NewsViewModel } from '../../../viewModels/NewsViewModel';
import { useContainerInjection } from '../../../hooks/useContainerInjection';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

interface NewsListProps {
  data: News[];
  onRefresh?: () => void;
  refreshing: boolean;
}

const NewsList = ({ data, onRefresh, refreshing }: NewsListProps) => {
  const viewModel = useContainerInjection<NewsViewModel>('NewsViewModel');
  const colorScheme = useThemeDefaultColor();

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh && onRefresh()} />}
      data={data}
      key={data.length}
      style={{ backgroundColor: colorScheme.background }}
      renderItem={({ item, index }) => {
        return (
          <NewsCard
            bookMark={item.bookmark}
            index={index}
            id={item.id}
            title={item.title}
            excerpt={item.excerpt}
            image={item.imageUrl}
            readTime={item.time}
            topic={item.category}
            onPressBookmark={() => viewModel.toggleBookMark(item.id)}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default observer(NewsList);
