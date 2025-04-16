import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { doc, getDoc, onSnapshot, setDoc, collection } from 'firebase/firestore';
import { db } from './src/firebaseConnection';

// Aula 23 - Banco
export default function Fire() {
  const[nome, setNome] = useState('Carregando...');
  const[idade, setIdade] = useState("")
  const[cargo, setCargo] = useState("");

  useEffect(()=> {
    async function getDados() {
      /*const docref = doc(db, 'users', '2')
      getDoc(docref)
      .then((snapshot)=> {
        console.log(snapshot.data());
        setNome(snapshot.data()?.nome);
        setCargo(snapshot.data().cargo)
        .catch(()=> {
          console.log(err);
        })
      });*/
      onSnapshot(doc(db, "users", "2"), (doc)=> {
        setNome(doc.data()?.nome)
        setIdade(doc.data()?.idade)
        setCargo(doc.data()?.cargo)
      })
    }
    getDados();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>FireBase</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cargo: {cargo}</Text>
      <TouchableOpacity style={styles.botao} onPress={registraDados}>
        <Text style={{ color: "#FFF", fontSize: 18 }}>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 170,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  }
});
