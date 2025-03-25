import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Selecione sua Moeda</Text>
        <Picker style={styles.pickerContainer}>
          <Picker.Item label='USD'/>
        </Picker>
        <Text style={styles.titulo}>Digite uma valor para converter em (R$)</Text>
        <TextInput style={styles.input} keyboardType='numeric'></TextInput>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Converter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929'
  },
  card: {
    width: '95%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 17
  },
  pickerContainer: {
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: '#E4E4E4',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#E4E4E4',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5
  },
  botao: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#34C25E'
  },
  textoBotao: {
    textAlign: 'center',
    fontSize: 20
  }
});
