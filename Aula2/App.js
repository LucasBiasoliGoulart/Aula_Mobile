import React, {Component} from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: 'Notícias', 
      imagem: 'https://th.bing.com/th/id/OIP.mQy4wzmheZeA-0x53LEFZAHaHa?rs=1&pid=ImgDetMain'
    }
    this.publicar = this.publicar.bind(this);
  }

  publicar(titulo, imagem) {
    this.setState({titulo:titulo, imagem:imagem});
  }

  render() {
    return (
      <ScrollView style={{ padding: 10, marginTop: 100 }}>
        <Noticia 
          img={this.state.imagem} 
          altura={370} 
          largura={300}
        ></Noticia>
        <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 10 }}>{this.state.titulo}</Text>
        <Button title="Notícia 1" onPress={()=> this.publicar('Onda de calor no Centro-Sul', 'https://s2-g1.glbimg.com/cLrSDOQ6x4nVUWvmpt7jc48VBnw=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/y/x/HnyU4ZS9KgIzRmRrKM9A/bom-dia-rio-grande-limpo-bdrg-0502-frame-75609.jpg')}></Button>
        <Button title="Notícia 2" onPress={()=> this.publicar('Papa Francisco tem boa noite de sono', 'https://s2-g1.glbimg.com/rPUrYYat_91M_NxdaPYltUa_O5o=/0x0:3445x2297/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/m/I/31KAJAQIaBlQKquXt1zA/ap25053372995847.jpg')}></Button>
        <Button title="Notícia 3" onPress={()=> this.publicar('Macron corrige Trump sobre dinheiro enviado para a Ucrânia', 'https://s2-g1.glbimg.com/0nY0gpbXaZ9CJm_JlGYdIGhtJSA=/0x0:5110x3406/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/A/4/mRAFAcTAmsDOiRHzANTg/2025-02-24t235604z-1096882152-rc261dass9ek-rtrmadp-3-usa-france.jpg')}></Button>
      </ScrollView>
    );
  }
}

class Noticia extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: this.props.img }} style={{ width: this.props.altura, height: this.props.largura }}></Image>
      </View>
    );
  }
}

export default App