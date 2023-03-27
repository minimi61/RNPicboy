import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootNavigation from './src/container/RootNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return <RootNavigation />;
}

export default App;
