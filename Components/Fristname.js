// import React from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Loginpage';
import {Secondpage} from './Signuppage';
import {Home} from './Home';
import {Page} from './Page';

const Stack = createStackNavigator();

export default Fristname = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen">
      <Stack.Screen name="Screen" component={Page} />
      <Stack.Screen name="Loginpage" component={HomeScreen} />
      <Stack.Screen name="Signuppage" component={Secondpage} />
      <Stack.Screen name="Homepage" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
