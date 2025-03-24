import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './src/Services/api.js';
import Filmes from './src/Filmes/index.js';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    async function loadFilmes() {
      const resposta = await api.get('r-api/?api=filmes');
      //console.log(resposta.data)
      setFilmes(resposta.data);
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
      data={filmes}
      keyExtractor={(item)=> String(item.id)}
      renderItem={({ item })=> <Filmes data={item}/>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
