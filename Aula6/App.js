import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0, // default selected pizza index
      pizzas: [
        { key: 1, nome: 'Calabreza', valor: 50.00 },
        { key: 2, nome: 'Muzzarela', valor: 49.00 },
        { key: 3, nome: '4 Queijos', valor: 35.00 },
        { key: 4, nome: 'Catupiry', valor: 39.99 },
        { key: 5, nome: 'Portuguesa', valor: 40.00 },
      ]
    };
  }
 
  render() {
    let pizzaItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });
 
    return (
      <View style={estilos.container}>
        <Text style={estilos.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue) => this.setState({ pizza: itemValue })}
        >
          <Picker.Item label='Escolha aqui sua pizza' enabled={false} />
          {pizzaItem}
        </Picker>
        <Text style={estilos.pizza}>Você escolheu pizza de: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={estilos.valor}>R${this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}
 
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
 
  logo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
 
  pizza: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10
  },
 
  valor: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold'
  }
});
 
export default App;
 