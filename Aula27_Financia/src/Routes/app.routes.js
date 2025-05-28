import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../Pages/Home/index';
import Registrando from '../Pages/Registro/index'
import Profile from "../Pages/Profile";
import CustomDrawer from "../Components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return(
        <AppDrawer.Navigator
            drawerContent={(props)=> <CustomDrawer {...props}/>}

            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: "#fff",
                    paddingTop: 20
                },
                drawerItemStyle: {
                    marginVertical: 5,
                    borderRadius: 5
                },

                drawerActiveBackgroundColor: "#3d3dcf",
                drawerActiveTintColor: "#fff",

                drawerInactiveBackgroundColor: "#eee",
                drawerInactiveTintColor: "#3d3dcf",
            }}
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Registrando" component={Registrando}/>
            <AppDrawer.Screen name="Perfil" component={Profile}/>
            <AppDrawer.Screen name="Sair" component={Profile}/>
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;