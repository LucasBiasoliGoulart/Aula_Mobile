import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Detalhes/index.js';

export default function App({ data }) {
  const [modalVisibilidade, setModalvisibilidade] = useState(false)
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{data.nome}</Text>
      <Image style={styles.capa} source={{uri: data.foto}}></Image>
      <View style={styles.areaBotao}>
         <TouchableOpacity style={styles.botao} onPress={()=> setModalvisibilidade(true)}>
            <Text style={styles.textoBotao}>Ver Mais</Text>
         </TouchableOpacity>
      </View>
      <View>
        <Modal visible={modalVisibilidade} animationType='slide' transparent={true}>
            <Detalhes filme={data} fecharModal={()=> setModalvisibilidade(false)}></Detalhes>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E2E2E2',
    margin: 15,
    elevation: 2,
  },
  titulo: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 5
  },
  capa: {
    height: 250,
    zIndex: 2
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45
  },
  botao: {
    width: 100,
    backgroundColor: 'dodgerblue',
    zIndex: 3,
    padding: 7,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    opacity: 10
  },
  textoBotao: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
