import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Routes
import SettingsStackRoutes from './settingsStack.routes';

// Screens
import Home from "../screens/Home";
import Control from "../screens/Control";

// Styles
import { colors } from '../styles/global/customStyles';

// Icons
import { Feather } from '@expo/vector-icons';


// Create bottom tab navigator
const Tab = createBottomTabNavigator();

// Screen navigator options
const navigatorOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: 'black',
        height: 75,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderTopColor: colors.clr_1,
    },
    tabBarActiveTintColor: colors.clr_1,
    tabBarInactiveTintColor: colors.clr_6,
};


export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={navigatorOptions}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ size }) =>
                        <Feather
                            name='home'
                            color={colors.clr_1}
                            size={size}
                        />,
                    tabBarLabel: 'Início',
                }}
            />
            <Tab.Screen
                name='Controls'
                component={Control}
                options={{
                    tabBarIcon: ({ size }) =>
                        <Feather
                            name='radio'
                            color={colors.clr_1}
                            size={size}
                        />,
                    tabBarLabel: 'Controle',
                }}
            />
            <Tab.Screen
                name='Settings'
                component={SettingsStackRoutes}
                options={{
                    tabBarIcon: ({ size }) =>
                        <Feather
                            name='settings'
                            color={colors.clr_1}
                            size={size}
                        />,
                    tabBarLabel: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    );
}