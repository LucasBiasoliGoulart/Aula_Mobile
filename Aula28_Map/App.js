import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import Icone from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useRef } from 'react';

export default function App() {
  const[paisSelecionado, setPaisSelecionado] = useState({ nome: '', resumo: '' });
  const mapRef = useRef(null);
  const[marcadores, setMarcadores] = useState([]);

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
      resumo: 'O Brasil é o maior país da América do Sul, conhecido por sua biodiversidade e cultura rica.',
      latitude: -14.2350,
      longitude: -51.9253,
      latitudeDelta: 15,
      longitudeDelta: 15
    },
    Espanha: {
      nome: 'Espanha',
      resumo: 'A Espanha é um país europeu famoso por sua história, arte, e culinária.',
      latitude: 40.4637,
      longitude: -3.7492,
      latitudeDelta: 8,
      longitudeDelta: 8
    },
    Israel: {
      nome: 'Israel',
      resumo: 'Israel é um país do Oriente Médio com importância histórica e religiosa significativa.',
      latitude: 31.0461,
      longitude: 34.8516,
      latitudeDelta: 4,
      longitudeDelta: 4
    },
    Japão: {
      nome: 'Japão',
      resumo: 'O Japão é uma ilha na Ásia conhecida por sua tecnologia avançada e cultura milenar.',
      latitude: 36.2048,
      longitude: 138.2529,
      latitudeDelta: 10,
      longitudeDelta: 10
    },
    Madagascar: {
      nome: 'Madagascar',
      resumo: 'Madagascar é uma ilha africana famosa por sua fauna única e florestas tropicais.',
      latitude: -18.7669,
      longitude: 46.8691,
      latitudeDelta: 7,
      longitudeDelta: 7
    },
    ReinoUnido: {
      nome: 'Reino Unido',
      resumo: 'O Reino Unido é uma nação europeia formada por Inglaterra, Escócia, País de Gales e Irlanda do Norte.',
      latitude: 55.3781,
      longitude: -3.4360,
      latitudeDelta: 7,
      longitudeDelta: 7
    },
    Alemanha: {
      nome: 'Alemanha',
      resumo: 'A Alemanha é uma potência econômica europeia, conhecida por sua engenharia e história influente.',
      latitude: 51.1657,
      longitude: 10.4515,
      latitudeDelta: 6,
      longitudeDelta: 6
    },
    China: {
      nome: 'China',
      resumo: 'A China é o país mais populoso do mundo, com uma história milenar e uma economia crescente.',
      latitude: 35.8617,
      longitude: 104.1954,
      latitudeDelta: 20,
      longitudeDelta: 20
    },
    França: {
      nome: 'França',
      resumo: 'A França é famosa por sua cultura, gastronomia, moda e pontos turísticos icônicos como a Torre Eiffel.',
      latitude: 46.6034,
      longitude: 1.8883,
      latitudeDelta: 6,
      longitudeDelta: 6
    }
  }

  // Função de selecionar o País
  const selecionarPais = (nome) => {
    const dados = dadosPaises[nome];
    setPaisSelecionado(dados);
    
    // Animação ao selecionar o país
    if(mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: dados.latitude,
        longitude: dados.longitude,
        latitudeDelta: dados.latitudeDelta,
        longitudeDelta: dados.longitudeDelta
      }, 1000);
    }
  }

  // Função para adiconar um novo marcador
  const adicionarMarcador = (evento) => {
    const novaCoordenada = evento.nativeEvent.coordinate;
    const novoMarcador = {
      id: Date.now(),
      coordinate: novaCoordenada,
      title: 'Novo Ponto',
      description: `Lat: ${novaCoordenada.latitude.toFixed(4)}, Lon: ${novaCoordenada.longitude.toFixed(4)}`
    };
    setMarcadores((anteriores)=> [...anteriores, novoMarcador]);
  }

  // Botão para selecionar o País
  const renderBotao = (pais) => (
    <View key={pais}>
      <TouchableOpacity style={styles.botao} activeOpacity={0.5} onPress={() => selecionarPais(pais)}>
        <Image style={styles.bandeira} source={bandeiras[pais]} />
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
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
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
        onPress={adicionarMarcador}
        onRegionChangeComplete={(region)=> {
          console.log('Nova Região visível:', region)
        }}
      >
        {/*Novos Marcadores*/}
        {marcadores.map((ponto)=> (
          <Marker
            key={ponto.id}
            coordinate={ponto.coordinate}
            title={ponto.title}
            description={ponto.description}
          />
        ))}
        <Marker
          coordinate={{
            latitude: -24.0329321,
            longitude: -46.6114519,
          }}
          title='Ponto Turistico'
          description='Descrição do local'
          image={require('./img/pin.png')}
        />
      </MapView>
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
    width: 30,
    height: 20
  }
});
