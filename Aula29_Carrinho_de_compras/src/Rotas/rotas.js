import { createStackNavigator } from "@react-navigation/stack";
import Home from '../home';
import Compras from '../compras';

const Stack = createStackNavigator();

function Rotas() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Compras" component={Compras}/>
        </Stack.Navigator>
    );
}

export default Rotas;