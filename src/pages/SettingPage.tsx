import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {kakaoColor, REM} from '../assets/constant';
import {LoginPage} from './LoginPage';

export function SettingPage() {
  const navigation = useNavigation();
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => navigation.navigate('LoginPage')}>
          <View
            style={{
              width: 200 * REM,
              height: 30 * REM,
              backgroundColor: kakaoColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>카카오톡 로그인하기</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}
