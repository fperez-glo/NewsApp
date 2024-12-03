import { useContainerInjection } from '../../../hooks/useContainerInjection';
import { NewsViewModel } from '../../../viewModels/NewsViewModel';
import { observer } from 'mobx-react-lite';
import NewsCardLoadingSkeleton from '../../../components/molecules/Skeletons/NewsCardLoadingSkeleton';
import NewsList from '../../../components/molecules/news/NewsList';

const HomeScreen = () => {
  const viewModel = useContainerInjection<NewsViewModel>('NewsViewModel');

  if (viewModel.isLoading) {
    return Array.from({ length: 10 }).map((_, index) => <NewsCardLoadingSkeleton key={index} />);
  }

  return (
    <NewsList data={viewModel.news} onRefresh={() => viewModel.fetchNewsData()} refreshing={viewModel.isLoading} />
  );
};

export default observer(HomeScreen);
