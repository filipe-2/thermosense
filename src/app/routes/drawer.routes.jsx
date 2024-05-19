import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import CustomDrawerContent from '../components/CustomDrawerContent';
import CustomDrawerHeader from '../components/CustomDrawerHeader';

// Routes
import SettingsStackRoutes from './settingsStack.routes';

// Screens
import Home from '../screens/home/Inside';
import Control from '../screens/Control';
import Profile from '../screens/Profile';

// Styles
import { colors } from '../styles/global/customStyles';

// Icons
import { Feather } from '@expo/vector-icons';
import Notifications from '../screens/settings/Notifications';
import HomeStackRoutes from './homeStack.routes';


// Create drawer navigator
const Drawer = createDrawerNavigator();

// Screen navigator options
const navigatorOptions = {
    header: () => <CustomDrawerHeader />,
    title: '',
    drawerStyle: {
        backgroundColor: colors.clr_4,
        width: '75%',
        maxWidth: 400,
        blurRadius: 5,
        borderLeftWidth: 2,
        borderColor: colors.clr_1,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    drawerLabelStyle: { marginLeft: -15 },
    drawerPosition: 'right',
    drawerActiveTintColor: colors.clr_1,
    drawerInactiveTintColor: colors.clr_6,
};


export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            contentOptions={{
                labelStyle: {
                    color: 'white',
                },
            }}
            screenOptions={navigatorOptions}
            drawerContent={CustomDrawerContent}
        >
            <Drawer.Screen
                name='Feed'
                component={HomeStackRoutes}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='home'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Início',

                }}
            />

            <Drawer.Screen
                name='Perfil'
                component={Profile}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='user'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Perfil',
                }}
            />

            <Drawer.Screen
                name='Controle'
                component={Control}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='activity'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Controle',
                }}
            />

            <Drawer.Screen
                name='Config'
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

            <Drawer.Screen
                name='Notificações'
                component={Notifications}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='bell'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Notificações',
                }}
            />
        </Drawer.Navigator>
    );
};