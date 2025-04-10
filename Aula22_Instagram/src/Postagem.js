import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import IconeEXP from '@expo/vector-icons/Feather';

class Postagem extends Component {
    constructor(props) {
        super(props);
        // Criando status do "like" e a contagem de "likes"
        this.state = {
            liked: false,
            likesCount: 1,
        };
    }

    // Função para alternar o estado de "like"
    handleLike = () => {
        this.setState(prevState => ({
            liked: !prevState.liked,
            likesCount: prevState.liked ? prevState.likesCount - 1 : prevState.likesCount + 1
        }));
    }
    render() {
    const { liked, likesCount } = this.state;
    return(
      <View style={style.container}>
        <View style={style.card}>
            <View style={{ margin: 5, alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                <Image source={{uri:this.props.data.perfil}} style={style.perfil}></Image>
                <Text style={style.texto}>{this.props.data.nomePerfil}</Text>
            </View>
            <Image source={{uri:this.props.data.imagem}} style={style.imgPostagem}></Image>
            <View style={{ margin: 5 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10}}>
                    <TouchableOpacity onPress={this.handleLike}>
                        <IconeEXP 
                        name={liked ? 'heart' : 'heart'} 
                        size={30}
                        color={liked ? 'red' : 'black'}/>
                    </TouchableOpacity>
                    <IconeEXP name='message-circle' size={30}/>
                    <IconeEXP name='send' size={30}/>
                </View>
                <Text style={{ fontWeight: 'bold' }}>{likesCount} Likes</Text>
                <Text style={style.titulo}>{this.props.data.titulo}</Text>
            </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: '100%',
        margin: 10
    },
    imgPostagem: {
        width: '100%',
        height: 400,
    },
    titulo: {
        fontSize: 20,
    },
    perfil: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default Postagem