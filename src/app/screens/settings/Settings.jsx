// ------------------ Imports ---------------------
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Styles
import { boilerplate } from '../../styles/global/boilerplate';
import { settings } from '../../styles/settings/settings';

import {
    colors,
    darkStyles,
    lightStyles,
} from '../../styles/global/custom';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
// ------------------------------------------------


// ------------ Settings component ----------------
export default function Settings({ navigation }) {
    const isDarkMode = true; // Change based on user preferences
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[theme.background, boilerplate.wrapper]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('General')}
                style={settings.button}
            >
                <Icon name='gear' size={30} color={colors.clr_1} />
                <View style={settings.buttonTextWrapper}>
                    <Text style={[theme.text.primary, settings.buttonTitle]}>Geral</Text>
                    <Text style={[settings.buttonDescription]}>Idioma | Conta | Segurança</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Appearance')}
                style={settings.button}
            >
                <Icon name='adjust' size={30} color={colors.clr_1} />
                <View style={settings.buttonTextWrapper}>
                    <Text style={[theme.text.primary, settings.buttonTitle]}>Aparência</Text>
                    <Text style={[settings.buttonDescription]}>Tema | Plano de fundo</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
// ------------------------------------------------