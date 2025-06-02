import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f3ff;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding: 12px;
`;

export const TipoText = styled.Text`
    color: #ffffff;
    font-style: italic;
    font-size: 16px;
    margin-left: 4px;
`;

export const DescripText = styled.Text`
    color: #121212;
    font-size: 15px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

// Vermelho: c62c36
// Verde: 049301
export const IconeView = styled.View`
   align-items: center;
   flex-direction: row;
   background-color: ${props=> props.bg || '#ccc'};
   padding-bottom: 4px;
   padding-left: 4px;
   padding-right: 4px;
   padding-top: 4px;
   border-radius: 5px;
   margin-bottom: 4px;
`;

export const ValorText = styled.Text`
    font-size: 22px;
`;