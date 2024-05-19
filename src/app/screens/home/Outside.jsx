import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { db, ref, onValue } from '../../services/firebase';
import { LinearGradient } from 'expo-linear-gradient';

// Styles
import { colors, darkStyles, lightStyles } from '../../styles/global/customStyles';
import { boilerplate } from '../../styles/global/boilerplate';
import { home, utils } from '../../styles/home';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { fetchWeatherData } from '../../services/weatherAPI';

export default function Outside({ navigation }) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    // States
    const [temperature, setTemperature] = useState(29);
    const [humidity, setHumidity] = useState(56);
    const [windSpeed, setWindSpeed] = useState(25);
    const [feelsLike, setFeelsLike] = useState(31);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const weatherData = await fetchWeatherData();
            setWeatherData(weatherData);
        };

        fetchData();
    }, []);

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
                <View style={{
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderBottomWidth: 2,
                    borderColor: colors.clr_1
                }}>
                    <Text style={{ fontSize: 30, color: colors.clr_2 }}>{weatherData?.location.name}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    marginVertical: 30
                }}>
                    <View>
                        <Text style={{
                            fontSize: 120,
                            color: colors.clr_2,
                            fontWeight: '100',
                            textAlign: 'center',
                        }}>{isNaN(weatherData?.current.temp_c) ? '...' : Math.round(weatherData?.current.temp_c)}°</Text>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: 20
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            gap: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon style={home.labelIcon} name='thermometer' size={utils.labelTextSize} color={colors.clr_1} />
                            <Text style={{
                                fontSize: 20,
                                color: colors.clr_2,
                                fontWeight: '300',
                                textAlign: 'center',
                            }}>{isNaN(weatherData?.current.temp_c) ? '...' : Math.round(weatherData?.current.temp_c * 1.8 + 32)}°F</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            gap: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesome5 style={home.labelIcon} name='tint' size={utils.labelTextSize} color={colors.clr_1} />
                            <Text style={{
                                fontSize: 20,
                                color: colors.clr_2,
                                fontWeight: '300',
                                textAlign: 'center',
                            }}>{weatherData?.current.humidity}%</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            gap: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Feather style={home.labelIcon} name='wind' size={utils.labelTextSize} color={colors.clr_1} />
                            <Text style={{
                                fontSize: 20,
                                color: colors.clr_2,
                                fontWeight: '300',
                                textAlign: 'center',
                            }}>{isNaN(weatherData?.current.wind_kph) ? '...' : weatherData?.current.wind_kph} km</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 15, paddingHorizontal: 10, borderTopWidth: 2, borderColor: colors.clr_1 }}>
                    <Text style={{ fontSize: 18, color: colors.clr_2 }}>Sensação térmica: {weatherData?.current.feelslike_c}°C </Text>
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('Inside')}
                    style={{
                        width: '50%',
                        borderRightWidth: 2,
                        borderRightColor: colors.clr_1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                    }}
                >
                    <FontAwesome5 name='home' size={25} color={colors.clr_1} />
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: colors.clr_2
                    }}>Casa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: colors.clr_11,
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                    }}>
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