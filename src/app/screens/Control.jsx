import { View, Text, TouchableOpacity } from "react-native";

// Styles
import { boilerplate } from "../styles/global/boilerplate";
import { colors, darkStyles, lightStyles } from '../styles/global/customStyles';

// Icons
import { Feather } from '@expo/vector-icons';

export default function Control() {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[theme.background, boilerplate.wrapper, { gap: 25 }]}>
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
                    <Feather name='chevron-up' color={colors.clr_2} size={50} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderRadius: 10,
                    backgroundColor: colors.clr_11,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                }}>
                    <Feather name='chevron-down' color={colors.clr_2} size={50} />
                </TouchableOpacity>
            </View>
        </View>
    );
}