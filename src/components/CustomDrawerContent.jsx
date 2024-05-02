import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { auth } from '../services/firebase';

// Icons
import { Feather } from '@expo/vector-icons';

// Styles
import { colors } from '../styles/global/customStyles';
import { drawer } from '../styles/drawer';

export default function customDrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} scrollEnabled={false}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={drawer.userImgWrapper}>
                        <Image style={drawer.userImg} source={require('../../assets/profile-img.jpg')} />
                    </View>

                    <Text style={drawer.username}>Jane Doe</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    labelStyle={drawer.logout}
                    label='Sair'
                    icon={({ size }) => <Feather name='log-out' color={colors.clr_1} size={size} />}
                    onPress={() => auth.signOut()}
                />
            </DrawerContentScrollView>

            <View>
                <Text style={drawer.footer}>v2.0.0-alpha</Text>
            </View>
        </View>
    );
}