import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import FromUser from './src/fromUser';

// Aula 23 - Banco de Firebase
export default function Fire() {
  return (
    <View style={styles.container}>
      {/*<FromUser></FromUser>*/}
      <Text style={styles.titulo}>Usuário Logado</Text>
      <View style={{ marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Email</Text>
          <TextInput  
          placeholder="Digite o email"
          style={styles.input}
          />
      </View>
      <View style={{ marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Senha</Text>
          <TextInput  
          placeholder="Digite a senha"
          style={styles.input}
          />
      </View>
      <TouchableOpacity style={styles.botao}>
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
});
