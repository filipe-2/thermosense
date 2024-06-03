import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { db, ref, onValue } from '../../services/firebase';
import { LinearGradient } from 'expo-linear-gradient';

// Styles
import { colors, darkStyles, lightStyles } from '../../styles/global/customStyles';
import { home, utils } from '../../styles/home';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Inside({ navigation }) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    // States
    const [temperature, setTemperature] = useState('...');
    const [humidity, setHumidity] = useState('...');

    function calculateHeatIndex(temperature, humidity) {
        return (
            Math.round(-8.78469475556 +
                (1.61139411 * temperature) +
                (2.33854883889 * humidity) +
                (-0.14611605 * temperature * humidity) +
                (-0.012308094 * (temperature ** 2)) +
                (-0.0164248277778 * (humidity ** 2)) +
                (0.002211732 * (temperature ** 2) * humidity) +
                (0.00072546 * temperature * (humidity ** 2)) +
                (-0.000003582 * (temperature ** 2) * (humidity ** 2)))
        );
    }

    useEffect(() => {
        const data = ref(db);

        onValue(data, snapshot => {
            setTemperature(snapshot.val().temperature);
            setHumidity(snapshot.val().humidity);
        });
    }, [db]);

    return (
        <ImageBackground
            source={require('../../../../assets/bg.jpg')}
            style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.clr_11, 'transparent']}
                style={{
                    width: '90%',
                    alignItems: 'center',
                    borderRadius: 25,
                    borderLeftWidth: 5,
                    borderColor: colors.clr_1,
                    marginTop: 100,
                }}
            >
                <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View style={{
                        paddingHorizontal: 10,
                        borderBottomWidth: 2,
                        borderColor: colors.clr_1
                    }}>
                        <Text style={{ fontSize: 20, color: colors.clr_2, letterSpacing: 8, marginTop: 10, fontWeight: 'bold' }}>AMBIENTE</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 35, marginTop: 25 }}>
                        <Text style={{
                            fontSize: 100,
                            color: colors.clr_2,
                            fontWeight: '100',
                            textAlign: 'center',
                        }}>
                            {isNaN(temperature) ? temperature : Math.round(temperature)}°
                        </Text>

                        <Image
                            style={{ width: 33.5, height: 85.8333 }}
                            source={
                                temperature < 0 ? require('../../../../assets/thermometer-0-less.png') :
                                    temperature >= 0 && temperature < 20 ? require('../../../../assets/thermometer-0-20.png') :
                                        temperature >= 20 && temperature < 30 ? require('../../../../assets/thermometer-20-29.png') :
                                            temperature >= 30 ? require('../../../../assets/thermometer-30-more.png') :
                                                null
                            }
                        />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'flex-start', gap: 20, flexDirection: 'row', marginBottom: 35, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={home.labelIcon} name='thermometer' size={utils.labelTextSize} color={colors.clr_1} />
                            <Text style={{
                                fontSize: 20,
                                color: colors.clr_2,
                                fontWeight: '300',
                                textAlign: 'center',
                            }}>{isNaN(temperature) ? temperature : Math.round(temperature * 1.8 + 32)}°F</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            gap: 8,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon style={home.labelIcon} name='tint' size={utils.labelTextSize} color={colors.clr_1} />
                            <Text style={{
                                fontSize: 20,
                                color: colors.clr_2,
                                fontWeight: '300',
                                textAlign: 'center',
                            }}>{humidity}%</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 15, paddingHorizontal: 10, borderTopWidth: 2, borderColor: colors.clr_1 }}>
                    <Text style={{ fontSize: 18, color: colors.clr_2 }}>
                        Sensação: {calculateHeatIndex(temperature, humidity)}°C ({calculateHeatIndex(temperature, humidity) * 1.8 + 32}°F)
                    </Text>
                </View>
            </LinearGradient>

            <View style={{
                width: '75%',
                minHeight: 75,
                backgroundColor: colors.clr_10,
                borderRadius: 25,
                borderWidth: 2,
                borderColor: colors.clr_1,
                flexDirection: 'row',
            }}>
                <TouchableOpacity style={{
                    backgroundColor: colors.clr_11,
                    width: '50%',
                    borderRightWidth: 2,
                    borderRightColor: colors.clr_1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                }}>
                    <FontAwesome5 name='home' size={25} color={colors.clr_1} />
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: colors.clr_2
                    }}>Casa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Outside')}
                    style={{
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                    }}
                >
                    <FontAwesome5 name='city' size={25} color={colors.clr_1} />
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: colors.clr_2,
                    }}>Cidade</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    );
}