import { StyleSheet } from "react-native";
import { colors } from "../global/customStyles";

export const utils = {
    labelTextSize: 25,
};

export const home = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.clr_4,
    },

    labelsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
        padding: 25,
        backgroundColor: colors.clr_4,
        borderRadius: 20,
        width: '75%',
        maxWidth: 500,
    },

    labelWrapper: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    labelInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    labelTitle: {
        fontWeight: 'bold',
    },

    labelText: {
        fontSize: utils.labelTextSize,
    },
});