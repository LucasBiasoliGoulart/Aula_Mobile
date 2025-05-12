import React, { useContext } from "react";
import { Text } from "react-native";
import { Background, Container, Logo, AreaInput, Input, Botao } from "../../styled";
import { AuthContext } from "../../Contexts/auth";

export default function SignUp() {
    const { user } = useContext(AuthContext);
    function handleSignUp() {
        console.log(user);
    }
    return (
        <Background>
            <Container>
                <Logo source={require("../../Assets/Logo.png")} />
                <AreaInput>
                    <Text style={{ fontWeight: "bold" }}>Nome Completo</Text>
                    <Input placeholder="Digite seu nome" />
                </AreaInput>
                <AreaInput>
                    <Text style={{ fontWeight: "bold" }}>Email</Text>
                    <Input placeholder="Digite seu email" />
                </AreaInput>
                <AreaInput>
                    <Text style={{ fontWeight: "bold" }}>Senha</Text>
                    <Input placeholder="Digite sua senha" keyboardType="numeric" />
                </AreaInput>
                <Botao activeOpacity={0.5} onPress={handleSignUp}>
                    <Text style={{ color: "#FFF", fontSize: 17 }}>Cadastrar</Text>
                </Botao>
                <AuthContext></AuthContext>
            </Container>
        </Background>
    );
}