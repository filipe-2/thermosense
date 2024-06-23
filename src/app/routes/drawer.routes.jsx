// ------------------ Imports ---------------------
// Components
import CustomDrawerContent from '../components/CustomDrawerContent';

// Routes
import HomeStackRoutes from './homeStack.routes';
import SettingsStackRoutes from './settingsStack.routes';

// Screens
import Control from '../screens/Control';
import Profile from '../screens/Profile';

// Styles
import { colors } from '../styles/global/custom';

// Icons
import { Feather } from '@expo/vector-icons';
import Notifications from '../screens/settings/Notifications';

// Utils
import {
    drawerNavigatorOptions,
    Drawer,
} from './misc';
// ------------------------------------------------


// ---------- Drawer routes component -------------
export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            contentOptions={{
                labelStyle: {
                    color: 'white',
                },
            }}
            screenOptions={drawerNavigatorOptions}
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
        </Drawer.Navigator>
    );
};
// ------------------------------------------------