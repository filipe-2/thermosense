import { StyleSheet } from "react-native";
import { colors } from "./global/customStyles";

export const drawer = StyleSheet.create({
    userImgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: colors.clr_1,
    },

    userImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    username: {
        color: colors.clr_1,
        fontWeight: 'bold',
        fontSize: 25,
        margin: 10,
    },

    logout: {
        color: colors.clr_2,
        marginLeft: -15,
    },

    footer: {
        color: colors.clr_6,
        margin: 25,
    },
});