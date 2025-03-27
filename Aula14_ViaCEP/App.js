import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

export default function App() {
  // Exibir as informações do CEP
  const [cep, setCep] = useState("");
  const [dadosCep, setDadosCep] = useState(null);

  const consultarCEP = async () => {
    try {
      const resultado = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
      setDadosCep(resultado.data)

    }catch (error) {
      console.log("Erro ao consultar CEP:", error);
    }
  };

  // Limpar os dados 
  const limparCampus = () => {
    setCep('');
    setDadosCep(null);
  }

  return (
    <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>App CEP</Text>
          <Text style={styles.titulo2}>Digite o CEP</Text>
          <TextInput 
            style={styles.input} 
            placeholder='EX: 7900241'
            keyboardType='numeric'
            value={cep}
            onChangeText={setCep}
          ></TextInput>
          <TouchableOpacity style={styles.botao} onPress={consultarCEP}>
            <Text style={styles.textBotao}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoLimpar} onPress={limparCampus}>
            <Text style={styles.textBotao}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card2}>
          <Text style={styles.subTitulo}>Informações do CEP</Text>
          {dadosCep ? (
            <View>
              <Text style={styles.texto}>CEP: {dadosCep.cep}</Text>
              <Text style={styles.texto}>Logradouro: {dadosCep.logradouro}</Text>
              <Text style={styles.texto}>Bairro: {dadosCep.bairro}</Text>
              <Text style={styles.texto}>Localidade: {dadosCep.localidade}</Text>
              <Text style={styles.texto}>UF: {dadosCep.uf}</Text>
            </View>
          ): (
            <Text style={{ textAlign: 'center', fontSize: 17, marginTop: 5 }}>Digite um CEP para ver o resultado!</Text>
          )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4FC1FF'
  },
  card: {
    width: '90%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  titulo2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5
  },
  botao: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#2DD04B'
  },
  botaoLimpar: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#FF3B3B'
  },
  textBotao: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center'
  },
  card2: {
    width: '90%', 
    padding: 10, 
    marginTop: 10, 
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  subTitulo: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 17,
    marginTop: 5
  }
});
