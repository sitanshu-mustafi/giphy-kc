import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import GifItem from './GifItem';

interface InfiniteScrollListProps {
  data: any[];
  loading: boolean;
  onLoadMore: () => void;
}

const InfiniteScrollList: React.FC<InfiniteScrollListProps> = ({
  data,
  loading,
  onLoadMore,
}) => {
  const renderItem = ({ item }: { item: any }) => {
    return <GifItem imageUrl={item.images.original.url} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading && <ActivityIndicator size='large' color='#0000ff' />
      }
      numColumns={3}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default InfiniteScrollList;
