import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../Contexts/auth";
import { format } from "date-fns";
import Header from "../../Components/index";
import api from "../../Services/api";
import { useIsFocused } from "@react-navigation/native";
import { Background, ListBalance } from './styles';
import BalanceItem from "../../Components/BalanceItem";

export default function Home(){
    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date());

    const isFocused = useIsFocused();

    useEffect(()=> {
        let isAction = true;
        async function getMoviments() {
            let dataFormat = format(dateMovements, 'dd/MM/yyyy');

            const balance = await api.get('/balance', {
                params:{date:dataFormat}
            });
            //console.log(balance.data);
            //console.log(dataFormat);
            //console.log(isFocused)
            setListBalance(balance.data);
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
        </Background>
    )
}