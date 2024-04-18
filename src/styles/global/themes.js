import { StyleSheet } from "react-native";

// Colors
export const colors = {
    clr_1: 'hsl(200, 100%, 49%)',
    clr_2: 'hsl(0, 0%, 100%)',
    clr_3: 'hsl(0, 0%, 10%)',
    clr_4: 'hsla(0, 0%, 0%, 0.7)',
}

// Dark theme
export const darkStyles = StyleSheet.create({
    text: {
        primary: { color: colors.clr_1, },
        secondary: { color: colors.clr_2, },
    },

    background: {
        backgroundColor: colors.clr_3,
    },
});

// Light theme
export const lightStyles = StyleSheet.create({
    text: {
        primary: { color: colors.clr_1, },
        secondary: { color: colors.clr_3, },
    },

    backgroundColor: colors.clr_2,
});