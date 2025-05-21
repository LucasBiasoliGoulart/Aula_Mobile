import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #${props=>props.bg};
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 4px;
    justify-content: center;
    align-itens: flex-start;
    width: 300px;
    height: 150px;
    padding-left: 14px;
    margin-top: 10px;
`;

export const Label = styled.Text`
    color: #FFF;
    font-size: 19px;
    font-weight: bold;
`;

export const Balance = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
`;