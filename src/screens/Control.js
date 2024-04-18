import { View, Text } from "react-native";

// Styles
import { boilerplate } from "../styles/global/boilerplate";
import { colors, darkStyles, lightStyles } from '../styles/global/customStyles';


export default function Control() {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[theme.background, boilerplate.wrapper]}>
            <Text style={theme.text.secondary}>Tela de Controle</Text>
        </View>
    )
}