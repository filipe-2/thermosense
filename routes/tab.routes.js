import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import Home from "../screens/Home";
import Settings from "../screens/Settings";

// Bottom tab navigator
const Tab = createBottomTabNavigator();

// Screen navigator options
const navigatorOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: 'black',
        height: 75,
        paddingBottom: 15,
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
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <Feather
                            name="settings"
                            color={'hsl(200, 100%, 49%)'}
                            size={size}
                        />,
                    tabBarLabel: 'Config',
                }}
            />
        </Tab.Navigator>
    )
}