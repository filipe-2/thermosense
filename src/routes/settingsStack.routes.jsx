import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Settings from '../screens/settings-screens/Settings';
import General from '../screens/settings-screens/General';
import Appearance from '../screens/settings-screens/Appearance';
import Notifications from '../screens/settings-screens/Notifications';
import Help from '../screens/settings-screens/Help';
import About from '../screens/settings-screens/About';

// Create drawer navigator
const SettingsStack = createStackNavigator();

// Screen navigator options
const navigatorOptions = {
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    presentation: 'transparentModal',
};

export default function SettingsStackRoutes() {
    return (
        <SettingsStack.Navigator
            screenOptions={navigatorOptions}
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

            <SettingsStack.Screen
                name='About'
                component={About}
            />
        </SettingsStack.Navigator>
    );
}