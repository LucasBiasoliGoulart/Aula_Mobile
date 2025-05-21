import { createContext, useEffect, useState } from "react";
import api from '../Services/api';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const[user, setUser] = useState(null);
    const[loadingAuth, setLoadingAuth] = useState(false);
    const[loading, setLoading] = useState(true);

    const navigation = useNavigation();

    useEffect(()=> {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@finToken');
            if(storageUser) {
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Baerer ${storageUser}`
                    }
                });
                //.catch(()=>{setUser(null)})

                api.defaults.headers['Authorization'] = `Baerer ${storageUser}`;
                setUser(response.data);
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    async function signUp(email, password, nome) {
        //console.log('Cadastrar usuario', email, senha, nome);
        setLoadingAuth(true)
        try {
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email
            });
            setLoading(false);
            navigation.goBack();
        }catch (error) {
            setLoading(false);
            console.log('Cadastro Invalido!', error)
        }
    }

    async function signIn(email, password) {
        //console.log('Logado');
        setLoadingAuth(true);
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            });
            setLoading(false);
            const{id, name, token} = response.data;
            const data = {id, name, email, token};
            await AsyncStorage.setItem('@finToken', token);
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            setUser({id, name, email})
        }catch(error) {
            console.log('Erro ao logar', error);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null);
        })
     }

    return(
        <AuthContext.Provider value={{signed: !! user, user, signUp, signIn, signOut, loadingAuth, loading}}>
            {children}
        </AuthContext.Provider>
    );
}