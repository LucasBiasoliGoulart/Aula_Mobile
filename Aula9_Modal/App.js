import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, Image, TouchableOpacity } from 'react-native';
import Entrar from "./src/Entrar.js";

// Aula - Modal
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibModal: false,
      precoA: 0,
      precoG: 0,
      resultado: ''
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.calcular();
    this.setState({ visibModal: true });
  }

  sair(estado) {
    this.setState({
      visibModal: estado,
      precoA: 0,
      precoG: 0
    });
  }

  // Calcular
  calcular() {
    const { precoA, precoG } = this.state;
    if(precoA > 0 && precoG > 0) {
      const resultado = (precoA / precoG) < 0.7 ? 'Álcool é melhor' : 'Gasolina é melhor';
      this.setState({ resultado });
    }
  }

  render() {
    let icone = 'https://cdn-icons-png.flaticon.com/512/2933/2933939.png'
    const resultadoCor = this.state.resultado === 'Álcool é melhor' ? 'lime' : this.state.resultado === 'Gasolina é melhor' ? 'orange' : 'white';
    return (
      <View style={estilos.container}>
        <View style={estilos.banner}>
          <Image source={{uri:icone}} style={estilos.icone}></Image>
          <Text style={estilos.titulo}>Qual a melhor opção ?</Text>
        </View>
        <View style={estilos.caixa}>
          <Text style={estilos.texto}>Alcool (preço por litro):</Text>
          <TextInput 
            style={estilos.input} 
            keyboardType='numeric' 
            onChangeText={(text)=> this.setState({ precoA: parseFloat(text) })}
            value={this.state.precoA ? this.state.precoA.toString() : ''}
          />
        </View>
        <View style={estilos.caixa}>
          <Text style={estilos.texto}>Gasolina (preço por litro):</Text>
          <TextInput 
            style={estilos.input}
            keyboardType='numeric'
            onChangeText={(text)=> this.setState({ precoG: parseFloat(text) })}
            value={this.state.precoG ? this.state.precoG.toString() : ''}
          />
        </View>
        <TouchableOpacity style={estilos.botao} onPress={this.entrar}>
          <Text style={estilos.texto}>Calcular</Text>
        </TouchableOpacity>
        <Modal visible={this.state.visibModal} animationType='fade' transparent={true}>
          <View style={{ 
              flex: 1, 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: 10 
            }}>
            <Entrar 
              precoA={this.state.precoA} 
              precoG={this.state.precoG}
              resultado={this.state.resultado}
              resultadoCor={resultadoCor}
              fechar={()=> this.sair(false)}
            ></Entrar>
          </View>
        </Modal>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#292929',
    padding: 10
  },
  banner: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: 30
  },
  icone: {
    width: 270,
    height: 270,
  },
  titulo: {
    fontSize: 25,
    color: 'white',
  },
  texto: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5
  },
  caixa: {
    width: '100%',
    marginBottom: 17
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5
  },
  botao: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5
  }
});

export default App;
