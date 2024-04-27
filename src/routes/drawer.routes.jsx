import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import customDrawerContent from '../components/CustomDrawerContent';

// Routes
import SettingsStackRoutes from './settingsStack.routes';

// Screens
import Home from '../screens/Home';
import Control from '../screens/Control';

// Styles
import { colors } from '../styles/global/customStyles';

// Icons
import { Feather } from '@expo/vector-icons';


// Create drawer navigator
const Drawer = createDrawerNavigator();


// Screen navigator options
const navigatorOptions = {
    title: '',
    headerTitleAlign: 'center',
    headerTintColor: colors.clr_1,
    drawerStyle: {
        backgroundColor: colors.clr_4,
        width: '75%',
        maxWidth: 400,
        blurRadius: 5,
    },
    drawerLabelStyle: { marginLeft: -15 },
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
        <Drawer.Navigator
            contentOptions={{
                labelStyle: {
                    fontFamily: 'SomeFont',
                    color: 'white',
                },
            }}
            screenOptions={navigatorOptions}
            drawerContent={customDrawerContent}
        >
            <Drawer.Screen
                name='Feed'
                component={Home}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='home'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Início',
                    headerTitle: 'Início',
                }}
            />

            <Drawer.Screen
                name='Perfil'
                component={Home}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='user'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Perfil',
                    headerTitle: 'Perfil',
                }}
            />

            <Drawer.Screen
                name='Controle'
                component={Control}
                options={{
                    drawerIcon: ({ size }) =>
                        <Feather
                            name='settings'
                            color={colors.clr_1}
                            size={size}
                        />,
                    drawerLabel: 'Controle',
                    headerTitle: 'Controle',
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
                    headerTitle: 'Configurações',
                }}
            />
        </Drawer.Navigator>
    );
};