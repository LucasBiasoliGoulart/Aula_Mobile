import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icone from '@expo/vector-icons/Feather';
import { getAuth, createUserWithEmailandPassword } from 'firebase/auth';
import FromUser from './src/fromUser';
import { useState } from 'react';
 
const auth = getAuth();

// Aula 23 - Banco
export default function Fire() {
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  // Função de criar um usuário
  const criarUsuario = async () => {
    try {
      await createUserWithEmailandPassword(auth, email, senha);
      alert("Cadastro realizado com sucesso!", "Agora você pode fazer login.");
    }catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Erro", errorMessage)
    }
  }
  return (
    <View style={styles.container}>
      {/*<FromUser></FromUser>*/}
      <Text style={styles.titulo}>Usuário Logado</Text>
      <View style={{ marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Email</Text>
          <TextInput  
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
          style={styles.input}
          />
      </View>
      <View style={{ marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Senha</Text>
          <TextInput  
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite a senha"
          style={styles.input}
          />
          <Icone name='eye' size={20} style={styles.icone}/>
      </View>
      <TouchableOpacity style={styles.botao} onPress={criarUsuario}>
        <Text style={{ color: '#FFF', fontSize: 18 }}>Criar um conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={{ color: '#FFF', fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    width: 360,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
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
  icone: {
    width: '12%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '85%',
    top: '39%'
  }
});
