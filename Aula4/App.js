import React, {Component} from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

class App extends Component {
  // Pegando nome
  constructor(props) {
    super(props);
    this.state = {nome: ''}
    this.pegar = this.pegar.bind(this);
  }

  /*pegar(texto) {
    this.setState({nome: texto})
  }*/

  pegar(texto) {
    if(texto.length > 0) {
      this.setState({nome: texto})  
    }else {
      this.setState({nome: ''})
    }
  }

  render() {
    return(
      <View style={estilos.container}>
        <TextInput style={estilos.caixa} placeholder="Digite seu nome" onChangeText={this.pegar}></TextInput>
        <View style={estilos.botao}>
          <Button title="Entrar" onPress={()=> this.pegar('Olá, seja bem vindo!')}></Button>
        </View>
        <Text style={estilos.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container:{
    flex: 1
  },
  caixa:{
    marginTop: 100,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50
  },
  texto:{
    textAlign: 'center',
    fontSize: 20
  },
  botao:{
    marginTop: 10
  }
});

export default App
