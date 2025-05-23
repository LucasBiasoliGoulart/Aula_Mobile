import { useState } from "react";
import Header from "../../Components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableNativeFeedback, Keyboard, Alert } from "react-native";
import { Container, Input, Button, BtnText } from "./styled";
import RegisterTypes from "../../Components/RegisterTypes";
import api from "../../Services/api";
import { format } from 'date-fns';
import { useNavigation } from "@react-navigation/native";

export default function Registro() {
    const[labInput, setLabInput] = useState('');
    const[valueInput, setValueInput] = useState('');
    const[type, setType] = useState('receita');

    const navigation = useNavigation();

    function handleSubmit() {
        Keyboard.dismiss();
        if(isNaN(parseFloat(valueInput)) || type === null) {
            alert('Preencha todos os campos corretamente');
            return;
        }
        Alert.alert(
            'Confirmando dados',
            `Tipos: ${type} - Valor: ${parseFloat(valueInput)}`, 
            [
                {text: 'Cancelar', style: 'cancel'}, 
                {text: 'Continuar', onPress: ()=> handleAdd()}
            ]
        );
    }

    async function handleAdd() {
        Keyboard.dismiss();
        await api.post('/receive', {
            description: labInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })
        setLabInput('');
        setValueInput('');
        navigation.navigate('Home');
    }

    return(
        <TouchableNativeFeedback onPress={()=> Keyboard.dismiss()}>
            <Container>
                <Header title='Registrando'></Header>
                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <Input 
                        value={labInput} 
                        onChangeText={(text)=> setLabInput(text)}
                        placeholder="Descrição desde registro"
                    />
                    <Input 
                        value={valueInput} 
                        onChangeText={(text)=> setValueInput(text)}
                        placeholder="Valor desejado" 
                        keyboardType="numeric"
                    />
                    <RegisterTypes type={type} sendTypeChanged={(item)=> setType(item)}/>
                    <Button activeOpacity={0.7} onPress={handleSubmit}>
                        <BtnText>Registrar</BtnText>
                    </Button>
                </SafeAreaView>
            </Container>        
        </TouchableNativeFeedback>
    );
}