import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Entrar from "./src/Entrar.js";

// Aula 10 - Modal
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibModal: false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({visibModal: true})
  }

  sair(estado) {
    this.setState({visibModal: estado})
  }

  render() {
    return (
      <View style={estilos.container}>
        <Button title='Entrar' onPress={this.entrar}></Button>
        <Modal visible={this.state.visibModal} animationType='fade' transparent={true}>
          <View style={{ marginTop: 15, flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Entrar fechar={()=> this.sair(false)}></Entrar>
          </View>
        </Modal>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
  },
});

export default App;
