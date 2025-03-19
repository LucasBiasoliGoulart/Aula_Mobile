import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Aula - Modal
class Entrar extends Component {
  render() {
    const { precoA, precoG, resultado } = this.props;
    let icone = 'https://cdn-icons-png.flaticon.com/512/5984/5984310.png'
    return (
      <View style={estilos.carta}>
        <View style={estilos.banner}>
          <Image source={{uri:icone}} style={estilos.icone}></Image>
          <Text style={estilos.titulo}>{resultado}</Text>
        </View>
        <View style={estilos.caixa}>
          <Text style={estilos.subtitulo}>Com os preços:</Text>
          <Text style={estilos.textos}>Álcool: R${precoA}</Text>
          <Text style={estilos.textos}>Gasolina: R${precoG}</Text>
        </View>
        <TouchableOpacity style={estilos.botao} onPress={() => this.props.fechar()}>
          <Text style={estilos.texto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  carta: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#141414',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  banner: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  icone: {
    width: 230,
    height: 230,
  },
  titulo: {
    color: 'lime',
    fontSize: 30,
    padding: 5,
    textAlign: 'center'
  },
  subtitulo: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  caixa: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'column'
  },
  textos: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5
  },
  texto: {
    color: 'white',
    fontSize: 20
  },
  botao: {
    width: '90%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5
  }
});

export default Entrar;
