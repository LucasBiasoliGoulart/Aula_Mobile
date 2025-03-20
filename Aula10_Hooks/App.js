import React, {useState, useEffect, useMemo, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
// Aula - Hooks
export default function App() {
  const [nome, setNome] = useState('Lucas');
  const [entrada, setEntrada] = useState('');
  const nomeNovo = useRef(null);
 
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

  const letras = useMemo(()=> {
    console.log('Mudou');
    return nome.length;
  },[nome]);

  // Colocar um nome novo
  function novoNome() {
    nomeNovo.current.focus();
  }
 
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
        ref={nomeNovo}
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnTexto}>Alterar nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>{nome} tem {letras} letras</Text>
      <TouchableOpacity style={styles.btn} onPress={novoNome}>
        <Text style={styles.btnTexto}>Novo nome</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        value={entrada}
        onChangeText={(texto) => setEntrada(texto)}
      />
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
    fontSize: 20,
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