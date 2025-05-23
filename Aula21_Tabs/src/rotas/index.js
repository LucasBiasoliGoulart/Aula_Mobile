import React from 'react';
import IconesEXPO from '@expo/vector-icons/Feather';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Home from '../pages/Home/index';
import Stackrotas from './stackrota'
import Sobre from '../pages/Sobre/index';
import Contato from '../pages/Contato/index';

//const Tab = createBottomTabNavigator();

/*export default function Rotas() {
  return(
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: true,
      tabBarActiveTintColor: "#000",
      tabBarStyle: {
        borderTopWidth: 0
      }
    }}>
    <Tab.Screen name = 'Home' component = {Stackrotas} options={{
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
}*/

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

// Criando Drawer
export default function Rotas() {
  return(
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    screenOptions={{
      headerShown: true,
      drawerStyle: {
        backgroundColor: '#FFF'
      },
      drawerActiveBackgroundColor: '#00B2FF',
      drawerActiveTintColor: '#FFF',
      drawerInactiveBackgroundColor: '#EEE',
      drawerInactiveTintColor: '#000'
    }}>
      <Drawer.Screen name='HomeStack' component={Stackrotas}/>
      <Drawer.Screen name='Sobre' component={Sobre}/>
      <Drawer.Screen name='Contato' component={Contato}/>
    </Drawer.Navigator>
  );
}