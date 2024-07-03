// ------------------ Imports ---------------------
import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    useNavigation,
    DrawerActions,
} from '@react-navigation/native';

import { auth } from '../services/firebase';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';

// Styles
import { colors } from '../styles/global/custom';
// ------------------------------------------------


// -------- Custom drawer header component --------
export default function CustomDrawerHeader() {
    const navigation = useNavigation();

    return (
        <View
            style={{
                position: 'absolute',
                top: 30,
                left: 10,
                right: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                height: 75,
                backgroundColor: colors.clr_4,
                borderWidth: 2,
                borderColor: colors.clr_1,
                borderRadius: 25,
            }}>

            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Icon name='bars' color={colors.clr_1} size={25} />
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                gap: 15,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Notificações')}>
                    <Feather name='bell' color={colors.clr_1} size={25} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Perfil')}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 35,
                        height: 35,
                        borderRadius: 18.25,
                        borderWidth: 1,
                        borderColor: colors.clr_1,
                    }}>
                    <Image
                        source={
                            auth.currentUser.photURL ?
                                { uri: auth.currentUser.photoURL } :
                                require('../../assets/imgs/user.png')
                        }
                        style={{
                            width: 25,
                            height: 25,
                            borderRadius: 12.25,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View pointerEvents="none" style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <Image
                    source={require('../../assets/imgs/logo.png')}
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </View>
        </View>
    );
}
// ------------------------------------------------