import React, { useRef, useState }from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

const BotaoAnimado = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const refBotao = useRef(null);
  const refTexto = useRef(null);

  // Armazenar o email, senha e cor de texto erro
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [corTextoErro, setCorTextoErro] = useState('#000');
  const [corBotaoErro, setCorBotaoErro] = useState('#000');

  function validarLogin() {
    if(email !== "example@gmail.com" || senha !== "123") {
      setCorTextoErro('#D60C0C');
      setCorBotaoErro('#D60C0C')
      refBotao.current.shake();
      refTexto.current.bounceIn();
    }else {
      setCorTextoErro("#000");
      setCorBotaoErro("#000");
    }
  }

  return(
    <View style={styles.container}>
      <Animatable.Text 
      animation="bounceIn" 
      iterationCount={1}
      duration={5000}
      ref={refTexto}
      style={[styles.texto, { color: corTextoErro }]}>Login Animado!</Animatable.Text>

      <Text style={[styles.subTexto, { color: corTextoErro }]}>Faça seu cadastro</Text>

      <View>
        <View style={{ margin: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Email:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Digite seu email'
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Senha:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Digite seu senha'
            value={senha}
            onChangeText={setSenha}
          />
        </View>
      </View>

      <BotaoAnimado 
      animation="shake" 
      iterationCount={1}
      duration={5000}
      style={[styles.botao, { backgroundColor: corBotaoErro }]}
      onPress={validarLogin}
      ref={refBotao}>
        <Text style={{ color: "#FFF", fontSize: 20 }}>Cadastre-se</Text>
      </BotaoAnimado>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34FF85'
  },
  texto: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subTexto: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 5
  },
  botao: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#000",
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 10
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFF",
  }
});