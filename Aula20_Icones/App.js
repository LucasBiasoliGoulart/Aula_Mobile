import React from 'react';
//import IconesEXPO from '@expo/vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home/index';
import Sobre from './src/Sobre/index';
import Contato from './src/Contato/index';

const Pilha = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>

      <Pilha.Navigator>
        <Pilha.Screen name="Home" component={Home} options={{
          title: 'Tela Inicial',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: "#292929"
          },
          //headerShown: true
        }}></Pilha.Screen>
        <Pilha.Screen name="Sobre" component={Sobre} options={{
          title: 'Tela Sobre',
        }}></Pilha.Screen>
         <Pilha.Screen name="Contato" component={Contato} options={{
          title: 'Tela Contato',
        }}></Pilha.Screen>
      </Pilha.Navigator>

    </NavigationContainer>
  );
}