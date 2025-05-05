import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import FromUser from './src/fromUser';
import Icon from '@expo/vector-icons/Feather';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './src/firebaseConnection';

// Aula 23 - Banco de Firebase
export default function Fire() {
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[authUser, setAuthUser] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=> {
    const unsub = onAuthStateChanged(auth, (user)=> {
      if(user) {
        console.log(user);
        setAuthUser({
          email: user.email,
          uid: user.uid
        })
        return;
      }
      setAuthUser(null);
      setLoading(false);
    });
  }, [])

  // Função de criar uma conta
  function criarConta() {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Conta criada:", user);
      setAuthUser({
        email: user.email,
        uid: user.uid
      });
    })
    .catch((err) => {
      if (err.code === 'auth/email-already-in-use') {
        console.log('Este email já está em uso.');
        return;
      }
      if (err.code === 'auth/invalid-email') {
        console.log('Email inválido.');
        return;
      }
      if (err.code === 'auth/weak-password') {
        console.log('A senha deve ter pelo menos 6 caracteres.');
        return;
      }
      console.log('Erro ao criar conta:', err.code);
    });
  }

  // Função de logar
  function loginUser() {
    signInWithEmailAndPassword(auth, email, senha)
    .then((user)=> {
      console.log(user);
      setAuthUser({
        email: user.user.email,
        uid: user.user.uid
      })
    })
    .catch((err)=> {
      if(err.code === 'auth/missing-password') {
        console.log('a senha é obrigatória')
        return;
      }
      console.log(err.code);
    })
  }

  // Exite
  async function exiteLogin() {
    await signOut(auth)
    setAuthUser(null);
  }

  if(authUser) {
    return(
      <View style={styles.container}>
        <FromUser></FromUser>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {loading && <Text style={{ fontSize: 25, color: 'dodgerblue', margin: 5 }}>Carregando...</Text>}
      <View style={{ marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Email</Text>
          <TextInput  
          placeholder="Digite o email"
          onChangeText={(texto)=> setEmail(texto)}
          style={styles.input}
          />
      </View>
      <View style={{ marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Senha</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row'}}>
            <TextInput  
            placeholder="Digite a senha"
            keyboardType='numeric'
            onChangeText={(texto)=> setSenha(texto)}
            style={styles.input2}
            />
            <TouchableOpacity style={styles.botoaSenha}>
              <Icon name='eye' size={25} color={'#FFF'}/>
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity style={styles.botao} onPress={criarConta}>
        <Text style={{ color: '#FFF', fontSize: 18 }}>Criar um conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={loginUser}>
        <Text style={{ color: '#FFF', fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      {authUser && (
        <TouchableOpacity style={styles.botaoExite} onPress={exiteLogin}>
          <Text style={{ color: '#FFF', fontSize: 18 }}>Exite</Text>
        </TouchableOpacity>
      )}
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
  input2: {
    width: 300,
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
  botoaSenha: {
    width: 56,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000"
  },
  botaoExite: {
    width: 360,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#C61616',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
});
