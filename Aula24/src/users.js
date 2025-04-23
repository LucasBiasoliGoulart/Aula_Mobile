import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebaseConnection';

export function UsersList({data}) {
    // Função para deletar os Usuários
    async function deletarItem() {
        const docRef = doc(db, "users", data.id)
        await deleteDoc(docRef)
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Nome: {data.nome}</Text>
            <Text style={styles.texto}>Idade: {data.idade}</Text>
            <Text style={styles.texto}>Cargo: {data.cargo}</Text>
            <TouchableOpacity style={styles.botao} onPress={deletarItem}>
                <Text style={{ color: "#FFF" }}>Deletar Usuário</Text>
            </TouchableOpacity>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: "#EEE",
        borderWidth: 1
    },
    texto: {
        fontSize: 15,
        color: "#000",
        margin: 5
    },
    botao: {
        width: 120,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#DA3232"
    }
});