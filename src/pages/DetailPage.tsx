import * as React from 'react';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {gray1, gray2, gray5, gray7, REM} from '../assets/constant';
import {ICompleteSample} from '../store/data/complete';

interface IParamsData {
  params: {
    data: ICompleteSample;
  };
}

export function DetailPage() {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<{params: {data: ICompleteSample}}>>();
  console.log('params', params.data);
  return (
    <>
      <SafeAreaView>
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
                backgroundColor: gray1,
              }}
              source={{uri: params.data.gifUrl}}
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
          <View
            style={{
              width: '100%',
              height: 1 * REM,
              backgroundColor: gray5,
              marginTop: 20 * REM,
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
