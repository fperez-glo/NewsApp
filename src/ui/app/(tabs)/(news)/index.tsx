import { useContainerInjection } from '../../../hooks/useContainerInjection';
import { NewsViewModel } from '../../../viewModels/NewsViewModel';
import { observer } from 'mobx-react-lite';
import NewsCardLoadingSkeleton from '../../../components/molecules/Skeletons/NewsCardLoadingSkeleton';
import NewsList from '../../../components/molecules/news/NewsList';

const HomeScreen = () => {
  const viewModel = useContainerInjection<NewsViewModel>('NewsViewModel');
  const isLoading = viewModel.isLoading;
  const news = viewModel.news;
  if (isLoading) {
    return Array.from({ length: 10 }).map((_, index) => <NewsCardLoadingSkeleton key={index} />);
  }

  return (
    <NewsList
      data={news}
      onRefresh={() => viewModel.fetchNewsData()}
      refreshing={isLoading}
      onToggleBookmark={(itemId) => viewModel.toggleBookMark(itemId)}
    />
  );
};

export default observer(HomeScreen);
