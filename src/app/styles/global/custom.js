// ------------------ Imports ---------------------
import { StyleSheet } from 'react-native';
// ------------------------------------------------


// ------------------- Colors ---------------------
const colors = {
    clr_1: 'hsl(200, 100%, 49%)',
    clr_2: 'hsl(0, 0%, 100%)',
    clr_3: 'hsl(0, 0%, 10%)',
    clr_4: 'hsla(0, 0%, 0%, 0.7)',
    clr_5: 'hsl(0, 0%, 20%)',
    clr_6: 'hsl(0, 0%, 80%)',
    clr_7: 'hsl(0, 0%, 0%)',
    clr_8: 'hsla(200, 100%, 49%, 0.5)',
    clr_9: 'hsl(360, 100%, 59%)',
    clr_10: 'hsla(0, 0%, 0%, 0.5)',
    clr_11: 'hsla(200, 100%, 49%, 0.25)',
    clr_12: 'hsla(200, 100%, 49%, 0.1)',
    clr_13: 'hsl(0, 0%, 50%)',
};
// ------------------------------------------------


// ----------------- Dark Theme -------------------
const darkStyles = StyleSheet.create({
    text: {
        primary: { color: colors.clr_1, },
        secondary: { color: colors.clr_2, },
        tertiary: { color: colors.clr_7 },
    },

    background: {
        backgroundColor: colors.clr_3,
    },
});
// ------------------------------------------------


// ----------------- Light Theme ------------------
const lightStyles = StyleSheet.create({
    text: {
        primary: { color: colors.clr_1, },
        secondary: { color: colors.clr_3, },
    },

    background: {
        backgroundColor: colors.clr_2,
    },
});
// ------------------------------------------------


// ------------------ Exports ---------------------
export {
    // Variables
    colors,
    darkStyles,
    lightStyles,

    // Functions
};
// ------------------------------------------------