import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { auth, firestore, storage } from '../services/firebase';
import { updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';

// Icons
import { Feather } from '@expo/vector-icons';

// Styles
import { colors } from '../styles/global/customStyles';
import { drawer } from '../styles/drawer';

export default function CustomDrawerContent(props) {
    const [image, setImage] = useState('');
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, 'images'), snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    console.log('New file: ', change.doc.data());
                    setFiles(prevFiles => [...prevFiles, change.doc.data()]);
                }
            });
        });

        return () => unsubscribe();
    }, []);

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

            // Upload profile photo
            await uploadImage(result.assets[0].uri);

            // Update profile image
            updateProfile(auth.currentUser, { photoURL: result.assets[0].uri })
                .then(() => console.log(auth.currentUser.photoURL))
                .catch(error => console.log('An error occurred: ', error));
        }
    }

    // Function to upload profile photo to database
    async function uploadImage(uri) {
        const response = await fetch(uri);
        const blob = await response.blob();

        const storageRef = ref(storage, 'images/');
        const uploadTask = uploadBytesResumable(storageRef, blob);

        // Listen for events
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done.`);
        }, error => {
            console.log('An error ocurred: ', error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
                console.log('File available at ', downloadURL);
                setImage(downloadURL);

                // Save record
                await saveRecord(downloadURL);
                setImage('');
            });
        });
    }

    async function saveRecord(url) {
        try {
            const docRef = await addDoc(collection(firestore, 'images'), { url });
            console.log('Document saved correctly. ', docRef.id);
        } catch (error) {
            console.log(error);
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
                        {image && <Image style={drawer.userImg} source={{ uri: image }} />}
                    </TouchableOpacity>

                    <Text style={drawer.username}>{auth.currentUser.displayName}</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    labelStyle={drawer.logout}
                    label='Sair'
                    icon={({ size }) => <Feather name='log-out' color={colors.clr_9} size={size} />}
                    onPress={() => auth.signOut()}
                />
            </DrawerContentScrollView>

            <View>
                <Text style={drawer.footer}>v2.2.0-alpha</Text>
            </View>
        </View>
    );
}