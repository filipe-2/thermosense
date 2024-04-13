import { StyleSheet } from "react-native";

export const settingsStyles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        textAlign: 'left',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'hsl(0, 0%, 10%)'
    },

    buttonTextWrapper: {
        marginLeft: 15,
    },

    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'hsl(200, 100%, 49%)',
    },

    buttonDescription: {
        color: 'hsl(0, 0%, 80%)'
    }
});