import { useState, useEffect } from "react";
import { TouchableOpacity, Modal } from "react-native";
import { format } from "date-fns";
import Header from "../../Components/index";
import api from "../../Services/api";
import { useIsFocused } from "@react-navigation/native";
import { Background, ListBalance, Area, Titulo, List, Subtitulo } from './styles';
import BalanceItem from "../../Components/BalanceItem";
import Icone from "@expo/vector-icons/Feather";
import HistoricoList from "../../Components/HistoricoList";
import CalendarModal from "../../Components/CalendarModal";

export default function Home(){
    const[listBalance, setListBalance] = useState([]);
    const[dateMovements, setDateMovements] = useState(new Date());
    const[movements, setMovements] = useState([]);
    const[modalVisible, setModalVisible] = useState(false);
    const[currentDate, setCurrentDate] = useState('');

    const isFocused = useIsFocused();

    useEffect(()=> {
        const today = new Date();
        setCurrentDate(formatDate(today));

        let isAction = true;
        async function getMoviments() {
            //let dataFormat = format(dateMovements, 'dd/MM/yyyy');
            let date = new Date(dateMovements);
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dataFormat = format(onlyDate, 'dd/MM/yyyy');
            console.log(dateMovements);
            console.log(dataFormat);

            const receivas = await api.get('/receives', {
                params:{date:dataFormat}
            })

            const balance = await api.get('/balance', {
                params:{date:dataFormat}
            });
            
            setListBalance(balance.data);
            setMovements(receivas.data)
        }
        getMoviments();
    }, [isFocused, dateMovements]);

    // Função de deletar
    async function handleDelete(id) {
        try {
            await api.delete('receives/delete', {
                params: {
                    item_id: id
                }
            });
            setDateMovements(new Date());
        }catch(error) {
            console.log(error);
        }
    }

    // Função para mostrar as movimentações do dia
    function filterDatesMoviments(dateSelected) {
        const formatted = formatDate(dateSelected)
        setCurrentDate(formatted);

        const filtered = movements.filter(item => {
            const itemDate = new Date(item.date);
            return(
                itemDate.getDate() === dateSelected.getDate() &&
                itemDate.getMonth() === dateSelected.getMonth() &&
                itemDate.getFullYear() === dateSelected.getFullYear()
            );
        });
        setMovements(filtered)
    }

    // Função para formatar a data
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return(
        <Background>
            <Header title='Minhas movimentações'></Header>
            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item=> item.tag}
                renderItem={({item})=> (<BalanceItem data={item}/>)}
            />
            <Area>
                <TouchableOpacity activeOpacity={0.5} onPress={()=> setModalVisible(true)}>
                    <Icone name="calendar" size={25}/>
                </TouchableOpacity>
                <Titulo>Minhas movimentações</Titulo>
                <Subtitulo>{currentDate}</Subtitulo>
            </Area>
            <List 
                data={movements}
                keyExtractor={item=> item.id}
                renderItem={({item})=> <HistoricoList data={item} deleteItem={handleDelete}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
            >
            </List>
            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <CalendarModal setVisible={()=> setModalVisible(false)} handleFilter={filterDatesMoviments}/>
            </Modal>
        </Background>
    )
}