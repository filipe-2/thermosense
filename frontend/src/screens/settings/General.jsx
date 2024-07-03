// ------------------ Imports ---------------------
import {
    View,
    Text,
} from 'react-native';

// Styles
import { boilerplate } from "../../styles/global/boilerplate";

import {
    darkStyles,
    lightStyles,
} from '../../styles/global/custom';
// ------------------------------------------------


// --------- General settings component -----------
export default function General() {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[theme.background, boilerplate.wrapper]}>
            <Text style={theme.text.secondary}>Configurações gerais</Text>
        </View>
    );
};
// ------------------------------------------------