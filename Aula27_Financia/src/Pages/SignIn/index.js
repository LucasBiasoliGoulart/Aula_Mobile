import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Background, Container, Logo, AreaInput, Input, Botao, SubBotao } from '../../styled';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <Background>
      <Container>
        <Logo source={require("../../Assets/Logo.png")}/>
        <AreaInput>
          <Text style={{ fontWeight: 'bold' }}>Email</Text>
          <Input placeholder="Digite seu email"/>
        </AreaInput>
        <AreaInput>
          <Text style={{ fontWeight: 'bold' }}>Senha</Text>
          <Input placeholder="Digite sua senha" keyboardType="numeric"/>
        </AreaInput>
        <Botao activeOpacity={0.5}>
          <Text style={{ color: "#FFF", fontSize: 17 }}>Acessar</Text>
        </Botao>
        <SubBotao activeOpacity={0.8} onPress={()=> navigation.navigate('SignUp')}>
          <Text style={{ color: "#FFF", fontSize: 17 }}>Criar uma nova conta</Text>
        </SubBotao>
      </Container>
    </Background>
  );
}