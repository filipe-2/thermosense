import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

// Icons
import { Feather } from '@expo/vector-icons';

// Styles
import { colors } from '../styles/global/customStyles';

export default function customDrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={false}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: colors.clr_1, }}>
                        <Image
                            source={require('../../assets/profile-img.jpg')}
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                        />
                    </View>

                    <Text style={{ color: colors.clr_1, fontWeight: 'bold', fontSize: 25, margin: 10, }}>Jane Doe</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    labelStyle={{ color: 'white', marginLeft: -15 }}
                    label='Sair'
                    icon={({ size }) => <Feather
                        name='log-out'
                        color={colors.clr_1}
                        size={size}
                    />}
                    onPress={() => null}
                />
            </DrawerContentScrollView>

            <View>
                <Text style={{ color: colors.clr_6, margin: 25, }}>v2.0.0-alpha</Text>
            </View>
        </View>
    );
}