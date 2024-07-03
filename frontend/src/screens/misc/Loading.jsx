// ------------------ Imports ---------------------
import {
    Text,
    ActivityIndicator,
    ImageBackground,
} from 'react-native';

// Styles
import { boilerplate } from '../../styles/global/boilerplate';

import {
    colors,
    darkStyles,
    lightStyles,
} from '../../styles/global/custom';
// ------------------------------------------------


// ------------- Loading component ----------------
export default function Loading() {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <ImageBackground
            source={require('../../../assets/imgs/auth-bg.jpg')}
            style={[theme.background, boilerplate.wrapper]}
        >
            <ActivityIndicator color={colors.clr_1} size={50} />
            <Text style={theme.text.secondary}>Carregando...</Text>
        </ImageBackground>
    );
}
// ------------------------------------------------