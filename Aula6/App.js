import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Aula 6 - Picker
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Calabreza', valor: 50.00},
        {key: 2, nome: 'Muzzarela', valor: 49.00},
        {key: 3, nome: '4 Queijos', valor: 35.00},
        {key: 4, nome: 'Catupiry', valor: 39.99}
      ]
    };
  }
  render() {
    let pizzaItem = this.state.pizzas.map((v, k)=> {return <Picker.Item key={k} value={v} label={v.nome}/>})
    return(
      <View style={estilos.container}>
        <Text style={estilos.logo}>Menu Pizza</Text>
        <Picker selectedValue={1} onValueChange={(ItemValue, ItemIndex)=> this.setState({pizzas: ItemValue})}> 
          <Picker.Item label="Escolha sua Pizza" enabled={false}/>
          {pizzaItem}
        </Picker>
        <Text style={estilos.pizzas}>Você escolheu a pizza de: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={estilos.valor}>R$: 50.00</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  pizzas: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10
  },
  valor: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold'
  }
});

export default App