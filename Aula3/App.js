import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component {
  render() {
    return(
      <View style={estilos.container}>
        <Text style={estilos.textoPrincipal}>Texto 1</Text>
        <Text style={estilos.textoSecondario}>Texto 2</Text>
        <Text style={[estilos.textoPrincipal, estilos.textoSecondario]}>Texto 3</Text>
      </View>
    );
  }
}

// Criando Estilos
const estilos = StyleSheet.create({
  container:{
    marginTop: 100,
    backgroundColor: 'lightblue'
  },
  textoPrincipal:{
    fontSize: 20,
    color: 'blue'
  },
  textoSecondario:{
    textAlign: 'center',
    color: 'blue'
  }
});

export default App
