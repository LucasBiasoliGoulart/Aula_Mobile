import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function App() {
    const navegacao = useNavigation();

    function voltarHome() {
        navegacao.dispatch(StackActions.popToTop())
    }
    return(
        <View style={styles.container}>
            <Text>Contato</Text>
            <Button title='Voltar para home' onPress={voltarHome}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});