import { createContext, useState } from "react";
import api from '../Services/api';
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function signUp(email, senha, nome) {
        //console.log('Cadastrar usuario', email, senha, nome);
        setLoading(true)
        try {
            const response = await api.post('/users', {
                name: nome,
                password: senha,
                email: email
            });
            setLoading(false);
            navigation.goBack();
        }catch (error) {
            setLoading(false);
            console.log('Cadastro Invalido!', error)
        }
    }

    async function signIn() {
        console.log('Logado');
    }

    return(
        <AuthContext.Provider value={{signed: !! user, user, signUp, signIn, loading}}>
            {children}
        </AuthContext.Provider>
    );
}