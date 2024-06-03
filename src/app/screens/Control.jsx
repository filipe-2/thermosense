import { View, ImageBackground, TouchableOpacity, Text } from "react-native";

// Styles
import { boilerplate } from "../styles/global/boilerplate";
import { colors, darkStyles, lightStyles } from '../styles/global/customStyles';

// Icons
import { Feather } from '@expo/vector-icons';

export default function Control() {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <ImageBackground
            source={require('../../../assets/auth-bg.jpg')}
            style={[theme.background, boilerplate.wrapper, { gap: 25 }]}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colors.clr_1, fontSize: 22, fontWeight: 'bold', letterSpacing: 5 }}>CONTROLE REMOTO</Text>
                <Text style={{ color: colors.clr_2, fontSize: 20, fontWeight: 'bold', letterSpacing: 5 }}>AR-CONDICIONADO</Text>
            </View>

            <TouchableOpacity style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                backgroundColor: colors.clr_11,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 5,
                borderColor: colors.clr_1,
                marginTop: 50
            }}>
                <Feather name='power' color={colors.clr_2} size={100} />
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 25,
            }}>
                <TouchableOpacity style={{
                    borderRadius: 10,
                    backgroundColor: colors.clr_11,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Feather name='plus' color={colors.clr_2} size={50} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderRadius: 10,
                    backgroundColor: colors.clr_11,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <Feather name='minus' color={colors.clr_2} size={50} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}