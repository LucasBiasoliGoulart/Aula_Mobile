// Instalação do Style
// 1 - npm install styled-components --legacy-peer-deps
// 2 - npm install babel-plugin-styled-components --legacy-peer-deps

import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image` 
    margin: 20px;
`;

export const AreaInput = styled.View`
    margin: 5px;
`;

export const Input = styled.TextInput`
    width: 350px;
    height: 47px;
    border-width: 1px;
    border-radius: 5px;
    background-color: #FFF;
`;

export const Botao = styled.TouchableOpacity`
    margin: 5px;
    width: 350px;
    height: 47px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #3d3dcf;
`;

export const SubBotao = styled.TouchableOpacity`
    margin: 5px;
    width: 350px;
    height: 47px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #5656fd;
`;