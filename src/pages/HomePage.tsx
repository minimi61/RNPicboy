import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useEffect, useState} from 'react';

import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {useRecoilState} from 'recoil';
import {
  black,
  blue,
  gray1,
  gray3,
  gray4,
  gray7,
  gray8,
  REM,
} from '../assets/constant';
import {getCompleteData} from '../store/API';
import {serveData} from '../store/atom/data';
import {ICompleteSample} from '../store/data/complete';
import {DetailPage} from './DetailPage';

export function HomePage() {
  const filter = ['최신순', '좋아요순', '댓글순', '조회순'];
  const [filterName, setFilterName] = useState('최신순');
  const [recoilData, setRecoilData] = useRecoilState(serveData);
  const [data, setData] = useState<ICompleteSample[]>();
  const navigation = useNavigation();

  async function getData() {
    try {
      const {data} = await getCompleteData();
      if (!!data) {
        setData(data.data.content);
        setRecoilData(data.data.content);
      }
    } catch (error) {
      console.warn('error', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'transparent'}
          translucent={true}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 50 * REM,
            justifyContent: 'space-around',
            padding: 10 * REM,
          }}>
          {filter.map((value, i) => {
            console.log(filter.length, i);
            return (
              <Pressable
                onPress={() => {
                  setFilterName(value);
                }}>
                <View
                  key={i}
                  style={{
                    borderRightWidth: i === filter.length - 1 ? null : 1 * REM,
                    borderRightColor: gray4,
                    paddingRight: i === filter.length - 1 ? 10 * REM : 20 * REM,
                  }}>
                  <Text
                    style={{
                      fontSize: 16 * REM,
                      fontWeight: filterName === value ? 800 : 500,
                      color: filterName === value ? black : gray4,
                    }}>
                    {value}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 10 * REM,
              justifyContent: 'center',
            }}>
            {(data || []).map(value => (
              <View
                style={{
                  padding: 20 * REM,
                }}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('DetailPage', {data: value})
                  }>
                  <Image
                    style={{
                      width: 120 * REM,
                      height: 120 * REM,
                    }}
                    source={{uri: value.gifUrl}}
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
                    source={{uri: value.profileImg}}
                  />
                  {console.log(value.nickname.length)}
                  <Text style={{marginLeft: 10 * REM}}>
                    {value.nickname.length > 8
                      ? value.nickname.slice(0, 8)
                      : value.nickname}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
