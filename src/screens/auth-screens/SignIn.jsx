import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    ActivityIndicator,
} from "react-native";
import { TextInput, Dialog, Paragraph } from 'react-native-paper';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Styles
import { boilerplate } from "../../styles/global/boilerplate";
import { colors, darkStyles, lightStyles } from '../../styles/global/customStyles';

export default function SignIn(props) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [showPermissionDialog, setShowPermissionDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    // Function to get error codes
    const getErrorMessage = errorCode => {
        switch (errorCode) {
            case 'auth/invalid-email':
                setDialogTitle('Email inválido');
                setDialogMessage('O email digitado é inválido, tente novamente.');
                break;
            case 'auth/invalid-credential':
                setDialogTitle('Senha inválida');
                setDialogMessage('Verifique sua senha e tente novamente.');
                break;
            case 'auth/missing-email':
                setDialogTitle('Campo de email vazio');
                setDialogMessage('Por favor digite o email da sua conta para prosseguir.');
                break;
            case 'auth/missing-password':
                setDialogTitle('Campo de senha vazio');
                setDialogMessage('Por favor digite a senha da sua conta para prosseguir.');
                break;
            case 'auth/too-many-requests':
                setDialogTitle('Tentativas de login excedidas');
                setDialogMessage('Pela sua segurança, altere sua senha ou tente novamente mais tarde.');
                break;
            default:
                setDialogTitle('Erro');
                setDialogMessage('Ocorreu um erro inesperado, por favor tente novamente.');
                break;
        }

        setShowPermissionDialog(true);
    };

    // Function to handle sign in
    async function signIn() {
        setLoading(true);

        if (!email && !password) {
            setDialogTitle('Campos vazios');
            setDialogMessage('Por favor, preencha todos os campos.');
            setShowPermissionDialog(true);
            setLoading(false);
            return;
        }

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response.user);
            console.log('Usuário logado');
        } catch (error) {
            getErrorMessage(error.code);
            console.log(error.code);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ImageBackground
            source={require('../../../assets/auth-bg.jpg')}
            style={[theme.background, boilerplate.wrapper, { paddingBottom: 100 }]}
        >
            <Image style={{ width: 200, height: 200, marginBottom: 15 }} source={require('../../../assets/logo.png')} />
            <Text style={{ color: colors.clr_2, fontWeight: 'bold', fontSize: 28, marginBottom: 15 }}>Login</Text>

            <TextInput
                textColor={colors.clr_2}
                cursorColor={colors.clr_1}
                activeUnderlineColor='transparent'
                value={email}
                placeholder='Email'
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
                value={password}
                placeholder='Senha'
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
                        icon={isPasswordSecure ? 'eye-off' : 'eye'} color={colors.clr_1}
                        onPress={() => isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true)}
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
                onPress={signIn}
            >
                {loading ? <ActivityIndicator color={colors.clr_2} /> : <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Entrar</Text>}
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.clr_3,
                    borderRadius: 20,
                    width: '75%',
                    padding: 10,
                    margin: 10,
                    maxWidth: 500,
                }}
            >
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.clr_1 }}>Modo anônimo</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Não possui conta?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                    <Text style={{ color: colors.clr_1, fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: colors.clr_1, marginLeft: 5 }}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

            <Dialog
                visible={showPermissionDialog}
                onDismiss={() => setShowPermissionDialog(false)}
                style={{ backgroundColor: colors.clr_3, borderWidth: 2, borderColor: colors.clr_1 }}
            >
                <Dialog.Title style={{ color: colors.clr_1, fontWeight: 'bold' }}>
                    {dialogTitle}
                </Dialog.Title>

                <Dialog.Content>
                    <Paragraph style={{ color: colors.clr_2 }}>
                        {dialogMessage}
                    </Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <TouchableOpacity
                        style={{ backgroundColor: colors.clr_1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}
                        onPress={() => setShowPermissionDialog(false)}
                    >
                        <Text style={{ color: colors.clr_3, fontWeight: 'bold' }}>OK</Text>
                    </TouchableOpacity>
                </Dialog.Actions>
            </Dialog>
        </ImageBackground >
    );
};