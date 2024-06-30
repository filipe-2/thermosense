// ------------------ Imports ---------------------
import { useState } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';

import {
    Portal,
    Dialog,
    Paragraph,
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

import {
    auth,
    storage,
} from '../services/firebase';

import {
    launchImageLibraryAsync,
    MediaTypeOptions,
} from 'expo-image-picker';

import { getInfoAsync } from 'expo-file-system';

// Icons
import { Feather } from '@expo/vector-icons';

// Styles
import { colors } from '../styles/global/custom';
import { drawer } from '../styles/misc/drawer';
// ------------------------------------------------


// ------- Custom drawer content component --------
export default function CustomDrawerContent(props) {
    const [image, setImage] = useState(auth.currentUser.photoURL);
    const [uploading, setUploading] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);

    // Function to change the profile photo
    async function pickImage() {
        let result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(image);

            uploadMedia();
        }
    }

    // Uploads media files
    async function uploadMedia() {
        setUploading(true);

        try {
            const { uri } = await getInfoAsync(image);
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = () => resolve(xhr.response);
                xhr.onerror = (error) => reject(new TypeError('Network request failed'));
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
            });

            const fileName = image.substring(image.lastIndexOf('/') + 1);
            const ref = storage.ref().child(fileName);

            await ref.put(blob);
            setUploading(false);

            Alert.alert('Photo Uploaded');


            auth.currentUser.photoURL = uri;
        } catch (error) {
            console.error(error);
            setUploading(false);
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
                                require('../../../assets/imgs/user.png')}
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
// ------------------------------------------------