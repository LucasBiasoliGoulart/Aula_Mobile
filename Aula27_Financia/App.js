import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/index';
import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/Contexts/auth';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
        <StatusBar backgroundColor="red" barStyle="dark-content"/>
      </AuthProvider>
    </NavigationContainer>
  );
}
