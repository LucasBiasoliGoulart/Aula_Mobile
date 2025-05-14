import { useContext } from 'react';
import AuthRoutes from './authroutes';
import AppRoutes from './app.routes';
import { AuthContext } from '../Contexts/auth';

export default function Routes() {
    const {signed} = useContext(AuthContext)
    const loading = false;

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>   
    );
}