import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator'


export default function App() {
  return (
    <View>
     <AppContainer/>
    </View>
  )
}

 const AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  BottomTab:{screen: AppTabNavigator}

 });
  const AppContainer=createAppContainer(switchNavigator)
