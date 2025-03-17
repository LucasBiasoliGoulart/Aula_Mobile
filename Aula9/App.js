import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Aula 9 - AsyncStorage
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrada: "",
      nome: ""
    };
    this.gravarNome = this.gravarNome.bind(this);
  }

  async componentDidMount() {
    await AsyncStorage.getItem("nome").then((value)=> {
      this.setState({nome: value});
    });
  }
  async componentDidUpdate(_, prevState) {
    if(prevState !== this.state.nome) {
      await AsyncStorage.setItem('nome', this.state.nome)
    }
  }

  gravarNome() {
    const{entrada} = this.state;
    this.setState({
      nome: this.state.entrada
    });
    AsyncStorage.setItem("nome", entrada);
    alert('Salvo com sucesso')
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.viewEntrada}>
          <TextInput style={estilos.input} 
          value={this.state.entrada} 
          onChangeText={(texto)=> this.setState({entrada: texto})}
          ></TextInput>
          <TouchableOpacity onPress={this.gravarNome}>
            <Text style={estilos.botao}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={estilos.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    alignItems: 'center'
  },
  viewEntrada: {
    flexDirection: "row",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10
  },
  botao: {
    backgroundColor: '#000',
    color: 'white',
    height: 40,
    padding: 10,
    borderWidth: 1,
  },
  texto: {
    fontSize: 20,
    marginTop: 10
  }
});

export default App;
