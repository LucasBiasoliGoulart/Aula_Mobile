import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConnection';
import { useState } from "react";

export function UsersList({data}) {
    const[modalVisible, setModalVisible] = useState(false);
    const[nome, setNome] = useState(data.nome);
    const[idade, setIdade] = useState(data.idade);
    const[cargo, setCargo] = useState(data.cargo);

    // Função para deletar os Usuários
    async function deletarItem() {
        const docRef = doc(db, "users", data.id)
        await deleteDoc(docRef)
    }

    // Função para editar e salvar no banco de dados
    async function salvarEdicao() {
        const docRef = doc(db, 'users', data.id);
        await updateDoc(docRef, {
            nome: nome,
            idade: idade,
            cargo: cargo
        });
        setModalVisible(false); // Fecha o modal após salvar
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Nome: {data.nome}</Text>
            <Text style={styles.texto}>Idade: {data.idade}</Text>
            <Text style={styles.texto}>Cargo: {data.cargo}</Text>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.botao} onPress={deletarItem}>
                    <Text style={{ color: "#FFF" }}>Deletar Usuário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoEditar} onPress={()=> setModalVisible(true)}>
                    <Text style={{ color: "#FFF" }}>Editar</Text>
                </TouchableOpacity>
            </View>
            <Modal
            visible={modalVisible}
            animationType="slide"
            onRequestClose={()=> setModalVisible(false)}>
                <View style={{ margin: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Editar Usuário</Text>
                    <View>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Nome</Text>
                            <TextInput
                            value={nome}
                            onChangeText={setNome}
                            placeholder="Digite seu nome"
                            style={styles.input}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Idade</Text>
                            <TextInput
                            value={idade}
                            onChangeText={setIdade}
                            placeholder="Digite seu nome"
                            style={styles.input}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Cargo</Text>
                            <TextInput
                            value={cargo}
                            onChangeText={setCargo}
                            placeholder="Digite seu nome"
                            style={styles.input}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarEdicao}>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoCancelar} onPress={()=> setModalVisible(false)}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
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
        backgroundColor: "#DA3232",
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoEditar: {
        width: 120,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#0091FF",
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 360,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
    },
    botaoSalvar: {
        width: 170,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#28CE19",
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoCancelar: {
        width: 170,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#DA3232",
        alignItems: 'center',
        justifyContent: 'center'
    }
});