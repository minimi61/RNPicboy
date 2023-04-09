import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';

import {
  ActivityIndicator,
  FlatList,
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
import {DataList} from '../components/DataList';
import {getCompleteData} from '../store/API';
import {serveData} from '../store/atom/data';
import {ICompleteSample} from '../store/data/complete';
import {DetailPage} from './DetailPage';
import Icon from 'react-native-vector-icons/AntDesign';

export function HomePage() {
  const filter = ['최신순', '좋아요순', '댓글순', '조회순'];
  const [filterName, setFilterName] = useState('최신순');
  const [filterNumber, setFilterNumber] = useState(1);
  const [recoilData, setRecoilData] = useRecoilState(serveData);
  const [list, setList] = useState<ICompleteSample[]>([]);
  const [page, setPage] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [loading, setLoading] = useState(false);
  const flatRef = useRef(null);

  const loadMoreData = async () => {
    setPage(page => page + 1);
    await getData({
      status: filterNumber,
      page: page,
    });
  };
  async function getData({status, page}) {
    try {
      const {data} = await getCompleteData({status, page});
      if (!!data) {
        if (page === 0) {
          setLoading(true);
          setList(data.data.content);
          // setRecoilData(data.data.content);
        } else {
          setList([...list, ...data.data.content]);
        }
      }
    } catch (error) {
      console.warn('error', error);
    }
  }

  useEffect(() => {
    getData({
      status: filterNumber,
      page: page,
    });
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filterNumber]);

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
            return (
              <Pressable
                onPress={() => {
                  setFilterName(value);
                  setFilterNumber(i + 1);
                  getData({status: i + 1, page: 0});
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {loading ? (
            <FlatList
              data={list}
              ref={flatRef}
              style={{
                padding: 10 * REM,
              }}
              keyExtractor={_ => _.date}
              numColumns={2}
              renderItem={item => {
                return <DataList data={item.item} />;
              }}
              onEndReached={loadMoreData}
              onEndReachedThreshold={0.1}
              onScroll={event => {
                const offsetY = event.nativeEvent.contentOffset.y;
                if (offsetY > 0 && !showArrow) {
                  setShowArrow(true);
                } else if (offsetY === 0 && showArrow) {
                  setShowArrow(false);
                }
              }}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
        {showArrow && (
          <Pressable
            style={{position: 'absolute', right: 10, bottom: 30}}
            onPress={() => {
              flatRef?.current.scrollToOffset({
                animated: true,
                offset: 0,
              });
            }}>
            <View
              style={{
                width: 30 * REM,
                height: 30 * REM,
                borderRadius: 30 * REM,
                backgroundColor: black,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="arrowup" size={20} color="white" />
            </View>
          </Pressable>
        )}
      </View>
    </>
  );
}
