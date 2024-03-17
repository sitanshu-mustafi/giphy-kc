import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder='Search for GIFs'
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default SearchInput;
