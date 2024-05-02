import { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

// Routes
import DrawerRoutes from './drawer.routes';
import AuthStackRoutes from './authStack.routes';

export default function Routes() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            console.log(`User: ${user}`);
            setUser(user);

            if (initializing) {
                setInitializing(false);
            }
        });
    }, [initializing]);

    return (
        <NavigationContainer>
            {user ? (<DrawerRoutes />) : (<AuthStackRoutes />)}
        </NavigationContainer>
    );
}