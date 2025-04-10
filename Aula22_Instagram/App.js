import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import IconeEXP from '@expo/vector-icons/Feather';
import Postagem from './src/Postagem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          perfil: 'https://th.bing.com/th/id/OIP.8SapiY9vFoTVj1gYVzSFTwHaE7?rs=1&pid=ImgDetMain',
          imagem: 'https://th.bing.com/th/id/OIP.IRN7P8KaCjlpU4rVMU8kIwHaGq?rs=1&pid=ImgDetMain',
          titulo: 'Ana Souza',
          nomePerfil: 'Ana Souza'
        },
        {
          id: '2',
          perfil: 'https://zonadetrabajo.net/wp-content/uploads/2022/08/Perfil-profesional-de-un-programador.jpg',
          imagem: 'https://th.bing.com/th/id/R.c60b121582c2b7d88f58008d7c71511c?rik=VeRXamCZkEpYIw&pid=ImgRaw&r=0',
          titulo: 'Carlos Pereira',
          nomePerfil: 'Carlos Pereira'
        },
        {
          id: '3',
          perfil: 'https://media.istockphoto.com/id/1401341309/pt/foto/young-woman-artist-painter-working-in-her-home-studio-painting-a-picture-and-laughing-happily.jpg?s=170667a&w=0&k=20&c=1q0nwiOkoj8PEsJQVAjd59RZRhFxPCGYbI5p1wRVzmA=',
          imagem: 'https://offloadmedia.feverup.com/rivieramayasecreta.com/wp-content/uploads/2023/01/01144208/Van-Gogh-Merida-3.png',
          titulo: 'Beatriz Almeida',
          nomePerfil: 'Beatriz Almeida'
        },
        {
          id: '4',
          perfil: 'https://i.pinimg.com/originals/19/25/64/1925642e1dd0f078ab7aa555254e33cc.jpg',
          imagem: 'https://th.bing.com/th/id/OIP.NQb3Qwi9QChPvxq1-GRGpwHaFp?w=852&h=650&rs=1&pid=ImgDetMain',
          titulo: 'João Silva',
          nomePerfil: 'João Silva'
        },
      ]
    }
  }
  render() {
    return(
      <View style={style.container}>
        <View style={style.banner}>
          <Text style={style.titulo}>Instagram</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10 }}>
            <IconeEXP name='heart' size={35}/>
            <IconeEXP name='message-circle' size={35}/>
          </View>
        </View>
        <View style={style.banner2}>
          <Image source={require('./img/foto1.jpg')} style={style.fotos}></Image>
          <Image source={require('./img/foto2.jpg')} style={style.fotos}></Image>
          <Image source={require('./img/foto3.jpg')} style={style.fotos}></Image>
          <Image source={require('./img/foto4.jpg')} style={style.fotos}></Image>
          <Image source={require('./img/foto5.jpg')} style={style.fotos}></Image>
        </View>
        <FlatList showsVerticalScrollIndicator={false}
        data={this.state.feed}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <Postagem data={item}></Postagem>}></FlatList>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  banner2: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  fotos: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#EEE'
  },
});

export default App