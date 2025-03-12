import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
 
// Aula 7 - Slider & Switch
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: true
    };
  };
  render() {
    return (
      <View style={estilos.container}>
        <Slider 
        minimumValue={0} 
        maximumValue={100} 
        step={10}
        minimumTrackTintColor='green'
        maximumTrackTintColor='red'
        thumbTintColor='black'
        ></Slider>
        
        <Switch
        value={this.state.valor}
        onValueChange={(valorSelecionado)=> this.setState({valor: valorSelecionado})}
        ></Switch>
        <Text style={estilos.texto}>{(this.state.valor) ? 'Ligado':'Desligado'}</Text>
      </View>
    );
  }
}
 
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
  }
});
 
export default App;
 