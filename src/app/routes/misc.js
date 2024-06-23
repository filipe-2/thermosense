// ------------------ Imports ---------------------
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import CustomDrawerHeader from '../components/CustomDrawerHeader';

// Styles
import { colors } from '../styles/global/custom';
// ------------------------------------------------


// ----------- Stack navigator options ------------
const stackNavigatorOptions = {
    headerShown: false,
    gestureEnabled: true,
    cardOverlayEnabled: true,
    presentation: 'transparentModal',
};
// ------------------------------------------------


// ----------- Drawer navigator options -----------
const drawerNavigatorOptions = {
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
// ------------------------------------------------


// ----------------- Navigators -------------------
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
// ------------------------------------------------


// ------------------ Exports ---------------------
export {
    // Variables
    stackNavigatorOptions,
    drawerNavigatorOptions,
    AuthStack,
    HomeStack,
    SettingsStack,
    Drawer,

    // Functions
};
// ------------------------------------------------