import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },

    text: {
        color: '#fff',
    },

    temperatureWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#0000007f',
        borderRadius: 20,
        width: '75%',
        maxWidth: 500,
    },

    temperatureText: {
        fontSize: 50,
    }
});