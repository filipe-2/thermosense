// ------------------ Imports ---------------------
import { StyleSheet } from 'react-native';
import { colors } from './global/custom';
// ------------------------------------------------


// ---------------- Auth Styles -------------------
export const auth = StyleSheet.create({
    credentialsInput: {
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
    },

    submitBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.clr_1,
        borderRadius: 20,
        width: '75%',
        padding: 10,
        margin: 10,
        maxWidth: 500,
    },

    logo: {
        width: 200,
        height: 200,
        marginBottom: 15,
    },

    screenLabel: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 15,
        letterSpacing: 10,
    },

    activityIndicator: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    underlinedBtn: {
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: colors.clr_1,
        marginLeft: 5,
    },

    footerOptions: {
        flexDirection: 'row',
    },
});
// ------------------------------------------------