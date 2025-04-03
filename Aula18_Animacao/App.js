import React, { useRef }from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const BotaoAnimado = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const refBotao = useRef(null);
  const refTexto = useRef(null);

  function clicar() {
    refBotao.current.shake();
    refTexto.current.bounceIn();
  }

  return(
    <View style={styles.container}>
      <Animatable.Text 
      animation="bounce" 
      iterationCount={3}
      duration={5000}
      ref={refTexto}
      style={styles.texto}>Hello World!</Animatable.Text>

      <BotaoAnimado 
      animation="shake" 
      iterationCount={3}
      duration={5000}
      style={styles.botao}
      onPress={clicar}
      ref={refBotao}>
        <Text style={{ color: "#FFF", fontSize: 20 }}>Click</Text>
      </BotaoAnimado>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  botao: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#0000ff",
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 10
  }
});