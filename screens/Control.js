import { View, Text } from "react-native";

// Styles
import { globalStyles } from "../styles/global";

export default function Control() {
    return (
        <View style={globalStyles.wrapper}>
            <Text style={globalStyles.text}>Tela de Controle</Text>
        </View>
    )
}