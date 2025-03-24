import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [entrada, setEntrada] = useState(''); 
  const [tarefa, setTarefa] = useState([]); // Inicializando como um array vazio

  // Recupera as tarefas armazenadas no AsyncStorage
  useEffect(() => {
    async function getStorage() {
      try {
        const tarefaStorage = await AsyncStorage.getItem('tarefa');
        if (tarefaStorage !== null) {
          const tarefasArray = JSON.parse(tarefaStorage);
          setTarefa(tarefasArray);
        }
      } catch (error) {
        console.log('Erro ao carregar tarefas do AsyncStorage:', error);
      }
    }
    getStorage();
  }, []);

  // Função para adicionar tarefas
  async function adicionarTarefa() {
    if (entrada.trim() !== "") {
      const novaTarefa = { id: Date.now().toString(), nome: entrada };
      const novasTarefas = [...tarefa, novaTarefa];
      setTarefa(novasTarefas);
      setEntrada('');
      try {
        console.log("Salvando Tarefa", novasTarefas)
        await AsyncStorage.setItem('tarefa', JSON.stringify(novasTarefas));
      } catch (error) {
        console.log('Erro ao salvar tarefa no AsyncStorage:', error);
      }
    }
  }

  // Função para remover tarefa
  async function removerTarefa(id) {
    const novasTarefas = tarefa.filter(tarefa => tarefa.id !== id);
    setTarefa(novasTarefas);
    try {
      console.log("Remover Tarefa", novasTarefas)
      await AsyncStorage.setItem('tarefa', JSON.stringify(novasTarefas));
    } catch (error) {
      console.log('Erro ao salvar tarefa no AsyncStorage:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder='Adicionar uma tarefa'
        value={entrada}
        onChangeText={setEntrada}
      />
      <TouchableOpacity style={styles.btn} onPress={adicionarTarefa}>
        <Text style={styles.btnTexto}>Adicionar</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>Tarefas Concluidas:</Text>

      <FlatList
        data={tarefa} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarefaContainer}>
            <Text style={styles.tarefaTexto}>{item.nome}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => removerTarefa(item.id)}>
              <Text style={styles.btnTexto}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    padding: 10,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  texto: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  btnTexto: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  tarefaContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tarefaTexto: {
    fontSize: 18,
  },
});
