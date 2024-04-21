import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Settings from '../screens/settings_screens/Settings';
import General from '../screens/settings_screens/General';
import Appearance from '../screens/settings_screens/Appearance';
import Notifications from '../screens/settings_screens/Notifications';
import Help from '../screens/settings_screens/Help';
import About from '../screens/settings_screens/About';


// Create drawer navigator
const SettingsStack = createStackNavigator();

// Screen navigator options
const navigatorOptions = {
    headerShown: false,
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
};