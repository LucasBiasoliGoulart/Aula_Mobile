import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icone from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const[contador, setContador] = useState(0);
  const[produtosAdicionados, setProdutosAdicionados] = useState([]);

  // Função para adicionar o produto
  const adicionarProduto = (produto) => {
    setContador(contador + 1);
    setProdutosAdicionados([...produtosAdicionados, produto])
  }

  // Função de navegação
  const navegacao = useNavigation();
  function compra() {
    navegacao.navigate('Compras', {
      produtos: produtosAdicionados
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.titulo}>Lista de Compras</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={compra}>
            <Icone name='shopping-cart' size={30}/>
        </TouchableOpacity>
        {contador > 0 && (
          <View style={styles.numero}>
            <Text style={{fontSize: 15, color: '#fff'}}>{contador}</Text>
          </View>
        )}
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Macarrão</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 40,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={()=> adicionarProduto({nome: 'Macarrão', preco: 40.00})}>
            <Icone name='plus' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Leite</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 27,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={()=> adicionarProduto({nome: 'Leite', preco: 27.00})}>
            <Icone name='plus' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hamburguer</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 30,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={()=> adicionarProduto({nome: 'Hamburguer', preco: 30.00})}>
            <Icone name='plus' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Feijão</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 25,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={()=> adicionarProduto({nome: 'Feijão', preco: 25.00})}>
            <Icone name='plus' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Fanta Laranja</Text>
            <Text style={{fontSize: 16, marginTop: 5, color: '#2F9F3A'}}>R$: 9,00</Text>
        </View>
        <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={()=> adicionarProduto({nome: 'Fanta Laranja', preco: 9.00})}>
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
    margin: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  botao: {
    width: 40,
    height: 40,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  numero: {
    width: 24,
    height: 24,
    position: 'absolute',
    backgroundColor: '#DC3030',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    left: 340,
    top: 45
  }
});
