import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icone from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.titulo}>Compras</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
