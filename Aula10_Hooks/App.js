import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
// Aula - Hooks
export default function App() {
  const [nome, setNome] = useState('Lucas');
  const [entrada, setEntrada] = useState('');
 
  // Recupera o nome salvo no AsyncStorage ao iniciar o app
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nome');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);
 
  // Salva o nome no AsyncStorage sempre que ele for alterado
  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nome', nome);
    }
    saveStorage();
  }, [nome]);
 
  // Função para alterar o nome
  function alteraNome() {
    if (entrada.trim() !== "") {
      setNome(entrada); 
      setEntrada('');   
    }
  }
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        value={entrada}
        onChangeText={(texto) => setEntrada(texto)}
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnTexto}>Alterar nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 55,
   padding: 10
  },
 
  texto: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },
 
  input: {
    borderWidth: 1,
    borderRadius: 5,
  },
 
  btn: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
 
  btnTexto:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
});
 
 
 