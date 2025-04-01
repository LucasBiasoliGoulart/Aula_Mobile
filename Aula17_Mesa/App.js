import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numeroPessoas: ""
    }
  }

  // Adicionar pessoas
  adicionarPessoa = (value) => {
    this.setState({ numeroPessoas: value });
  }

  // Limpar campo
  limparCampo = () => {
    this.setState({ numeroPessoas: "" });
  }

  resultado = () => {
    alert(`Número de pessoas na mesa: ${this.state.numeroPessoas}`);
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Gerenciador de Mesa</Text>
        <Image source={require('./src/mesa.png')} style={{ width: 250, height: 250}}></Image>
        <View style={{ margin: 10 }}>
          <Text style={styles.texto}>Adicionar:</Text>
          <TextInput 
            style={styles.input} 
            keyboardType='numeric' 
            value={this.state.numeroPessoas}
            onChangeText={this.adicionarPessoa}
          />
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botoes} onPress={this.resultado}>
            <Text style={styles.btnTexto}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={this.limparCampo}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textoResultado}>Número de Pessoas: {this.state.numeroPessoas}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000080'
  },
  titulo: {
    color: "#FFAA00",
    fontSize: 30,
    marginBottom: 10
  },
  input: {
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  texto: {
    color: "#FFAA00",
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row'
  },
  botoes: {
    width: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: "#FFAA00",
    margin: 5
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold"
  },
  textoResultado: {
    color: "#FFAA00",
    fontSize: 20,
    marginTop: 30
  }
});

export default App;