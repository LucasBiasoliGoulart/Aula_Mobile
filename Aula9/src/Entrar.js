import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// Aula 10 - Modal
class Entrar extends Component {
  render() {
    return (
      <View style={{ 
        backgroundColor: '#292929', 
        width: '100%', 
        height: 350, 
        borderRadius: 20
      }}>
        <Text style={{ color: "#fff", fontSize: 25, padding: 15, textAlign: 'center' }}>Seja Bem Vindo !!</Text>
        <Button title='Sair' onPress={() => this.props.fechar()} />
      </View>
    );
  }
}

export default Entrar;
