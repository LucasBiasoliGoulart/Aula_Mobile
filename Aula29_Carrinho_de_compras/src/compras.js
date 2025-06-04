import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icone from '@expo/vector-icons/Feather';
import { useState } from 'react';

export default function Compras() {
  const route = useRoute();
  const { produtos } = route.params || {produtos: []}
  const[quantidade, setQuantidade] = useState({});

  // Função para aumentar a quantidade
  const aumentarQuantidade = (index) => {
    setQuantidade(prev => ({...prev, [index]: (prev[index] || 0) + 1}));
  }

  // Função para diminuir a quantidade
  const diminuirQuantidade = (index) => {
    setQuantidade(prev => ({...prev, [index]: (prev[index] > 0 ? prev[index] - 1 : 0)}));
  }

  // Filtra produtos que tem quantidade 0
  const produtosComQuantidade = produtos.filter((_, index)=> (quantidade[index] || 0) > 0);

  // Função para calcular os preços * quantidade dos produtos
  const total = produtosComQuantidade.reduce((acc, produto, index) => {
    const originalIndex = produtos.indexOf(produto);
    const qtd = quantidade[originalIndex] || 0;
    return acc + (produto.preco * qtd);
  }, 0);
  return (
    <View style={styles.container}>
      {produtosComQuantidade.map((item, index)=> {
        const originalIndex = produtos.indexOf(item);
        return (
          <View style={{margin: 10}}>
            <View style={styles.card} key={index}>
              <Text style={{fontSize: 20}}>{item.nome}</Text>
              <Text style={{fontSize: 16, color: '#2F9F3A'}}>R$: {item.preco.toFixed(2)}</Text>
            </View>
            <View style={styles.barra}>
              <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={()=> diminuirQuantidade(originalIndex)}>
                <Icone name='minus' size={20}/>
              </TouchableOpacity>
              <Text style={{fontSize: 15}}>{quantidade[index] || 0}</Text>
              <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={()=> aumentarQuantidade(originalIndex)}>
                <Icone name='plus' size={20}/>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    <Text style={styles.texto}>Total R$: {total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  barra: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    gap: 10
  },
  botao: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  texto: {
    margin: 10,
    fontSize: 20
  }
});
