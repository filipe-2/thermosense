// ------------------ Imports ---------------------
import { StyleSheet } from 'react-native';
// ------------------------------------------------


// --------------- Outside Styles -----------------
export const outside = StyleSheet.create({
    contentWrapper: {
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: 30,
        gap: 10,
    },

    mainContentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    weatherConditionInfoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    weatherConditionImage: {
        width: 75,
        height: 75,
    },

    outside: {
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: 30,
        gap: 10,
    },

    additionalInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 20,
        marginBottom: 15,
    },

    tempFahrenheit: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
// ------------------------------------------------