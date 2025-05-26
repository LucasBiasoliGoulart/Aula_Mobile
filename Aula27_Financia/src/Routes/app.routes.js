import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../Pages/Home/index';
import Registrando from '../Pages/Registro/index'

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return(
        <AppDrawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerStyle:{
                backgroundColor: "#fff",
                paddingTop: 20
            },
            drawerActiveBackgroundColor: "#3d3dcf",
            drawerActiveTintColor: "#fff",

            drawerInactiveBackgroundColor: "#3d3dcf",
            drawerInactiveTintColor: "#fff",
           }}
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Registrando" component={Registrando}/>
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;