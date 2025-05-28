import { useContext } from "react";
import { Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText } from "./styled";
import Header from "../../Components";
import { AuthContext } from "../../Contexts/auth";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const {user, signOut} = useContext(AuthContext);
    const navegacao = useNavigation();

    return(
        <Container>
            <Header title='Meu Perfil'></Header>
            <Message>Seja Bem Vindo de volta!</Message>
            <Name numberOfLines={1}>{user && user.name}</Name>
            <NewLink activeOpacity={0.7} onPress={()=> navegacao.navigate('Registrando')}>
                <NewText>Fazer Registro</NewText>
            </NewLink>
            <LogoutButton activeOpacity={0.7} onPress={()=> signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>
        </Container>
    );
}
