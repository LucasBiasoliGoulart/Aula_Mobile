import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return(
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image source={require('../assets/perfil.png')} style={styles.imagem}></Image>
        <Text style={styles.texto}>Bem Vindo!</Text>
      </View>
      <DrawerItemList {...props}></DrawerItemList>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 90,
    height: 90
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});