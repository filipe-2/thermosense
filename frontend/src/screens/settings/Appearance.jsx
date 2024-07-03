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


// ------------ Appearance component --------------
export default function Appearance() {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[theme.background, boilerplate.wrapper]}>
            <Text style={theme.text.secondary}>Aparência</Text>
        </View>
    );
};
// ------------------------------------------------