// ------------------ Imports ---------------------
import { StyleSheet } from 'react-native';
import { colors } from '../global/custom';
// ------------------------------------------------


// ---------------- Auth Styles -------------------
export const auth = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
    },

    credentialsInput: {
        backgroundColor: colors.clr_4,
        borderBottomWidth: 2,
        borderColor: colors.clr_1,
        width: '75%',
        paddingHorizontal: 10,
        margin: 10,
        maxWidth: 500,
    },

    submitBtn: {
        default: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            width: '75%',
            padding: 10,
            margin: 10,
            maxWidth: 500,
        },

        active: {
            backgroundColor: colors.clr_1,
        },

        inactive: {
            backgroundColor: colors.clr_13,
        },
    },

    logoWrapper: {
        width: 200,
        height: 200,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: colors.clr_1,
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 180,
        height: 180,
        borderRadius: 90,
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