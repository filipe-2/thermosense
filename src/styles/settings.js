import { StyleSheet } from "react-native";

export const settings = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        textAlign: 'left',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'hsl(0, 0%, 20%)'
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
        color: 'hsl(0, 0%, 80%)'
    }
});