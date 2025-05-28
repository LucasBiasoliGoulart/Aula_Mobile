import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import { AuthContext } from "../../Contexts/auth";
import { use, useContext } from "react";

export default function CustomDrawe(props) {
    const {user} = useContext(AuthContext);
    return(
        <DrawerContentScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                <Image source={require('../../Assets/Logo.png')}/>
                <Text style={{marginTop: 14, fontSize: 18}}>Bem Vindo!</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 14, paddingHorizontal: 24}} numberOfLines={1}>{user && user.name}</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
}