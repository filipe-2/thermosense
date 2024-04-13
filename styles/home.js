import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    wrapper: {
        gap: 15,
    },

    temperatureWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: 'hsla(0, 0%, 0%, 0.5)',
        borderRadius: 20,
        width: '75%',
        maxWidth: 500,
    },

    temperatureText: {
        fontSize: 50,
    }
});