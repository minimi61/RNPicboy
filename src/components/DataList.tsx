import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {gray4, REM, white} from '../assets/constant';
import {ICompleteSample, Iparticipant} from '../store/data/complete';

interface IData {
  data: ICompleteSample;
}

export function DataList({data}: IData) {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          padding: 20 * REM,
        }}>
        <Pressable
          onPress={() => navigation.navigate('DetailPage', {data: data})}>
          <Image
            style={{
              width: 120 * REM,
              height: 120 * REM,
              backgroundColor: white,
            }}
            source={{uri: data.gifUrl}}
          />
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10 * REM,
          }}>
          <Image
            style={{
              width: 30 * REM,
              height: 30 * REM,
              borderRadius: 30 * REM,
              backgroundColor: gray4,
            }}
            source={{uri: data.profileImg}}
          />
          <Text style={{marginLeft: 10 * REM}}>
            {data.nickname.length > 8
              ? data.nickname.slice(0, 8)
              : data.nickname}
          </Text>
        </View>
      </View>
    </View>
  );
}
