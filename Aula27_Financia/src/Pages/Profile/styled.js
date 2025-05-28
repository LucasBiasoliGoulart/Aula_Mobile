import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #f0f4ff;
`;

export const Message = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top: 24px;
`;

export const Name = styled.Text`
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 17px;
    padding: 0 14px;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #3d3dcf;
    width: 90%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const NewText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const LogoutButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 10px;
    border-width: 1px;
    border-color: #c62c36;
`;

export const LogoutText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #c62c36;
`;