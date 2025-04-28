import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { onSnapshot, collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConnection';
import { UsersList } from './users';

export default function Fire() {
  const[nome, setNome] = useState("");
  const[idade, setIdade] = useState("")
  const[cargo, setCargo] = useState("");
  const[mostrarFormulario, setMostrarFormulario] = useState(true);

  const[users, setUsers] = useState([])

  useEffect(()=> {
    async function getDados() {
      const userRef = collection(db, "users");
      onSnapshot(userRef , (snapshot)=> {
        let lista = [];
        snapshot.forEach((doc)=> {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo,
          })
        })
        setUsers(lista);
      })
    }
    getDados();
  }, []);

  // Função para registrar os dados e limpar os campos
  async function registraDados() {
    // Verificação dos campos
    if(nome.trim() === "" || idade.trim() === "" || cargo.trim() === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    
    // Adicionar os dados no banco
    await addDoc(collection(db, "users"), {
      nome: nome,
      idade: idade,
      cargo: cargo
    });

    // Limpar os campos do input
    setNome('');
    setIdade('');
    setCargo('');
  }

  return (
    <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>FireBase</Text>
            {mostrarFormulario && (
                <View>
                    <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Nome</Text>
                    <TextInput
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    placeholder="Digite seu nome"
                    style={styles.input}
                    />
                </View>
                <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Idade</Text>
                    <TextInput
                    value={idade}
                    onChangeText={(text) => setIdade(text)}
                    placeholder="Digite sua idade"
                    keyboardType='numeric'
                    style={styles.input}
                    />
                </View>
                <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Cargo</Text>
                    <TextInput
                    value={cargo}
                    onChangeText={(text) => setCargo(text)}
                    placeholder="Digite seu cargo"
                    style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.botao} onPress={registraDados}>
                    <Text style={{ color: '#FFF', fontSize: 18 }}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity style={styles.botao} onPress={()=> setMostrarFormulario(!mostrarFormulario)}>
                <Text style={{ color: '#FFF', fontSize: 18 }}>
                    {mostrarFormulario ? 'Esconder Formulário' : 'Mostrar Formulário'}
                </Text>
            </TouchableOpacity>
      
            <Text style={{ marginTop: 20, fontSize: 20 }}>Usuários:</Text>
            <FlatList
            data={users}
            keyExtractor={(item)=> String(item.id)}
            renderItem={({item})=> <UsersList data={item}/>}
            >
            </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  botao: {
    width: 360,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  input: {
    width: 360,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
  }
});
