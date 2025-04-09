import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconesEXPO from '@expo/vector-icons/Feather';

export default function App() {
  return(
    <ScrollView style={styles.container}>
      <View style={styles.filmes}>
      <View style={styles.card}>
        <Image source={require('./Img/capa.jpg')} style={styles.capa}/>
        <Text style={styles.texto}>Furiosa: Uma Saga Mad Max</Text>
        <Text style={styles.texto}>Gênero: Ação, Aventura</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Text style={styles.texto}>Avaliação:</Text>
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
      <View style={styles.card}>
        <Image source={require('./Img/capa2.webp')} style={styles.capa}/>
        <Text style={styles.texto}>Avatar: O Caminho da Água</Text>
        <Text style={styles.texto}>Gênero: Ficção científica</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Text style={styles.texto}>Avaliação:</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929"
  },
  filmes: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    margin: 5,
    padding: 7,
    borderRadius: 5,
    backgroundColor: "#000"
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
    backgroundColor: "#FF2929",
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    flexDirection: 'row',
  }
});