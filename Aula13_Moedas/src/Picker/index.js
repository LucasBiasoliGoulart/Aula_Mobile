import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function PickerItem(props) {
    
    let moedasItem = props.moedas.map((Item, Index)=> {
        return <Picker.Item value={Item.key} key={Index} label={Item.key}/>
    });
    return(
        <Picker 
        style={styles.pickerContainer} 
        selectedValue={props.moedaSelecionada} 
        onValueChange={(valor)=> props.quandoMudar(valor)}
        >
            {moedasItem}
        </Picker>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: '#EBEBEB',
    },
});