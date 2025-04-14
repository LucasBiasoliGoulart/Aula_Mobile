import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home/index';
import Detalhes from '../pages/Detalhes/index';

const Stack = createNativeStackNavigator();

export default function stackrota() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}></Stack.Screen>
            <Stack.Screen
            name="Detalhes"
            component={Detalhes}></Stack.Screen>
        </Stack.Navigator>
    );
}