import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
    return(
        <Picker style={styles.pickerContainer}>
            <Picker.Item label='BTC' value="BTC" key={0}/>
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