import React, {Component} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Pessoa from './src/Pessoa.js';

// Aula 5
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          id: '1', 
          imagem: 'https://s2-g1.glbimg.com/pm7SkzV4G2IZFuut0UrrTQyUcvg=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/4/u/5jZiN1Rs66QJLxFl226g/whatsapp-image-2025-03-10-at-06.33.14.jpeg', 
          titulo: 'Homem coloca fogo em sofá, incêndio se alastra e quatro morrem em abrigo, em São José dos Campos, SP'
        },
        {
          id: '2',
          imagem: 'https://s2-g1.glbimg.com/xjQyaa22o5YMIew5Fc8uN6rUesY=/0x0:1920x968/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/z/I/HXYsnVQhWFxkP01d9Afw/250220-esp-afastamentos-serie-historica-desk.jpg',
          titulo: 'Crise de saúde mental: Brasil tem maior número de afastamentos por ansiedade e depressão em 10 anos'
        },
        {
          id: '3',
          imagem: 'https://s2-g1.glbimg.com/g-Kjv9zHZMzJirdMhAro82bWkZQ=/0x1533:3020x3473/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/K/4/5kGGncTDaKeI9OD3mXkw/img-6187.jpg',
          titulo: 'Parque criado para proteger gruta paradisíaca é ameaçado por desmatamento, agricultura e presença de gado em MT'
        },
        {
          id: '4',
          imagem: 'https://s2-g1.glbimg.com/9yGs6O4fAEkP7zNK-tJGBV_F-JU=/0x0:1543x1209/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/4/q/yj1REuRgiA6dTnUm9lmA/2025-03-07t014316z-1644833646-rc228daz4ek6-rtrmadp-3-space-exploration-spacex-aviation.jpg',
          titulo: 'Fragmentos de nave da SpaceX rasgam os céus e causam atrasos em voos e paralisações em aeroportos da Flórida, nos EUA'
        },
      ]
    };
  }

  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.banner}>
          <Text style={estilos.tituloPrincipal}>Brasil Notícias 2025</Text>
        </View>
        <FlatList showsVerticalScrollIndicator={false}
        data={this.state.feed}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <Pessoa data={item}></Pessoa>}>
        </FlatList>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumturquoise'
  },
  banner: {
    width: 393,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightseagreen'
  },
  tituloPrincipal: {
    fontSize: 35,
    color: 'white'
  }
});

export default App