import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { format } from "date-fns";
import Header from "../../Components/index";
import api from "../../Services/api";
import { useIsFocused } from "@react-navigation/native";
import { Background, ListBalance, Area, Titulo, List } from './styles';
import BalanceItem from "../../Components/BalanceItem";
import Icone from "@expo/vector-icons/Feather";
import HistoricoList from "../../Components/HistoricoList";

export default function Home(){
    const[listBalance, setListBalance] = useState([]);
    const[dateMovements, setDateMovements] = useState(new Date());
    const[movements, setMovements] = useState([]);

    const isFocused = useIsFocused();

    useEffect(()=> {
        let isAction = true;
        async function getMoviments() {
            let dataFormat = format(dateMovements, 'dd/MM/yyyy');

            const receivas = await api.get('/receives', {
                params:{date:dataFormat}
            })

            const balance = await api.get('/balance', {
                params:{date:dataFormat}
            });
            //console.log(balance.data);
            //console.log(dataFormat);
            //console.log(isFocused)
            setListBalance(balance.data);
            setMovements(receivas.data)
        }
        getMoviments();
    }, [isFocused]);

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
                <TouchableOpacity activeOpacity={0.5}>
                    <Icone name="calendar" size={25}/>
                </TouchableOpacity>
                <Titulo>Minhas movimentações</Titulo>
            </Area>
            <List 
                data={movements}
                keyExtractor={item=> item.id}
                renderItem={({item})=> <HistoricoList data={item}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
            >
            </List>
        </Background>
    )
}