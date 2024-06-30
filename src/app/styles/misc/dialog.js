// ------------------ Imports ---------------------
import { StyleSheet } from 'react-native';
import { colors } from '../global/custom';
// ------------------------------------------------


// --------------- Dialog Styles ------------------
const dialog = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.clr_3,
        borderWidth: 2,
        borderColor: colors.clr_1,
    },

    title: {
        color: colors.clr_1,
        fontWeight: 'bold',
    },

    paragraph: {
        color: colors.clr_2,
    },

    actionsBtn: {
        backgroundColor: colors.clr_1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    actionsBtnText: {
        color: colors.clr_3,
        fontWeight: 'bold',
    },
});
// ------------------------------------------------


// ------------------ Exports ---------------------
export {
    // Variables
    dialog,

    // Functions
};
// ------------------------------------------------