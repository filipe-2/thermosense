// ------------------ Imports ---------------------
import {
    useState,
    useEffect,
    useRef,
} from 'react';

import {
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    ActivityIndicator,
    Platform,
} from "react-native";

import NativeTouchable from '../../components/NativeTouchable.jsx';

import {
    TextInput,
    Dialog,
    Paragraph,
} from 'react-native-paper';

// Styles
import { boilerplate } from "../../styles/global/boilerplate";
import { auth } from '../../styles/misc/auth.js';
import { dialog } from '../../styles/misc/dialog.js';
import {
    colors,
    darkStyles,
    lightStyles,
} from '../../styles/global/custom.js';

// Utils
import {
    handleSignIn,
    areSignInFieldsEmpty,
} from './utils.js';
// ------------------------------------------------


// ------------- Sign in component ----------------
export default function SignIn({ navigation }) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    // ------------------ States ----------------------
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emptyFields, setEmptyFields] = useState(areSignInFieldsEmpty(email, password));
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [showPermissionDialog, setShowPermissionDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    // ------------------------------------------------

    // ------------------- Refs -----------------------
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    // ------------------------------------------------

    // --------------- Use effects --------------------
    useEffect(() => {
        setEmptyFields(areSignInFieldsEmpty(email, password));
    }, [email, password]);
    // ------------------------------------------------

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={false}
            style={boilerplate.wrapper}
        >
            <ImageBackground
                source={require('../../../../assets/imgs/auth-bg.jpg')}
                style={[theme.background, auth.background]}
            />

            <View style={auth.logoWrapper}>
                <Image
                    style={auth.logo}
                    source={require('../../../../assets/imgs/icon.png')}
                />
            </View>

            <Text style={[theme.text.primary, auth.screenLabel]}>LOGIN</Text>

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
                onSubmitEditing={() => passwordInputRef.current.focus()}
                returnKeyType='next'
                blurOnSubmit={false}
                ref={emailInputRef}
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
                        icon={isPasswordSecure ? 'eye-off' : 'eye'} color={colors.clr_1}
                        onPress={() => isPasswordSecure
                            ? setIsPasswordSecure(false)
                            : setIsPasswordSecure(true)}
                    />
                }
                onSubmitEditing={() => handleSignIn(
                    email,
                    password,
                    setDialogTitle,
                    setDialogMessage,
                    setShowPermissionDialog,
                    setLoading
                )}
                returnKeyType='done'
                ref={passwordInputRef}
            />

            {emptyFields
                ? (
                    <TouchableWithoutFeedback>
                        <View style={[auth.submitBtn.default, auth.submitBtn.inactive]}>
                            {loading
                                ? <ActivityIndicator color={colors.clr_2} />
                                : <Text style={auth.activityIndicator}>Entrar</Text>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                )
                : (
                    <NativeTouchable
                        onPress={() => handleSignIn(
                            email,
                            password,
                            setDialogTitle,
                            setDialogMessage,
                            setShowPermissionDialog,
                            setLoading
                        )}
                    >
                        <View style={[auth.submitBtn.default, auth.submitBtn.active]}>
                            {loading
                                ? <ActivityIndicator color={colors.clr_2} />
                                : <Text style={auth.activityIndicator}>Entrar</Text>
                            }
                        </View>
                    </NativeTouchable>
                )
            }

            <View style={auth.footerOptions}>
                <Text style={theme.text.secondary}>Não possui conta?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[theme.text.primary, auth.underlinedBtn]}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

            <Dialog
                visible={showPermissionDialog}
                onDismiss={() => setShowPermissionDialog(false)}
                style={dialog.wrapper}
            >
                <Dialog.Title style={dialog.title}>
                    {dialogTitle}
                </Dialog.Title>

                <Dialog.Content>
                    <Paragraph style={dialog.paragraph}>{dialogMessage}</Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <TouchableOpacity
                        style={dialog.actionsBtn}
                        onPress={() => setShowPermissionDialog(false)}
                    >
                        <Text style={dialog.actionsBtnText}>OK</Text>
                    </TouchableOpacity>
                </Dialog.Actions>
            </Dialog>
        </KeyboardAvoidingView>
    );
};
// ------------------------------------------------