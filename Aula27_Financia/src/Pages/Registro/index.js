import React from "react";
import Header from "../../Components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "./styled";

export default function Registro() {
    return(
        <Container>
            <Header title='Registrando'></Header>
            <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>

            </SafeAreaView>
        </Container>
    );
}