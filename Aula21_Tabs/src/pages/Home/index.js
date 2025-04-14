import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Home() {
  const navegacao = useNavigation();
  function chamaDetalhe() {
    navegacao.navigate('Detalhes')
  }
  return(
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput></TextInput>
      <Button title='ir para detalhes' onPress={chamaDetalhe}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});