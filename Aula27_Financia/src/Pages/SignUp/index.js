import { useContext, useState } from "react";
import { Text } from "react-native";
import { Background, Container, Logo, AreaInput, Input, Botao } from "../../styled";
import { AuthContext } from "../../Contexts/auth";
import { ActivityIndicator } from "react-native";

export default function SignUp() {
    const {signUp, loading} = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSignUp() {
        signUp(email, senha, nome);
    }
    return (
        <Background>
            <Container>
                <Logo source={require("../../Assets/Logo.png")} />
                <AreaInput>
                    <Text style={{ fontWeight: "bold" }}>Nome Completo</Text>
                    <Input placeholder="Digite seu nome" value={nome} onChangeText={(text)=> setNome(text)}/>
                </AreaInput>
                <AreaInput>
                    <Text style={{ fontWeight: "bold" }}>Email</Text>
                    <Input placeholder="Digite seu email" value={email} onChangeText={(text)=> setEmail(text)}/>
                </AreaInput>
                <AreaInput>
                    <Text style={{ fontWeight: "bold" }}>Senha</Text>
                    <Input placeholder="Digite sua senha" keyboardType="numeric" value={senha} onChangeText={(text)=> setSenha(text)} secureTextEntry={true}/>
                </AreaInput>
                <Botao activeOpacity={0.5} onPress={handleSignUp}>
                    {loading ? (
                        <ActivityIndicator size={20} color={"#FFF"}></ActivityIndicator>
                    ):(
                        <Text style={{ color: "#FFF", fontSize: 17 }}>Cadastrar</Text>
                    )}
                </Botao>
                <AuthContext></AuthContext>
            </Container>
        </Background>
    );
}