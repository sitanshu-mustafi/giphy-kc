import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HomeScreen />
    </View>
  );
};

export default App;
