import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

// Aula 8 - Dasafio Banco
// Nome (InputText)
// Idade (InputText)
// Sexo (Picker)
// Limite (Slider)
// Estudante (Switch)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valors: false,
      valor: 0, 
      genero: 0, 
      generos: [
        { key: 1, nome: 'Masculino' },
        { key: 2, nome: 'Feminino' },
        { key: 3, nome: 'Não Opinir' }
      ],
      nome: '', 
      idade: '',
      nomeErro: false,
      idadeErro: false 
    };
  }

  validadorFormulario = () => {
    const { nome, idade, genero, valor, valors } = this.state;

    // Verificar os campos preenchidos
    const nomeErro = nome.trim() === '';
    const idadeErro = idade.trim() === '';

    this.setState({ nomeErro, idadeErro });

    if (nomeErro || idadeErro) {
      Alert.alert('Erro', 'Por favor preencha todos os campos obrigatóris.');
      return false;
    }
    return true;
  }

  mostraAlert = () => {
    if (this.validadorFormulario()) {
      const { nome, idade, genero, valor, valors } = this.state;
      const sexo = this.state.generos.find(g => g.key === genero)?.nome || 'Não definido';
      const estudante = valors ? 'Sim' : 'Não';

      Alert.alert(
        'Sua conta foi aberta com sucesse',
        `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$ ${valor}\nEstudante: ${estudante}`,
        [{ text: 'OK' }]
      );
    }
  }

  render() {
    let generoItem = this.state.generos.map((v, k) => {
      return <Picker.Item key={k} value={v.key} label={v.nome} />
    });

    return (
      <View style={estilos.container}>
        <View style={estilos.banner}>
          <Text style={estilos.titulo}>Formulário</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={estilos.texto}>Nome:</Text>
          <TextInput
            style={[estilos.input, this.state.nomeErro && { borderColor: 'red' }]}
            placeholder='Digite seu nome'
            value={this.state.nome}
            onChangeText={(text) => this.setState({ nome: text })}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={estilos.texto}>Idade:</Text>
          <TextInput
            style={[estilos.input, this.state.idadeErro && { borderColor: 'red' }]}
            keyboardType='numeric'
            placeholder='Digite sua idade'
            value={this.state.idade.toString()}
            onChangeText={(text) => this.setState({ idade: text })}
          />
        </View>
        <View style={{ width: 350, alignItems: 'center', flexDirection: 'row' }}>
          <Text style={estilos.texto}>Sexo:</Text>
          <Picker
            style={estilos.tamanho}
            selectedValue={this.state.genero}
            onValueChange={(itemValue) => this.setState({ genero: itemValue })}
          >
            {generoItem}
          </Picker>
        </View>
        <View style={{ width: 350 }}>
          <Text style={estilos.texto}>Seu Limite: R$ {this.state.valor}</Text>
          <Slider
            style={{ width: 350 }}
            minimumValue={0}
            maximumValue={1000}
            value={this.state.valor}
            step={10}
            onValueChange={(valor) => this.setState({ valor })}
          />
        </View>
        <View style={{ width: 350, alignItems: 'center', flexDirection: 'row' }}>
          <Text style={estilos.texto}>Estudante:</Text>
          <Switch
            value={this.state.valors}
            onValueChange={(valorSelecionado) => this.setState({ valors: valorSelecionado })}
          />
        </View>
        <View style={{ width: 350 }}>
          <Button title='Abrir Conta' onPress={this.mostraAlert} />
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    display: 'flex',
    alignItems: 'center'
  },
  banner: {
    display: 'flex',
    alignItems: 'center'
  },
  titulo: {
    color: 'dodgerblue',
    fontSize: 30
  },
  input: {
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10
  },
  tamanho: {
    width: 300,
    alignItems: 'center',
    flexDirection: 'row'
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default App;
