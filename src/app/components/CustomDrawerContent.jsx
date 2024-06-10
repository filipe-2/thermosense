import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { auth } from '../services/firebase';
import * as ImagePicker from 'expo-image-picker';

// Icons
import { Feather } from '@expo/vector-icons';

// Styles
import { colors } from '../styles/global/customStyles';
import { drawer } from '../styles/drawer';

export default function CustomDrawerContent(props) {
    const [image, setImage] = useState(auth.currentUser.photURL);
    const [dialogVisible, setDialogVisible] = useState(false);

    // Function to change the profile photo
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} scrollEnabled={false}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity
                        style={drawer.userImgWrapper}
                        onPress={pickImage}
                    >
                        <Image
                            style={drawer.userImg}
                            source={image ?
                                { uri: image } :
                                require('../../../assets/user.png')}
                        />
                    </TouchableOpacity>

                    <Text style={drawer.username}>{auth.currentUser.displayName}</Text>
                </View>
                <DrawerItemList {...props} />
                <>
                    <DrawerItem
                        labelStyle={drawer.logout}
                        label='Sair'
                        icon={({ size }) => <Feather name='log-out' color={colors.clr_9} size={size} />}
                        onPress={() => setDialogVisible(true)}
                    />
                    <Portal>
                        <Dialog
                            visible={dialogVisible}
                            onDismiss={() => setDialogVisible(false)}
                            style={{
                                backgroundColor: colors.clr_3,
                                borderWidth: 2,
                                borderColor: colors.clr_1,
                            }}
                        >
                            <Dialog.Title style={{
                                color: colors.clr_1,
                                fontWeight: 'bold',
                            }}>
                                Deseja mesmo sair?
                            </Dialog.Title>

                            <Dialog.Content>
                                <Paragraph style={{ color: colors.clr_2 }}>
                                    Confirme para sair da conta.
                                </Paragraph>
                            </Dialog.Content>

                            <Dialog.Actions>
                                <TouchableOpacity
                                    onPress={() => setDialogVisible(false)}
                                    style={{
                                        backgroundColor: colors.clr_1,
                                        paddingVertical: 5,
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Text>Não</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => auth.signOut()}
                                    style={{
                                        backgroundColor: colors.clr_9,
                                        paddingVertical: 5,
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Text>Sim</Text>
                                </TouchableOpacity>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </>
            </DrawerContentScrollView>

            <View>
                <Text style={drawer.footer}>v6.0.0-alpha</Text>
            </View>
        </View>
    );
}