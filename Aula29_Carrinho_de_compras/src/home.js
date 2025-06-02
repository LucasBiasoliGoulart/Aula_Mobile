import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icone from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.titulo}>Lista de Compras</Text>
        <TouchableOpacity activeOpacity={0.7}>
            <Icone name='shopping-cart' size={30}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Macarrão</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 40,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
            <Icone name='plus' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Leite</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 27,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
            <Icone name='plus' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Caixa de suco</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 10,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
            <Icone name='plus' size={25}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  menu: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  card: {
    margin: 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 1
  },
  botao: {
    width: 50,
    height: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  }
});
