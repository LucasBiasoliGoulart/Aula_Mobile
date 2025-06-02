import { Container, TipoText, Tipo, IconeView, ValorText, DescripText } from "./styled";
import Icone from '@expo/vector-icons/Feather';
import { TouchableWithoutFeedback, Alert } from "react-native";

export default function HistoricoList({data, deleteItem}) {
    console.log('DATA', data);
    console.log('TAG', data?.type);

    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(data.value);

    // Definir icones e cores de forma segura
    const tipos = {
        receita: {
            icone: 'arrow-up',
            color: '#049301',
            label: 'Receita'
        },
        despesa: {
            icone: 'arrow-down',
            color: '#c62c36',
            label: 'Despesa'
        }
    };

    const tipoChave = String(data?.type || '').toLowerCase();

    // Fallback se tag não for reconhecida
    const tipo = tipos[tipoChave] || {
        icone: 'help-circle',
        color: '#999',
        label: 'Outro'
    }

    // Função de deletar o registro
    function handleDeleteItem() {
        Alert.alert(
            'Atenção',
            'Você tem certeza que quer deletar esse registro?',
            [
                {text: 'Cancelar', style: 'cancel'}, 
                {text: 'Confirmar', onPress:()=> deleteItem(data.id)}
            ]
        );
    }
    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconeView bg={tipo.color}>
                        <Icone name={tipo.icone} size={20} color={"#FFF"}/>
                        <TipoText>{tipo.label}</TipoText>
                    </IconeView>
                </Tipo>
                <ValorText>{valorFormatado}</ValorText>
                <DescripText>{data.description || 'Sem descrição'}</DescripText>
            </Container>
        </TouchableWithoutFeedback>
    );
}