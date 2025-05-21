import { useContext, useState } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Background, Container, Logo, AreaInput, Input, Botao, SubBotao } from '../../styled';
import { AuthContext } from "../../Contexts/auth";

export default function SignIn() {
  const {signIn} = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    //alert('Bem Vindo');
    //console.log(email, senha);
    signIn(email, password);
  }
  return (
    <Background>
      <Container>
        <Logo source={require("../../Assets/Logo.png")}/>
        <AreaInput>
          <Text style={{ fontWeight: 'bold' }}>Email</Text>
          <Input 
            placeholder="Digite seu email" 
            value={email} onChangeText={(text)=> setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Text style={{ fontWeight: 'bold' }}>Senha</Text>
          <Input 
            placeholder="Digite sua senha" 
            keyboardType="numeric" value={password} onChangeText={(text)=> setPassword(text)} 
            secureTextEntry={true}
          />
        </AreaInput>
        <Botao activeOpacity={0.5} onPress={handleSignIn}>
          <Text style={{ color: "#FFF", fontSize: 17 }}>Acessar</Text>
        </Botao>
        <SubBotao activeOpacity={0.8} onPress={()=> navigation.navigate('SignUp')}>
          <Text style={{ color: "#FFF", fontSize: 17 }}>Criar uma nova conta</Text>
        </SubBotao>
      </Container>
    </Background>
  );
}