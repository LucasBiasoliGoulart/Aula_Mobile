import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// Aula - Hooks
export default function App() {
  const [nome, setNome] = useState('Lucas');
  const [entrada, setEntrada] = useState('');

  function alteraNome() {
    setNome(entrada);
    setEntrada('');
  }
  return (
    <View style={estilos.container}>
      <TextInput style={estilos.input} 
      value={entrada} 
      placeholder='Digite seu nome'
      onChangeText={(texto)=> setEntrada(texto)}
      ></TextInput>
      <TouchableOpacity style={estilos.botao} onPress={alteraNome}>
        <Text style={estilos.minTexto}>Clicar</Text>
      </TouchableOpacity>
      <Text style={estilos.texto}>{nome}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 10
  },
  botao: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  minTexto: {
    textAlign: 'center',
    fontSize: 20
  }
});
