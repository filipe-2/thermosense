import { View, Text, TouchableOpacity, Image } from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import { colors } from '../styles/global/customStyles';

export default function CustomDrawerHeader() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 15, paddingHorizontal: 20, height: 80, backgroundColor: colors.clr_3, borderBottomWidth: 2, borderColor: colors.clr_1 }}>
            <View style={{ flexDirection: 'row', gap: 15 }}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/profile-img.jpg')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name='bell' color={colors.clr_1} size={25} />
                </TouchableOpacity>
            </View>

            <View pointerEvents="none" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/logo.png')} style={{
                    width: 50, height: 50

                }} />
            </View>

            <TouchableOpacity>
                <Icon name='bars' color={colors.clr_1} size={25} />
            </TouchableOpacity>
        </View>
    );
}