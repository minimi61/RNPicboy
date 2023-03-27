import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../pages/HomePage';
import {SettingPage} from '../pages/SettingPage';
import {REM} from '../assets/constant';

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="PicBoy"
        component={HomePage}
        options={{
          headerStyle: {
            height: 100 * REM,
          },
        }}
      />
      <Tab.Screen name="Setting" component={SettingPage} />
    </Tab.Navigator>
  );
}
