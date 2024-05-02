import { StyleSheet } from "react-native";

// Colors
export const colors = {
    clr_1: 'hsl(200, 100%, 49%)',
    clr_2: 'hsl(0, 0%, 100%)',
    clr_3: 'hsl(0, 0%, 10%)',
    clr_4: 'hsla(0, 0%, 0%, 0.7)',
    clr_5: 'hsl(0, 0%, 20%)',
    clr_6: 'hsl(0, 0%, 80%)',
    clr_7: 'hsl(0, 0%, 0%)',
    clr_8: 'hsla(200, 100%, 49%, 0.5)',
};

// Dark theme
export const darkStyles = StyleSheet.create({
    text: {
        primary: { color: colors.clr_1, },
        secondary: { color: colors.clr_2, },
        tertiary: { color: colors.clr_7 },
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

    background: {
        backgroundColor: colors.clr_2,
    },
});