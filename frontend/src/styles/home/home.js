// ------------------ Imports ---------------------
import { StyleSheet } from "react-native";
import { colors } from "../global/custom";
// ------------------------------------------------


// ---------------- Home Styles -------------------
export const home = StyleSheet.create({
    labelTextSize: 25,

    wrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    gradient: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 25,
        borderLeftWidth: 5,
        borderColor: colors.clr_1,
        marginTop: 100,
    },

    contentWrapper: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    titleWrapper: {
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderColor: colors.clr_1,
    },

    title: {
        fontSize: 20,
        color: colors.clr_2,
        letterSpacing: 8,
        marginTop: 10,
        fontWeight: 'bold',
    },

    temperatureText: {
        fontSize: 100,
        color: colors.clr_2,
        fontWeight: '100',
        textAlign: 'center',
    },

    additionalInfoWrapper: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    additionalInfoText: {
        fontSize: 20,
        color: colors.clr_2,
        fontWeight: '300',
        textAlign: 'center',
    },

    heatIndexWrapper: {
        marginBottom: 15,
        paddingHorizontal: 10,
        borderTopWidth: 2,
        borderColor: colors.clr_1,
    },

    heatIndexText: {
        fontSize: 18,
        color: colors.clr_2,
    },

    navBtns: {
        width: '75%',
        minHeight: 75,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: colors.clr_1,
        flexDirection: 'row',
    },

    navBtn: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },

    navBtnOn: {
        backgroundColor: colors.clr_11,
    },

    navBtnOff: {
        backgroundColor: colors.clr_10,
    },

    navBtnRight: {
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },

    navBtnLeft: {
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },

    navBtnText: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.clr_2,
    },
});
// ------------------------------------------------