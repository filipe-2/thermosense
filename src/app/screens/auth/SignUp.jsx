// ------------------ Imports ---------------------
import {
    useState,
    useEffect,
    useRef,
} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    ActivityIndicator,
} from 'react-native';

import NativeTouchable from '../../components/NativeTouchable.jsx';

import {
    TextInput,
    Dialog,
    Paragraph,
} from 'react-native-paper';

// Styles
import { boilerplate } from '../../styles/global/boilerplate';
import { auth } from '../../styles/auth';
import { dialog } from '../../styles/dialog.js';

import {
    colors,
    darkStyles,
    lightStyles,
} from '../../styles/global/custom.js';

// Utils
import {
    handleSignUp,
    dismissDialog,
    areSignUpFieldsEmpty,
} from './utils.js';
// ------------------------------------------------


// ------------- Sign up component ----------------
export default function SignUp({ navigation }) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    // ------------------ States ----------------------
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [isPasswordConfirmationSecure, setIsPasswordConfirmationSecure] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [emptyFields, setEmptyFields] = useState(areSignUpFieldsEmpty(
        email,
        username,
        password,
        passwordConfirmation
    ));
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [showPermissionDialog, setShowPermissionDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    // ------------------------------------------------

    // ------------------- Refs -----------------------
    const emailInputRef = useRef(null);
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const passwordConfirmationInputRef = useRef(null);
    // ------------------------------------------------

    // --------------- Use effects --------------------
    useEffect(() => {
        setEmptyFields(areSignUpFieldsEmpty(
            email,
            username,
            password,
            passwordConfirmation
        ));
    }, [email, username, password, passwordConfirmation]);
    // ------------------------------------------------

    return (
        <ImageBackground
            source={require('../../../../assets/imgs/auth-bg.jpg')}
            style={[theme.background, boilerplate.wrapper]}
        >
            <View style={auth.logoWrapper}>
                <Image
                    style={auth.logo}
                    source={require('../../../../assets/imgs/icon.png')}
                />
            </View>

            <Text style={[theme.text.primary, auth.screenLabel]}>CADASTRO</Text>

            <TextInput
                style={auth.credentialsInput}
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={email}
                placeholder='E-mail'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setEmail(text)}
                onSubmitEditing={() => usernameInputRef.current.focus()}
                returnKeyType='next'
                blurOnSubmit={false}
                ref={emailInputRef}
            />

            <TextInput
                style={auth.credentialsInput}
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={username}
                placeholder='Usuário'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setUsername(text)}
                onSubmitEditing={() => passwordInputRef.current.focus()}
                returnKeyType='next'
                blurOnSubmit={false}
                ref={usernameInputRef}
            />

            <TextInput
                style={auth.credentialsInput}
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={password}
                placeholder='Senha'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setPassword(text)}
                secureTextEntry={isPasswordSecure}
                right={
                    <TextInput.Icon
                        icon={isPasswordSecure ? 'eye-off' : 'eye'}
                        color={colors.clr_1}
                        onPress={() => isPasswordSecure ?
                            setIsPasswordSecure(false) :
                            setIsPasswordSecure(true)}
                    />
                }
                onSubmitEditing={() => passwordConfirmationInputRef.current.focus()}
                returnKeyType='next'
                blurOnSubmit={false}
                ref={passwordInputRef}
            />

            <TextInput
                style={auth.credentialsInput}
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={passwordConfirmation}
                placeholder='Confirmar senha'
                placeholderTextColor={colors.clr_6}
                autoCapitalize='none'
                onChangeText={text => setPasswordConfirmation(text)}
                secureTextEntry={isPasswordConfirmationSecure}
                right={
                    <TextInput.Icon
                        icon={isPasswordConfirmationSecure ? 'eye-off' : 'eye'}
                        color={colors.clr_1}
                        onPress={() => isPasswordConfirmationSecure ?
                            setIsPasswordConfirmationSecure(false) :
                            setIsPasswordConfirmationSecure(true)}
                    />
                }
                onSubmitEditing={() => handleSignUp(
                    email,
                    username,
                    password,
                    passwordConfirmation,
                    setDialogTitle,
                    setDialogMessage,
                    setShowPermissionDialog,
                    setLoading
                )}
                returnKeyType='done'
                ref={passwordConfirmationInputRef}
            />

            {emptyFields
                ? (
                    <TouchableWithoutFeedback>
                        <View style={[auth.submitBtn.default, auth.submitBtn.inactive]}>
                            {loading
                                ? <ActivityIndicator color={colors.clr_2} />
                                : <Text style={auth.activityIndicator}>Criar conta</Text>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                )
                : (
                    <NativeTouchable
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
                        <View style={[auth.submitBtn.default, auth.submitBtn.active]}>
                            {loading
                                ? <ActivityIndicator color={colors.clr_2} />
                                : <Text style={auth.activityIndicator}>Criar conta</Text>
                            }
                        </View>
                    </NativeTouchable>
                )
            }

            <View style={auth.footerOptions}>
                <Text style={theme.text.secondary}>Já possui conta?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={[theme.text.primary, auth.underlinedBtn]}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <Dialog
                visible={showPermissionDialog}
                onDismiss={() => dismissDialog(dialogTitle, setShowPermissionDialog)}
                style={dialog.wrapper}
            >
                <Dialog.Title style={dialog.title}>
                    {dialogTitle}
                </Dialog.Title>

                <Dialog.Content>
                    <Paragraph>
                        <Text style={dialog.paragraph}>{dialogMessage}</Text>
                    </Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <TouchableOpacity
                        onPress={() => dismissDialog(dialogTitle, setShowPermissionDialog)}
                        style={dialog.actionsBtn}
                    >
                        <Text style={dialog.actionsBtnText}>OK</Text>
                    </TouchableOpacity>
                </Dialog.Actions>
            </Dialog>
        </ImageBackground>
    );
}
// ------------------------------------------------