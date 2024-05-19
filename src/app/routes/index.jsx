import { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

// Routes
import DrawerRoutes from './drawer.routes';
import AuthStackRoutes from './authStack.routes';

// Screens
import LoadingScreen from '../screens/misc/LoadingScreen';
import { Provider } from 'react-native-paper';

export default function Routes() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log(`User: ${user}`);
            setUser(user);

            if (initializing) setInitializing(false);
        });

        return unsubscribe;
    }, [initializing]);

    if (initializing) return <LoadingScreen />;

    return (

        <NavigationContainer>
            <Provider>{user ? (<DrawerRoutes />) : (<AuthStackRoutes />)}</Provider>
        </NavigationContainer>

    );
}