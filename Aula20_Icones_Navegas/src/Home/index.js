import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navegacao = useNavigation();
  function verFilmes() {
    navegacao.navigate("Filmes")
  }
  function verContato() {
    navegacao.navigate("Contato")
  }
  return(
    <View style={styles.container}>
      <Image source={require('./cinema.png')} style={{ width: 290, height: 290}}></Image>
      <Text style={styles.titulo}>Bem Vindo</Text>
      <Text style={styles.subtitulo}>Você gosta de filmes, sabe qual quer assistir?</Text>
      <TouchableOpacity style={styles.botao} onPress={verFilmes}>
        <Text style={styles.btnTexto}>Ver Filmes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={verContato}>
        <Text style={styles.btnTexto}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#292929"
  },
  titulo: {
    fontSize: 40,
    fontWeight: '400',
    color: "#FF2929",
    marginBottom: 5
  },
  subtitulo: {
    color: "#FFF",
    fontSize: 17,
    marginBottom: 10
  },
  botao: {
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF2929",
    margin: 5
  },
  btnTexto: {
    color: "#FFF",
    fontSize: 20
  }
});