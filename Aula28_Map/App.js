import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import Icone from '@expo/vector-icons/Feather';
import { useState } from 'react';

export default function App() {
  const[paisSelecionado, setPaisSelecionado] = useState({ nome: '', resumo: '' });

  // Mapeamento das bandeiras
  const bandeiras = {
    Brasil: require('./img/bandeira_brasil.jpg'),
    Espanha: require('./img/bandeira_espanha.png'),
    Israel: require('./img/bandeira_israel.png'),
    Japão: require('./img/bandeira_japao.png'),
    Madagascar: require('./img/bandeira_madagascar.jpg'),
    ReinoUnido: require('./img/bandeira_reinounido.png'),
    Alemanha: require('./img/bandeira_alemanha.png'),
    China: require('./img/bandeira_china.png'),
    França: require('./img/bandeira_frança.png')
  }

  // Dados do pais
  const dadosPaises = {
    Brasil: {
      nome: 'Brasil',
      resumo: 'O Brasil é o maior país da América do Sul, conhecido por sua biodiversidade e cultura rica.'
    },
    Espanha: {
      nome: 'Espanha',
      resumo: 'A Espanha é um país europeu famoso por sua história, arte, e culinária.'
    },
    Israel: {
      nome: 'Israel',
      resumo: 'Israel é um país do Oriente Médio com importância histórica e religiosa significativa.'
    },
    Japão: {
      nome: 'Japão',
      resumo: 'O Japão é uma ilha na Ásia conhecida por sua tecnologia avançada e cultura milenar.'
    },
    Madagascar: {
      nome: 'Madagascar',
      resumo: 'Madagascar é uma ilha africana famosa por sua fauna única e florestas tropicais.'
    },
    ReinoUnido: {
      nome: 'Reino Unido',
      resumo: 'O Reino Unido é uma nação europeia formada por Inglaterra, Escócia, País de Gales e Irlanda do Norte.'
    },
    Alemanha: {
      nome: 'Alemanha',
      resumo: 'A Alemanha é uma potência econômica europeia, conhecida por sua engenharia e história influente.'
    },
    China: {
      nome: 'China',
      resumo: 'A China é o país mais populoso do mundo, com uma história milenar e uma economia crescente.'
    },
    França: {
      nome: 'França',
      resumo: 'A França é famosa por sua cultura, gastronomia, moda e pontos turísticos icônicos como a Torre Eiffel.'
    }
  }

  // Função de selecionar o País
  const selecionarPais = (nome) => {
    setPaisSelecionado(dadosPaises[nome]);
  }

  // Botão para selecionar o País
  const renderBotao = (pais) => (
    <View>
      <TouchableOpacity style={styles.botao} activeOpacity={0.5} key={pais} onPress={()=> selecionarPais(pais)}>
        <Image style={styles.bandeira} source={bandeiras[pais]}/>
        <Text style={{ color: "#FFF", fontSize: 15 }}>{pais}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ margin: 5, alignItems: 'center', flexDirection: 'row', gap: 10 }}>
        <Text style={styles.titulo}>Mapa</Text>
        <Icone name='map' size={30}/>
      </View>
      <MapView
        mapType='hybrid'
        scrollEnabled={true}
        zoomEnabled={true}
        rotateEnabled={true}
        showsTraffic={true}
        style={{width:370, height:370}}
        initialRegion={{
          latitude: -24.0329321,
          longitude: -46.6114519,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
      <View style={styles.resumo}>
        <Text style={styles.subTitulo}>{paisSelecionado.nome || 'Nome'}</Text>
        <Text style={styles.texto}>{paisSelecionado.resumo || 'Resumo'}</Text>
      </View>
      <View style={{ margin: 5, alignItems: 'center', flexDirection: 'row', gap: 5 }}>
        {['Brasil', 'Espanha', 'Israel'].map(renderBotao)}
      </View>
      <View style={{ margin: 5, alignItems: 'center', flexDirection: 'row', gap: 5 }}>
        {['Japão', 'Madagascar', 'ReinoUnido'].map(renderBotao)}
      </View>
      <View style={{ margin: 5, alignItems: 'center', flexDirection: 'row', gap: 5 }}>
        {['Alemanha', 'China', 'França'].map(renderBotao)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  botao: {
    width: 124,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#292929",
    gap: 3
  },
  resumo: {
    margin: 5, 
    width: 370, 
    padding: 10,
  },
  subTitulo: {
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center'
  },
  texto: {
    fontSize: 15,
    textAlign: 'justify'
  },
  bandeira: {
    width: 25,
    height: 20
  }
});
