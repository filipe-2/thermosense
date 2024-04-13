import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import { globalStyles } from '../styles/global';
import { settingsStyles } from '../styles/settings';

export default function Settings() {
    return (
        <View style={globalStyles.wrapper}>
            <TouchableOpacity style={settingsStyles.button}>
                <Icon name='gear' size={30} color='hsl(200, 100%, 49%)' />
                <View style={settingsStyles.buttonTextWrapper}>
                    <Text style={[globalStyles.text, settingsStyles.buttonTitle]}>Geral</Text>
                    <Text style={[globalStyles.text, settingsStyles.buttonDescription]}>Idioma | Conta | Segurança</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={settingsStyles.button}>
                <Icon name='adjust' size={30} color='hsl(200, 100%, 49%)' />
                <View style={settingsStyles.buttonTextWrapper}>
                    <Text style={[globalStyles.text, settingsStyles.buttonTitle]}>Aparência</Text>
                    <Text style={[globalStyles.text, settingsStyles.buttonDescription]}>Tema | Plano de fundo</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={settingsStyles.button}>
                <Icon name='bell' size={30} color='hsl(200, 100%, 49%)' />
                <View style={settingsStyles.buttonTextWrapper}>
                    <Text style={[globalStyles.text, settingsStyles.buttonTitle]}>Notificações</Text>
                    <Text style={[globalStyles.text, settingsStyles.buttonDescription]}>Idioma | Conta | Segurança</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={settingsStyles.button}>
                <Icon name='question-circle' size={30} color='hsl(200, 100%, 49%)' />
                <View style={settingsStyles.buttonTextWrapper}>
                    <Text style={[globalStyles.text, settingsStyles.buttonTitle]}>Ajuda</Text>
                    <Text style={[globalStyles.text, settingsStyles.buttonDescription]}>Dúvidas | FAQ | Guia ThermoSense</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[settingsStyles.button, { borderBottomWidth: 0 }]}>
                <Icon name='exclamation-circle' size={30} color='hsl(200, 100%, 49%)' />
                <View style={settingsStyles.buttonTextWrapper}>
                    <Text style={[globalStyles.text, settingsStyles.buttonTitle]}>Sobre</Text>
                    <Text style={[globalStyles.text, settingsStyles.buttonDescription]}>Versão | Desenvolvedores | Informações</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}