import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

// Components
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Control from "../screens/Control";

// Bottom tab navigator
const Tab = createBottomTabNavigator();

// Screen navigator options
const navigatorOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: 'black',
        height: 75,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderTopColor: 'hsl(200, 100%, 49%)',
    }
};

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={navigatorOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Feather
                            name="home"
                            color={'hsl(200, 100%, 49%)'}
                            size={size}
                        />,
                    tabBarLabel: 'Início',
                }}
            />
            <Tab.Screen
                name="Controls"
                component={Control}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Feather
                            name="radio"
                            color={'hsl(200, 100%, 49%)'}
                            size={size}
                        />,
                    tabBarLabel: 'Controle',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Feather
                            name="settings"
                            color={'hsl(200, 100%, 49%)'}
                            size={size}
                        />,
                    tabBarLabel: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    )
}