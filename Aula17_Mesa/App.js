import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numeroPessoas: "",
      imagem: require('./src/mesa.png')
    }
  }

  // Adicionar pessoas e mudar a imagem de mesa
  adicionarPessoa = (value) => {
    this.setState({ numeroPessoas: value }, () => {
      this.mudarImagem();
    });
  }

  // Limpar campo
  limparCampo = () => {
    this.setState({ numeroPessoas: "", imagem: require('./src/mesa.png') });
  }

  // Mudar a imagem com número de pessoas
  mudarImagem = () => {
    const { numeroPessoas } = this.state;
    const pessoas = parseInt(numeroPessoas, 10);
    let imagem;

    if(pessoas < 2) {
      imagem = require('./src/mesa2.png');
    }else if (pessoas < 4) {
      imagem = require('./src/mesa4.png');
    }else if(pessoas < 6) {
      imagem = require('./src/mesa6.png');
    }else {
      imagem = require('./src/mesaMaior.png');
    }

    this.setState({ imagem });
  }

  resultado = () => {
    alert(`Mesa para: ${this.state.numeroPessoas}`);
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Restaurante</Text>
        <Image source={this.state.imagem} style={{ width: 250, height: 250}}></Image>
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
    width: 145,
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
});

export default App;