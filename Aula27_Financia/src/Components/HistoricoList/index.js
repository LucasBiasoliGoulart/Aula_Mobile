import { Container, TipoText, Tipo, IconeView, ValorText } from "./styled";
import Icone from '@expo/vector-icons/Feather';

export default function HistoricoList({data}) {
    console.log('DATA', data);
    console.log('TAG', data?.type);

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
    return(
        <Container>
            <Tipo>
                <IconeView bg={tipo.color}>
                    <Icone name={tipo.icone} size={20} color={"#FFF"}/>
                    <TipoText>{tipo.label}</TipoText>
                </IconeView>
            </Tipo>
            <ValorText>R$: {data?.value ?? '0,00'}</ValorText>
        </Container>
    );
}