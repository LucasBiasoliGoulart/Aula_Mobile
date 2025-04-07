import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconesEXPO from '@expo/vector-icons/Feather';

export default function App() {
  const navegacao = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('./Img/capa.jpg')} style={styles.capa}/>
        <Text style={styles.texto}>Furiosa: Uma Saga Mad Max</Text>
        <Text style={styles.texto}>Gênero: Ação, Aventura</Text>
          <View style={{ flexDirection: 'row', marginTop: 3 }}>
            <IconesEXPO name='star' size={20} color="#FFC132"/>
            <IconesEXPO name='star' size={20} color="#FFC132"/>
            <IconesEXPO name='star' size={20} color="#FFC132"/>
            <IconesEXPO name='star' size={20} color="#FFC132"/>
            <IconesEXPO name='star' size={20} color="#FFC132"/>
          </View>
          <TouchableOpacity style={styles.botao}> 
            <IconesEXPO name='play' size={20} color="#FFF"/>
            <Text style={{ color: "#FFF", fontSize: 20, marginLeft: 5 }}>ASSISTIR</Text>
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
  card: {
    width: 350,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#FF2929"
  },
  capa: {
    width: "100%",
    height: 400,
  },
  texto: {
    color: "#FFF",
    fontSize: 17,
    marginTop: 3
  },
  botao: {
    backgroundColor: "#000",
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    flexDirection: 'row',
  }
});