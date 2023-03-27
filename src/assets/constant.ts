import {Dimensions, Platform} from 'react-native';

export const white = '#FFFFFF'; // rgb(255,255,255)
export const black = '#16161D';
export const gray1 = '#222222';
export const gray2 = '#333333';
export const gray3 = '#4F4F4F';
export const gray4 = '#828282';
export const gray5 = '#BDBDBD';
export const gray6 = '#E0E0E0';
export const gray7 = '#F2F2F2';
export const gray8 = '#F9F9F9';
export const gray9 = '#F0F0F0';
export const classGreenColor = '#45ADA2';
export const classDreamColor = '#E37E7A';
export const kakaoColor = '#FFDE00';
export const naverColor = '#58B93E';
export const darkColor = '#787880';
export const iris = '#A5A6F6';
export const blueLight = '#007AFF';
export const blue = '#5D93D0';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const REM = deviceWidth / 375; // per device width
export const isAndroid = Platform.OS === 'android'; // per device width
