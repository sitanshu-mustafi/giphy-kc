import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../common/Logo';
import SearchInput from '../common/SearchInput';
import InfiniteScrollList from '../common/InfiniteScrollList';
import useTrendingGifs from '../../hooks/useTrendingGifs';

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { trendingGifs, loading, loadMore } = useTrendingGifs();

  return (
    <View style={styles.container}>
      <Logo />
      <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
      <InfiniteScrollList
        data={trendingGifs}
        loading={loading}
        onLoadMore={loadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width: '100%',
  },
});

export default HomeScreen;
