import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>Giphy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Logo;
