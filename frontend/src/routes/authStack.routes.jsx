// ------------------ Imports ---------------------
// Screens
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

// Utils
import {
    stackNavigatorOptions,
    AuthStack,
} from './misc';
// ------------------------------------------------


// ----------- Auth routes component --------------
export default function AuthStackRoutes() {
    return (
        <AuthStack.Navigator screenOptions={stackNavigatorOptions}>
            <AuthStack.Screen
                name='SignIn'
                component={SignIn}
            />

            <AuthStack.Screen
                name='SignUp'
                component={SignUp}
            />
        </AuthStack.Navigator>
    );
}
// ------------------------------------------------