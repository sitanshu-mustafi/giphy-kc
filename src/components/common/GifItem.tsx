import React from 'react';
import { Dimensions, Image, StyleSheet, Text } from 'react-native';

interface GifItemProps {
  imageUrl: string;
}
const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

const GifItem: React.FC<GifItemProps> = ({ imageUrl }) => {
  return (
    <Image
      source={{
        uri: imageUrl,
      }}
      style={styles.gifImage}
      resizeMode='cover'
    />
  );
};

const styles = StyleSheet.create({
  gifImage: {
    width: screenWidth / numColumns,
    height: screenWidth / numColumns,
    marginBottom: 10,
  },
});

export default GifItem;
