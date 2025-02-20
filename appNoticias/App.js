import React, {Component} from "react";
import { View, Text, Image, ScrollView } from "react-native";

class App extends Component {
  render() {
    let titulo = 'Notícias 2025'
    let paragrafo = 'Notícias de hoje'
    let Imagem = 'https://s2-g1.glbimg.com/gR273k-gs9923YdZzTrqVeoMHsg=/0x0:2962x1975/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/P/9/5vY6IvR3GYnz1qzTHu1Q/2025-02-20t083908z-820043097-rc27ycawn1kd-rtrmadp-3-israel-palestinians-gaza.jpg'
    let Imagem2 = 'https://s2-g1.glbimg.com/-WbRDiVvI3p1hxxIAKmD-FJkc0A=/0x0:2200x1650/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/B/H/OP4Pr9QpOfAo1MlY10BA/2006-12-19t000000z-1649367996-gm1duespptaa-rtrmadp-3-myanmar.jpg'
    let Imagem3 = 'https://s2-g1.glbimg.com/8RwykITawvGCakGNHWWmaUVa_so=/0x0:966x848/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/z/Q/EYmUpjRV2SDKL1qv0ykQ/20cop.jpg'
    return (
      <ScrollView style={{ padding: 10, backgroundColor: 'lightblue' }}>
        <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 30 }}>{titulo}</Text>
        <Text style={{ fontSize: 17, marginTop: 5, textAlign: 'center' }}>{paragrafo}</Text>
        <Noticias nome='Hamas entrega corpos de bebê, criança, mãe e idoso em caixões pretos para Israel' info='O grupo terrorista Hamas entregou na manhã desta quinta-feira (20) os restos mortais de um bebê, uma criança, a mãe deles e um idoso em caixões preto. O bebê tinha oito meses e era o mais jovem dos reféns israelenses do Hamas mantidos na Faixa de Gaza.' img={Imagem} altura={373} largura={170}></Noticias>

        <Noticias nome='Como um exército rebelde budista ajudou a resgatar os brasileiros escravizados por máfia de golpes cibernéticos' info='Um exército de rebeldes budistas foi essencial para a libertação dos brasileiros escravizados por uma máfia de golpes cibernéticos em Mianmar. Após serem mantidos reféns por três meses, Phelipe de Moura Ferreira e Luckas Viana dos Santos retornaram ao Brasil nesta quarta-feira (19).' img={Imagem2} altura={373} largura={199}></Noticias>

        <Noticias nome='Helicóptero alvo de disparos acaba esbarrando na rede elétrica ao desviar dos tiros' info='Um helicóptero da Polícia Civil do RJ a serviço de uma diligência em Duque de Caxias, na Baixada Fluminense, foi alvo de disparos e acabou esbarrando na rede elétrica ao desviar dos tiros. O incidente foi no início da manhã desta quinta-feira (20) no Jardim Balneário Ana Clara, em Campos Elíseos. O apoio aéreo foi solicitado para ajudar a localizar criminosos em uma área de mata.' img={Imagem3} altura={373} largura={210}></Noticias>
      </ScrollView>
    );
  }
}

export default App

class Noticias extends Component {
  render() {
    return (
      <View style={{ marginTop: 10, marginBottom: 10, backgroundColor: 'white' }}>
        <Image source={{uri: this.props.img}} style={{ width: this.props.altura, height: this.props.largura, backgroundColor: 'gray', textAlign: 'center' }}></Image>
        
        <Text style={{ fontSize: 19}}>{this.props.nome}</Text>
        <Text style={{ fontSize: 15, textAlign: 'justify', marginTop: 5, marginBottom: 5}}>{this.props.info}</Text>
      </View>
    );
  }
}