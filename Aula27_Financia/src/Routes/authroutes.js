import { createStackNavigator } from "@react-navigation/stack";
import SignIn from '../Pages/SignIn/index';
import SignUp from "../Pages/SignUp/index";

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <AuthStack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{ 
                    headerStyle: { 
                        backgroundColor: '#3d3dcf',
                        borderBottomWidth: 1,
                    },
                    headerTintColor: '#FFF',
                    headerTitle: 'Voltar',
                    headerBackTitleVisible: false
                }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;