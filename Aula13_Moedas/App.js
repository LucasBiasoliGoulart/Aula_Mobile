import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import PickerItem from './src/Picker';
import { api } from './src/Services/api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [moedas, setMoedas] = useState([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null)

 useEffect(()=>{
    async function loadMoedas() {
      const resposta = await api.get("all")
      let arrayMoedas = [];
      Object.keys(resposta.data).map((key)=>{
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })
      setMoedas(arrayMoedas)
      setLoading(false)
      setMoedaSelecionada(arrayMoedas[0].key)
    }
    loadMoedas()
 },[])

  if(loading) {
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color={'dodgerblue'} size={80}></ActivityIndicator>
      </View>
    );
  }else {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Selecione sua Moeda</Text>
          <PickerItem 
            moedas={moedas}
            moedaSelecionada={moedaSelecionada}
            quandoMudar={(moeda)=> setMoedaSelecionada(moeda)}
          />
          <Text style={styles.titulo}>Digite uma valor para converter em (R$)</Text>
          <TextInput style={styles.input} keyboardType='numeric' placeholder='EX: 1.50'></TextInput>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Converter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card2}>
          <Text style={styles.texto}>USD</Text>
          <Text style={styles.texto}>Corresponde a</Text>
          <Text style={styles.texto}>R$</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929'
  },
  card: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 17
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#EBEBEB',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5
  },
  botao: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#34C25E'
  },
  textoBotao: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF'
  },
  card2: {
    width: '90%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  texto:{
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 5,
    marginTop: 5
  },
});
