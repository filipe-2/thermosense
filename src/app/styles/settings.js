import { StyleSheet } from "react-native";
import { colors } from "./global/customStyles";

export const settings = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        textAlign: 'left',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.clr_5,
    },

    lastButton: {
        borderBottomWidth: 0,
    },

    buttonTextWrapper: {
        marginLeft: 15,
    },

    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonDescription: {
        color: colors.clr_6,
    }
});