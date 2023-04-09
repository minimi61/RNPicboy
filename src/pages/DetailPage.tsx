import * as React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {
  gray1,
  gray2,
  gray3,
  gray5,
  gray6,
  gray7,
  REM,
  white,
} from '../assets/constant';
import {ICommentData, ICompleteSample} from '../store/data/complete';
import Icon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from 'react';
import {getCommentData} from '../store/API';

function CommentList({comment}: {comment: ICommentData}) {
  return (
    <View>
      <View
        style={{
          paddingTop: 20 * REM,
        }}>
        <Text>{comment.comment}</Text>
        <View
          style={{
            width: '100%',
            height: 1 * REM,
            backgroundColor: gray7,
            marginTop: 10 * REM,
          }}></View>
      </View>
    </View>
  );
}

export function DetailPage() {
  const {params} = useRoute<RouteProp<{params: {data: ICompleteSample}}>>();
  const data = params.data;
  const [commentData, setCommentData] = useState<ICommentData[]>();
  useEffect(() => {
    async function getCommentList() {
      try {
        const {data} = await getCommentData(params.data.id);
        if (!!data) {
          setCommentData(data.data);
        }
      } catch (error) {
        console.warn('error', error);
      }
    }
    getCommentList();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: gray3}}>
      <SafeAreaView style={{flex: 1, backgroundColor: white}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'transparent'}
          translucent={true}
        />

        <View style={{paddingHorizontal: 20 * REM}}>
          <View style={{alignItems: 'center', marginTop: 20 * REM}}>
            <Image
              style={{
                width: 250 * REM,
                height: 250 * REM,
                backgroundColor: white,
              }}
              source={{uri: data.gifUrl}}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 1 * REM,
              backgroundColor: gray5,
              marginTop: 20 * REM,
            }}
          />
          <View style={{marginTop: 30 * REM}}>
            <Text style={{fontSize: 20 * REM, fontWeight: '700'}}>제시어</Text>
          </View>

          <View style={{marginTop: 20 * REM}}>
            <Text style={{fontSize: 15 * REM}}>제시어어어어</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="eye" size={20} color="black"></Icon>
              <Text
                style={{
                  marginLeft: 5 * REM,
                  marginTop: 2 * REM,
                  marginRight: 10 * REM,
                }}>
                {data.viewCount}
              </Text>
              <Icon name="like1" size={20} color="black"></Icon>
              <Text
                style={{
                  marginLeft: 5 * REM,
                  marginTop: 2 * REM,
                  marginRight: 10 * REM,
                }}>
                {data.likeCount}
              </Text>
              <FAIcon name="comment" size={20} color="black"></FAIcon>
              <Text
                style={{
                  marginLeft: 5 * REM,
                  marginTop: 2 * REM,
                  marginRight: 10 * REM,
                }}>
                {data.commentCount}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1 * REM,
              backgroundColor: gray5,
              marginTop: 20 * REM,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          {Number(data.commentCount) > 0 ? (
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20 * REM,
              }}>
              <View style={{marginTop: 15 * REM}}>
                <Text style={{fontSize: 17 * REM, fontWeight: '600'}}>
                  댓글
                </Text>
                <FlatList
                  data={commentData || []}
                  renderItem={item => {
                    return <CommentList comment={item.item} />;
                  }}
                />
              </View>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>아직 댓글이 없습니다</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
