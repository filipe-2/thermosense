// ------------------ Imports ---------------------
import { auth } from '../../services/firebase';

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
// ------------------------------------------------


// ---------- Gets sign in error codes ------------
function getSignInError(code) {
    let title = '';
    let message = '';

    switch (code) {
        case 'auth/invalid-email':
            title = 'Email inválido';
            message = 'O email digitado é inválido, tente novamente.';
            break;
        case 'auth/invalid-credential':
            title = 'Senha inválida';
            message = 'Verifique sua senha e tente novamente.';
            break;
        case 'auth/missing-email':
            title = 'Campo de email vazio';
            message = 'Por favor digite o email da sua conta para prosseguir.';
            break;
        case 'auth/missing-password':
            title = 'Campo de senha vazio';
            message = 'Por favor digite a senha da sua conta para prosseguir.';
            break;
        case 'auth/too-many-requests':
            title = 'Campo de senha vazio';
            message = 'Por favor digite a senha da sua conta para prosseguir.';
            break;
        default:
            title = 'Erro';
            message = 'Ocorreu um erro inesperado, por favor tente novamente.';
            break;
    }

    return { title, message };
};
// ------------------------------------------------


// ---------- Gets sign up error codes ------------
function getSignUpError(error) {
    let title = '';
    let message = '';

    switch (error) {
        case 'auth/email-already-in-use':
            title = 'Email em uso';
            message = 'O email digitado já está em uso, tente novamente.';
            break;
        case 'auth/invalid-email':
            title = 'Email inválido';
            message = 'O email digitado é inválido, tente novamente.';
            break;
        case 'auth/weak-password':
            title = 'Senha fraca';
            message = 'A senha é muito fraca. Crie uma senha com pelo menos 6 dígitos.';
            break;
        case 'auth/missing-email':
            title = 'Campo de email vazio';
            message = 'Por favor digite o email para vincular à sua conta.';
            break;
        case 'auth/missing-password':
            title = 'Campo de senha vazio';
            message = 'Por favor crie uma senha com pelo menos 6 dígitos.';
            break;
        default:
            title = 'Erro';
            message = 'Ocorreu um erro inesperado, por favor tente novamente.';
            break;
    }

    return { title, message };
};
// ------------------------------------------------


// -------------- Handles sign in -----------------
async function handleSignIn(
    email,
    password,
    setDialogTitle,
    setDialogMessage,
    setShowPermissionDialog,
    setLoading
) {
    setLoading(true);

    if (!email || !password) {
        setDialogTitle('Campos vazios');
        setDialogMessage('Por favor, preencha todos os campos.');
        setShowPermissionDialog(true);
        setLoading(false);
        return;
    }

    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;

        console.log(user);
        console.log('Usuário logado');
    } catch (error) {
        const { title, message } = getSignInError(error.code);
        setDialogTitle(title);
        setDialogMessage(message);
        setShowPermissionDialog(true);

        console.log(error.code);
    } finally {
        setLoading(false);
    }
};
// ------------------------------------------------


// -------------- Handles sign up -----------------
async function handleSignUp(
    email,
    username,
    password,
    passwordConfirmation,
    setDialogTitle,
    setDialogMessage,
    setShowPermissionDialog,
    setLoading
) {
    setLoading(true);

    if (!email || !username || !password || !passwordConfirmation) {
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
        const user = response.user;

        updateProfile(auth.currentUser, { displayName: username })
            .then(() => console.log(auth.currentUser.displayName))
            .catch(error => console.log('An error occurred:', error));

        setDialogTitle('Conta criada com sucesso!');
        setDialogMessage('Clique em OK para prosseguir.');
        setShowPermissionDialog(true);

        console.log(user);
        console.log('Usuário criado.');
    } catch (error) {
        const { title, message } = getSignUpError(error.code, username);

        setDialogTitle(title);
        setDialogMessage(message);
        setShowPermissionDialog(true);

        console.log(error.code);
    } finally {
        setLoading(false);
    }
}
// ------------------------------------------------


// ------------- Dismisses dialog -----------------
function dismissDialog(dialogTitle, setShowPermissionDialog) {
    if (dialogTitle === 'Account Created Successfully!') {
        setShowPermissionDialog(false);
        navigation.navigate('mainTab');
        console.log('User logged in.');
        return;
    }

    setShowPermissionDialog(false);
};
// ------------------------------------------------


// ------------------- Exports --------------------
export {
    // Variáveis

    // Funções
    handleSignIn,
    handleSignUp,
    dismissDialog,
};
// ------------------------------------------------