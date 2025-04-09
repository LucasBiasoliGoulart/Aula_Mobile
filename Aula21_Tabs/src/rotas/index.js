import React from 'react';
import IconesEXPO from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/index';
import Sobre from '../pages/Sobre/index';
import Contato from '../pages/Contato/index';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return(
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00EEFF",
        tabBarStyle: {
          backgroundColor: "#292929",
          borderTopWidth: 0
        }
      }}>
        <Tab.Screen name = 'Home' component = {Home} options={{
          tabBarIcon: ({ color, size })=> {
            return <IconesEXPO name='home' color={color} size={size} />
          }
        }}></Tab.Screen>
        <Tab.Screen name = 'Sobre' component = {Sobre} options={{
          tabBarIcon: ({ color, size })=> {
            return <IconesEXPO name='file-text' color={color} size={size}/>
          }
        }}></Tab.Screen>
        <Tab.Screen name = 'Contato' component = {Contato} options={{
          tabBarIcon: ({ color, size })=> {
            return <IconesEXPO name='phone' color={color} size={size}/>
          }
        }}></Tab.Screen>
      </Tab.Navigator>
  );
}