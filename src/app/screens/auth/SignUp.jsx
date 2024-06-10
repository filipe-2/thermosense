// ------------------ Imports ---------------------
import { useState } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    ActivityIndicator,
} from 'react-native';

import {
    TextInput,
    Dialog,
    Paragraph,
} from 'react-native-paper';

// Styles
import { boilerplate } from '../../styles/global/boilerplate';
import {
    colors,
    darkStyles,
    lightStyles,
} from '../../styles/global/customStyles';

// Utils
import {
    // Variables

    // Functions
    handleSignUp,
    dismissDialog,
} from './utils.js';
// ------------------------------------------------


// ------------- Sign up component ----------------
export default function SignUp(props) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [isPasswordConfirmationSecure, setIsPasswordConfirmationSecure] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [showPermissionDialog, setShowPermissionDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <ImageBackground
            source={require('../../../../assets/auth-bg.jpg')}
            style={[theme.background, boilerplate.wrapper]}
        >
            <Image
                style={{
                    width: 200,
                    height: 200,
                    marginBottom: 15,
                }}
                source={require('../../../../assets/logo.png')}
            />
            <Text style={{
                color: colors.clr_1,
                fontWeight: 'bold',
                fontSize: 28,
                marginBottom: 15,
                letterSpacing: 5,
            }}>CADASTRO</Text>

            <TextInput
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={email}
                placeholder='Digite seu email'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setEmail(text)}
                style={{
                    backgroundColor: colors.clr_4,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: colors.clr_1,
                    width: '75%',
                    paddingHorizontal: 10,
                    margin: 10,
                    maxWidth: 500,
                }}
            />

            <TextInput
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={username}
                placeholder='Crie um nome de usuário'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setUsername(text)}
                style={{
                    backgroundColor: colors.clr_4,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: colors.clr_1,
                    width: '75%',
                    paddingHorizontal: 10,
                    margin: 10,
                    maxWidth: 500,
                }}
            />

            <TextInput
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={password}
                placeholder='Senha (6 ou mais dígitos)'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setPassword(text)}
                secureTextEntry={isPasswordSecure}
                style={{
                    backgroundColor: colors.clr_4,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: colors.clr_1,
                    width: '75%',
                    paddingHorizontal: 10,
                    margin: 10,
                    maxWidth: 500,
                }}
                right={
                    <TextInput.Icon
                        icon={isPasswordSecure ? 'eye-off' : 'eye'}
                        color={colors.clr_1}
                        onPress={() => isPasswordSecure ?
                            setIsPasswordSecure(false) :
                            setIsPasswordSecure(true)}
                    />
                }
            />

            <TextInput
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={passwordConfirmation}
                placeholder='Confirme sua senha'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setPasswordConfirmation(text)}
                secureTextEntry={isPasswordConfirmationSecure}
                style={{
                    backgroundColor: colors.clr_4,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderWidth: 2,
                    borderColor: colors.clr_1,
                    width: '75%',
                    paddingHorizontal: 10,
                    margin: 10,
                    maxWidth: 500,
                }}
                right={
                    <TextInput.Icon
                        icon={isPasswordConfirmationSecure ? 'eye-off' : 'eye'}
                        color={colors.clr_1}
                        onPress={() => isPasswordConfirmationSecure ?
                            setIsPasswordConfirmationSecure(false) :
                            setIsPasswordConfirmationSecure(true)}
                    />
                }
            />

            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.clr_1,
                    borderRadius: 20,
                    width: '75%',
                    padding: 10,
                    margin: 10,
                    maxWidth: 500,
                }}
                onPress={() => handleSignUp(
                    email,
                    username,
                    password,
                    passwordConfirmation,
                    setDialogTitle,
                    setDialogMessage,
                    setShowPermissionDialog,
                    setLoading
                )}
            >
                {loading ?
                    (<ActivityIndicator color={colors.clr_2} />) :
                    (<Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>Criar conta</Text>)
                }
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Já possui conta?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                    <Text style={{
                        color: colors.clr_1,
                        fontWeight: 'bold',
                        borderBottomWidth: 1,
                        borderBottomColor: colors.clr_1,
                        marginLeft: 5,
                    }}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <Dialog
                visible={showPermissionDialog}
                onDismiss={() => dismissDialog(dialogTitle, setShowPermissionDialog)}
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
                    {dialogTitle}
                </Dialog.Title>

                <Dialog.Content>
                    <Paragraph>
                        <Text style={{ color: colors.clr_2 }}>{dialogMessage}</Text>
                    </Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <TouchableOpacity
                        onPress={() => dismissDialog(dialogTitle, setShowPermissionDialog)}
                        style={{
                            backgroundColor: colors.clr_1,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{
                            color: colors.clr_3,
                            fontWeight: 'bold',
                        }}>OK</Text>
                    </TouchableOpacity>
                </Dialog.Actions>
            </Dialog>
        </ImageBackground>
    );
}
// ------------------------------------------------