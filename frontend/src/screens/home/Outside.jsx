// ------------------- Imports --------------------
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    useEffect,
    useState,
} from 'react';

import {
    db,
    ref,
    onValue,
} from '../../services/firebase';

import { LinearGradient } from 'expo-linear-gradient';
import { fetchWeatherData } from '../../services/weatherAPI';

// Styles
import {
    colors,
    darkStyles,
    lightStyles,
} from '../../styles/global/custom';

import { home } from '../../styles/home/home';
import { outside } from '../../styles/home/outside';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Utils
import {
    handleWeatherConditionIcon,
    handleWeatherConditionMessage,
    celsiusToFahrenheit,
} from './utils';
// ------------------------------------------------


// -------------- Outside component ---------------
export default function Outside({ navigation }) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    // States
    const [temperature, setTemperature] = useState(29);
    const [humidity, setHumidity] = useState(56);
    const [windSpeed, setWindSpeed] = useState(25);
    const [feelsLike, setFeelsLike] = useState(31);
    const [weatherData, setWeatherData] = useState();
    const [location, setLocation] = useState('Fortaleza');

    useEffect(() => {
        const fetchData = async () => {
            const weatherData = await fetchWeatherData(location);
            setWeatherData(weatherData);
        };

        fetchData();
    }, []);

    return (
        <ImageBackground
            source={require('../../../assets/imgs/bg.jpg')}
            style={home.wrapper}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.clr_11, colors.clr_14]}
                style={home.gradient}
            >
                <View style={home.titleWrapper}>
                    <Text style={home.title}>{weatherData?.location.name.toUpperCase()}</Text>
                </View>

                <View style={outside.contentWrapper}>
                    <View style={outside.mainContentWrapper}>
                        <Text style={home.temperatureText}>
                            {isNaN(weatherData?.current.temp_c)
                                ? '...'
                                : Math.round(weatherData?.current.temp_c)
                            }°
                        </Text>

                        <View style={outside.weatherConditionInfoWrapper}>
                            <Image
                                style={outside.weatherConditionImage}
                                source={handleWeatherConditionIcon(weatherData?.current.is_day, weatherData?.current.condition.text)}
                            />

                            <Text style={{ color: colors.clr_2 }}>
                                {handleWeatherConditionMessage(weatherData?.current.condition.text)}
                            </Text>
                        </View>
                    </View>

                    <View style={outside.additionalInfoWrapper}>
                        <View style={outside.tempFahrenheit}>
                            <Icon
                                name='thermometer'
                                size={home.labelTextSize}
                                color={colors.clr_1}
                            />
                            <Text style={home.additionalInfoText}>
                                {isNaN(weatherData?.current.temp_c)
                                    ? '...'
                                    : Math.round(celsiusToFahrenheit(weatherData?.current.temp_c))
                                }°F
                            </Text>
                        </View>

                        <View style={home.additionalInfoWrapper}>
                            <FontAwesome5
                                name='tint'
                                size={home.labelTextSize}
                                color={colors.clr_1}
                            />

                            <Text style={home.additionalInfoText}>{weatherData?.current.humidity}%</Text>
                        </View>

                        <View style={home.additionalInfoWrapper}>
                            <Feather
                                name='wind'
                                size={home.labelTextSize}
                                color={colors.clr_1}
                            />

                            <Text style={home.additionalInfoText}>
                                {isNaN(weatherData?.current.wind_kph)
                                    ? '...'
                                    : weatherData?.current.wind_kph
                                } km/h
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={home.heatIndexWrapper}>
                    <Text style={home.heatIndexText}>
                        Sensação: {Math.round(weatherData?.current.feelslike_c)}°C
                        ({Math.round(celsiusToFahrenheit(weatherData?.current.feelslike_c))}°F)
                    </Text>
                </View>
            </LinearGradient>

            <View style={home.navBtns}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Inside')}
                    style={[home.navBtn, home.navBtnOff, home.navBtnLeft]}
                >
                    <FontAwesome5
                        name='home'
                        size={25}
                        color={colors.clr_1}
                    />

                    <Text style={home.navBtnText}>Casa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[home.navBtn, home.navBtnOn, home.navBtnRight]}>
                    <FontAwesome5
                        name='city'
                        size={25}
                        color={colors.clr_1}
                    />

                    <Text style={home.navBtnText}>Cidade</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    );
}
// ------------------------------------------------