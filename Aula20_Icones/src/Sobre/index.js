import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navegacao = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button title='ir para contato' onPress={()=> navegacao.navigate('Contato')}></Button>
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