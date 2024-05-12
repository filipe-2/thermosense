import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

// Create drawer navigator
const AuthStack = createStackNavigator();

// Screen navigator options
const navigatorOptions = {
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    presentation: 'transparentModal',
};

export default function AuthStackRoutes() {
    return (
        <AuthStack.Navigator screenOptions={navigatorOptions}>
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