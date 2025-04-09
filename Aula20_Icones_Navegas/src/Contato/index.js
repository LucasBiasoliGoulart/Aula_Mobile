import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function App() {
  const navegacao = useNavigation();

  function voltarHome() {
    navegacao.dispatch(StackActions.popToTop())
  }
  return(
    <View style={styles.container}>
      <Text style={{ color: "#FFF", fontSize: 40, fontWeight: 'bold'}}>Contato</Text>
      <View style={{ margin: 5 }}>
        <Text style={{ color: "#FF2929", fontSize: 20}}>Nome completo:</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome'/>
      </View>
      <View style={{ margin: 5 }}>
        <Text style={{ color: "#FF2929", fontSize: 20}}>Email:</Text>
        <TextInput style={styles.input} placeholder='Digite seu email'/>
      </View>
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity style={styles.botao} onPress={voltarHome}>
          <Text style={styles.btnTexto}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.btnTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#292929"
  },
  input: {
    width: 300,
    borderRadius: 5,
    backgroundColor: "#FFF"
  },
  botao: {
    width: 140,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF2929",
    margin: 5
  },
  btnTexto: {
    color: "#FFF",
    fontSize: 20
  }
});