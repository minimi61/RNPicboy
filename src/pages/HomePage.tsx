import * as React from 'react';
import {useState} from 'react';

import {Pressable, ScrollView, Text, View} from 'react-native';
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

export function HomePage() {
  const filter = ['최신순11', '좋아요순', '댓글순', '조회순'];
  const [filterName, setFilterName] = useState('최신순');
  return (
    <>
      <View style={{flex: 1}}>
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
              backgroundColor: blue,
            }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 10 * REM,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  padding: 10 * REM,
                }}>
                <View
                  style={{
                    width: 120 * REM,
                    height: 120 * REM,
                    backgroundColor: gray1,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10 * REM,
                  }}>
                  <View
                    style={{
                      width: 30 * REM,
                      height: 30 * REM,
                      borderRadius: 30 * REM,
                      backgroundColor: gray4,
                    }}
                  />
                  <Text style={{marginLeft: 10 * REM}}>닉네임</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
