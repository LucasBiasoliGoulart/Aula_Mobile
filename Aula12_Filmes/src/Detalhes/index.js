import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.botaoFechar} onPress={props.fecharModal}>
            <Text style={styles.textoFechar}>Fechar</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>{props.filme.nome}</Text>
          <Text style={styles.textoSinopse}>Sinopse:</Text>
          <Text style={styles.textoDetalhes}>{props.filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  modalContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#292929',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  botaoFechar: {
    backgroundColor: '#E22E2E',
    padding: 10,
    margin: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  textoFechar: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titulo: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  textoSinopse: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
  },
  textoDetalhes: {
    color: '#FFF',
    fontSize: 16,
    margin: 10,
    textAlign: 'justify'
  }
});
