import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Inside from '../screens/home/Inside';
import Outside from '../screens/home/Outside';

// Create stack navigator
const HomeStack = createStackNavigator();

// Screen navigator options
const navigatorOptions = {
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    presentation: 'transparentModal',
};

export default function HomeStackRoutes() {
    return (
        <HomeStack.Navigator
            screenOptions={navigatorOptions}
            initialRouteName='Inside'
        >
            <HomeStack.Screen
                name='Inside'
                component={Inside}
            />

            <HomeStack.Screen
                name='Outside'
                component={Outside}
            />
        </HomeStack.Navigator>
    );
}