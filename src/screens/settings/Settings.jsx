import { Text, TouchableOpacity, View } from 'react-native';

// Styles
import { boilerplate } from '../../styles/global/boilerplate';
import { settings } from '../../styles/settings';
import { colors, darkStyles, lightStyles } from '../../styles/global/customStyles';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Settings(props) {
    console.log(props);

    const isDarkMode = true; // Change based on user preferences
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[theme.background, boilerplate.wrapper]}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('General')}
                style={settings.button}
            >
                <Icon name='gear' size={30} color={colors.clr_1} />
                <View style={settings.buttonTextWrapper}>
                    <Text style={[theme.text.primary, settings.buttonTitle]}>Geral</Text>
                    <Text style={[settings.buttonDescription]}>Idioma | Conta | Segurança</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('Appearance')}
                style={settings.button}
            >
                <Icon name='adjust' size={30} color={colors.clr_1} />
                <View style={settings.buttonTextWrapper}>
                    <Text style={[theme.text.primary, settings.buttonTitle]}>Aparência</Text>
                    <Text style={[settings.buttonDescription]}>Tema | Plano de fundo</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('Notifications')}
                style={settings.button}
            >
                <Icon name='bell' size={26} color={colors.clr_1} />
                <View style={settings.buttonTextWrapper}>
                    <Text style={[theme.text.primary, settings.buttonTitle]}>Notificações</Text>
                    <Text style={[settings.buttonDescription]}>Idioma | Conta | Segurança</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('Help')}
                style={settings.button}
            >
                <Icon name='question-circle' size={30} color={colors.clr_1} />
                <View style={settings.buttonTextWrapper}>
                    <Text style={[theme.text.primary, settings.buttonTitle]}>Ajuda</Text>
                    <Text style={[settings.buttonDescription]}>Dúvidas | FAQ | Guia ThermoSense</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('About')}
                style={[settings.button, settings.lastButton]}
            >
                <Icon name='exclamation-circle' size={30} color={colors.clr_1} />
                <View style={settings.buttonTextWrapper}>
                    <Text style={[theme.text.primary, settings.buttonTitle]}>Sobre</Text>
                    <Text style={[settings.buttonDescription]}>Versão | Desenvolvedores | Informações</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}