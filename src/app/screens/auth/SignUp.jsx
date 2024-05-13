import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    ActivityIndicator,
} from 'react-native';
import { TextInput, Dialog, Paragraph } from 'react-native-paper';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// Styles
import { boilerplate } from '../../styles/global/boilerplate';
import { colors, darkStyles, lightStyles } from '../../styles/global/customStyles';

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

    // Function to dismiss the dialog
    function dismissDialog() {
        if (dialogTitle === 'Account Created Successfully!') {
            setShowPermissionDialog(false);
            navigation.navigate('mainTab');
            console.log('User logged in.');
            return;
        }

        setShowPermissionDialog(false);
    };

    // Function to get error codes
    const getErrorMessage = errorCode => {
        switch (errorCode) {
            case 'auth/email-already-in-use':
                setDialogTitle('Email em uso');
                setDialogMessage('O email digitado já está em uso, tente novamente.');
                break;
            case 'auth/invalid-email':
                setDialogTitle('Email inválido');
                setDialogMessage('O email digitado é inválido, tente novamente.');
                break;
            case 'auth/weak-password':
                setDialogTitle('Senha fraca');
                setDialogMessage('A senha é muito fraca. Crie uma senha com pelo menos 6 dígitos.');
                break;
            case 'auth/missing-email':
                setDialogTitle('Campo de email vazio');
                setDialogMessage('Por favor digite o email para vincular à sua conta.');
                break;
            case 'auth/missing-password':
                setDialogTitle('Campo de senha vazio');
                setDialogMessage('Por favor crie uma senha com pelo menos 6 dígitos.');
                break;
            default:
                setDialogTitle('Erro');
                setDialogMessage('Ocorreu um erro inesperado, por favor tente novamente.');
                break;
        }
        setShowPermissionDialog(true);
    };

    // Function to handle sign up
    async function signUp() {
        setLoading(true);

        if (!email && !username && !password && !passwordConfirmation) {
            setDialogTitle('Campos vazios');
            setDialogMessage('Por favor preencha todos os campos.');
            setShowPermissionDialog(true);
            setLoading(false);
            return;
        }
        if (password !== passwordConfirmation) {
            setDialogTitle('Senhas não correspondem');
            setDialogMessage('Senha e confirmação diferentes, tente novamente.');
            setShowPermissionDialog(true);
            return;
        }

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            updateProfile(auth.currentUser, { displayName: username })
                .then(() => console.log(auth.currentUser.displayName))
                .catch(error => console.log('An error occurred:', error));

            setDialogTitle('Conta criada com sucesso!');
            setDialogMessage('Clique em OK para prosseguir.');
            setShowPermissionDialog(true);
            console.log('Usuário criado.');
        } catch (error) {
            getErrorMessage(error.code);
            console.log(error.code);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ImageBackground
            source={require('../../../../assets/auth-bg.jpg')}
            style={[theme.background, boilerplate.wrapper]}
        >
            <Image style={{ width: 200, height: 200, marginBottom: 15 }} source={require('../../../assets/logo.png')} />
            <Text style={{ color: colors.clr_2, fontWeight: 'bold', fontSize: 28, marginBottom: 15 }}>Criação de conta</Text>

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
                        icon={isPasswordSecure ? 'eye-off' : 'eye'} color={colors.clr_1}
                        onPress={() => isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true)}
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
                        icon={isPasswordConfirmationSecure ? 'eye-off' : 'eye'} color={colors.clr_1}
                        onPress={() => isPasswordConfirmationSecure ? setIsPasswordConfirmationSecure(false) : setIsPasswordConfirmationSecure(true)}
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
                onPress={signUp}
            >
                {loading ? <ActivityIndicator color={colors.clr_2} /> : <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Criar conta</Text>}
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Já possui conta?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                    <Text style={{ color: colors.clr_1, fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: colors.clr_1, marginLeft: 5 }}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <Dialog
                visible={showPermissionDialog}
                onDismiss={dismissDialog}
                style={{ backgroundColor: colors.clr_3, borderWidth: 2, borderColor: colors.clr_1 }}
            >
                <Dialog.Title style={{ color: colors.clr_1, fontWeight: 'bold' }}>
                    {dialogTitle}
                </Dialog.Title>

                <Dialog.Content>
                    <Paragraph>
                        <Text style={{ color: colors.clr_2 }}>{dialogMessage}</Text>
                    </Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <TouchableOpacity
                        onPress={dismissDialog}
                        style={{ backgroundColor: colors.clr_1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}
                    >
                        <Text style={{ color: colors.clr_3, fontWeight: 'bold' }}>OK</Text>
                    </TouchableOpacity>
                </Dialog.Actions>
            </Dialog>
        </ImageBackground>
    );
}