import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/index';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar backgroundColor="red" barStyle="dark-content"/>
    </NavigationContainer>
  );
}
