import React from 'react';
import { NewsViewModel } from '../../viewModels/NewsViewModel';
import { useContainerInjection } from '../../hooks/useContainerInjection';
import { observer } from 'mobx-react-lite';
import NewsList from '../../components/molecules/news/NewsList';

const BookmarksScreen = () => {
  const viewModel = useContainerInjection<NewsViewModel>('NewsViewModel');

  return (
    <NewsList
      data={viewModel.news.filter((b) => b.bookmark)}
      onRefresh={() => viewModel.fetchNewsData()}
      refreshing={viewModel.isLoading}
    />
  );
};

export default observer(BookmarksScreen);
