import { View, TextInput } from 'react-native';
import React, { useCallback } from 'react';
import HomeScreen from './(news)/index';
import { Tabs, useFocusEffect } from 'expo-router';
import { useThemeDefaultColor } from '../../hooks/useThemeColor';
import SearchBar from '../../components/molecules/news/SearchBar';
import { NewsViewModel } from '../../viewModels/NewsViewModel';
import { useContainerInjection } from '../../hooks/useContainerInjection';
import NewsList from '../../components/molecules/news/NewsList';
import { observer } from 'mobx-react-lite';

const SearchScreen = () => {
  const inputRef = React.useRef<TextInput>(null);
  const viewModel = useContainerInjection<NewsViewModel>('NewsViewModel');
  const colorScheme = useThemeDefaultColor();

  useFocusEffect(
    useCallback(() => {
      inputRef.current?.focus();
    }, []),
  );

  const handleSearch = async (search: string) => {
    await viewModel.searchNews(search);
  };

  return (
    <View style={{ backgroundColor: colorScheme.background }} className="flex-1">
      <Tabs.Screen
        options={{
          headerShown: true,
          headerTitle: '',
          header() {
            return <SearchBar ref={inputRef} onSearch={handleSearch} />;
          },
        }}
      />
      <NewsList
        data={viewModel.filteredNews}
        onRefresh={() => viewModel.fetchNewsData()}
        refreshing={viewModel.isLoading}
      />
    </View>
  );
};

export default observer(SearchScreen);
