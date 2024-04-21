import { createDrawerNavigator } from '@react-navigation/drawer';

// Routes
import TabRoutes from './tab.routes';
import SettingsStackRoutes from './settingsStack.routes';

// Styles
import { colors } from '../styles/global/customStyles';

// Icons
import { Feather } from '@expo/vector-icons';


// Create drawer navigator
const Drawer = createDrawerNavigator();


// Screen navigator options
const navigatorOptions = {
    title: '',
    headerTintColor: colors.clr_1,
    drawerStyle: {
        backgroundColor: colors.clr_4,
        width: '75%',
        maxWidth: 400,
        blurRadius: 5,
    },
    drawerPosition: 'right',
    drawerActiveTintColor: colors.clr_1,
    drawerInactiveTintColor: colors.clr_6,
    headerStyle: {
        backgroundColor: colors.clr_7,
        borderBottomWidth: 1,
        borderColor: colors.clr_1,
    },
};


export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={navigatorOptions}>
            <Drawer.Screen
                name='Feed'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='home'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Menu inicial',
                }}
            />

            <Drawer.Screen
                name='Settings'
                component={SettingsStackRoutes}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='settings'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Configurações',
                }}
            />
        </Drawer.Navigator>
    );
};