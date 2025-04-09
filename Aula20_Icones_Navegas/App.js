import React from 'react';
//import IconesEXPO from '@expo/vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home/index';
import Filmes from './src/Filmes/index';
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
            backgroundColor: "#1b1b1b"
          },
          //headerShown: true
        }}></Pilha.Screen>
        <Pilha.Screen name="Filmes" component={Filmes} options={{
          title: 'Lista de Filmes',
          headerTintColor: '#FF2929',
          headerStyle: {
            backgroundColor: "#1b1b1b"
          }
        }}></Pilha.Screen>
         <Pilha.Screen name="Contato" component={Contato} options={{
          title: 'Tela Contato',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: "#1b1b1b"
          },
        }}></Pilha.Screen>
      </Pilha.Navigator>

    </NavigationContainer>
  );
}