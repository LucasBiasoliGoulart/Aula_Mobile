import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import api from './src/Services/api.js';
import Filmes from './src/Filmes/index.js';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function loadFilmes() {
      const resposta = await api.get('r-api/?api=filmes');
      setFilmes(resposta.data);
      setLoading(false)
    }
    loadFilmes();
  }, []);

  if(loading) {
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color={'dodgerblue'} size={80}></ActivityIndicator>
      </View>
    );
  }else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
