import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const[user, setUser] = useState({
        nome: 'Lucas',
        email: 'teste@gmail.com',
        senha: '12345'
    });
    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}