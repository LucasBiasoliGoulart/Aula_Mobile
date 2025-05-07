import React from "react";
import { View, Text } from "react-native";
import AuthRoutes from './authroutes';

export default function Routes() {
    const loading = false;
    const signed = false;
    return(
        signed ? <View>Navegar Web</View> : <AuthRoutes/>   
    );
}