// ------------------ Imports ---------------------
// Screens
import Inside from '../screens/home/Inside';
import Outside from '../screens/home/Outside';

// Utils
import {
    stackNavigatorOptions,
    HomeStack,
} from './misc';
// ------------------------------------------------


// ----------- Home routes component --------------
export default function HomeStackRoutes() {
    return (
        <HomeStack.Navigator
            screenOptions={stackNavigatorOptions}
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
// ------------------------------------------------