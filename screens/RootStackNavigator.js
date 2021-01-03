import React from 'react';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import IntroScreen from './IntroScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import RootTabScreen from './RootTabScreen';
const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none' screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <RootStack.Screen name="IntroScreen" component={IntroScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="RootTabScreen" component={RootTabScreen}/>
    </RootStack.Navigator>
);
export default RootStackScreen;