import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import { colors } from '../styles/global/customStyles';

export default function CustomDrawerHeader() {
    return (
        <ImageBackground source={require('../../../assets/auth-bg.jpg')} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 30, paddingHorizontal: 20, height: 100, backgroundColor: colors.clr_7, borderBottomWidth: 5, borderColor: colors.clr_1 }}>
            <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderRadius: 18.25, borderWidth: 1, borderColor: colors.clr_1 }}>
                    <Image source={require('../../../assets/profile-img.jpg')} style={{ width: 25, height: 25, borderRadius: 12.25 }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name='bell' color={colors.clr_1} size={25} />
                </TouchableOpacity>
            </View>

            <View pointerEvents="none" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
                <Image source={require('../../../assets/logo.png')} style={{ width: 50, height: 50 }} />
            </View>

            <TouchableOpacity>
                <Icon name='bars' color={colors.clr_1} size={25} />
            </TouchableOpacity>
        </ImageBackground>
    );
}