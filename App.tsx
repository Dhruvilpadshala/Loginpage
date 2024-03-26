import React from 'react';
import {enableScreens} from 'react-native-screens';
enableScreens();
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import Fristname from './Components/Fristname';
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Fristname />
    </ApplicationProvider>
  );
}
