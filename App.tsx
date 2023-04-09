import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import RootNavigation from './src/container/RootNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <RootNavigation />
    </RecoilRoot>
  );
}

export default App;
