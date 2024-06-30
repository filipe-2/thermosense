// ------------------ Imports ---------------------
// Screens
import Settings from '../screens/settings/Settings';
import General from '../screens/settings/General';
import Appearance from '../screens/settings/Appearance';
import Notifications from '../screens/settings/Notifications';
import Help from '../screens/misc/Help';

// Utils
import {
    stackNavigatorOptions,
    SettingsStack,
} from './misc';
// ------------------------------------------------


// --------- Settings routes component ------------
export default function SettingsStackRoutes() {
    return (
        <SettingsStack.Navigator
            screenOptions={stackNavigatorOptions}
            initialRouteName='Home'
        >
            <SettingsStack.Screen
                name='Home'
                component={Settings}
            />

            <SettingsStack.Screen
                name='General'
                component={General}
            />

            <SettingsStack.Screen
                name='Appearance'
                component={Appearance}
            />

            <SettingsStack.Screen
                name='Notifications'
                component={Notifications}
            />

            <SettingsStack.Screen
                name='Help'
                component={Help}
            />
        </SettingsStack.Navigator>
    );
}
// ------------------------------------------------