import React, {Component} from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Pessoa extends Component{
  render() {
    return(
      <View style={estilos.areaPessoa}>
        <Image source={{uri:this.props.data.imagem}} style={estilos.imagemNoticia}></Image>
        <Text style={estilos.textoPessoa}>{this.props.data.titulo}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  areaPessoa: {
    backgroundColor: 'white',
    height: 290,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  textoPessoa: {
    color: 'black',
    fontSize: 20,
    textAlign: 'justify',
    marginLeft: 5,
    marginRight: 5
  },
  imagemNoticia: {
    width: 373,
    height: 190
  }
});

export default Pessoa