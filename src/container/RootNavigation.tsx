import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {SplashPage} from '../pages/SplashPage';
import {BottomTabNavigation} from './BottomTabNavigation';
import {SignUpPage} from '../pages/SignUpPage';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PicBoy"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SinUpPage" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
