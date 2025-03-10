import React, {Component} from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {nome: '', input: ''}
    this.entrar = this.entrar.bind(this);
  }
  entrar() {
    if(this.state.input === ''){
      alert('Digite seu nome');
      return;
    }
    this.setState({nome: 'Seja bem vindo!' + this.state.input});
  }

  render() {
    return(
      <View style={estilos.container}>
        <TextInput style={estilos.caixa} placeholder="Digite seu nome" onChangeText={(texto)=> this.setState({input: texto})}></TextInput>
        <View style={estilos.botao}>
          <Button title="Entrar" onPress={this.entrar}></Button>
        </View>
        <Text style={estilos.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'mediumturquoise'
  },
  caixa:{
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  texto:{
    textAlign: 'center',
    fontSize: 20
  },
  botao:{
    width: 200,
    marginTop: 10
  }
});

export default App
