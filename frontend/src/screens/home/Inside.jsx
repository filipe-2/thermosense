// ------------------ Imports ---------------------
import {
    useEffect,
    useState,
} from 'react';

import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    db,
    ref,
    onValue,
} from '../../services/firebase';

import { LinearGradient } from 'expo-linear-gradient';

// Styles
import {
    colors,
    darkStyles,
    lightStyles,
} from '../../styles/global/custom';

import { home } from '../../styles/home/home';
import { inside } from '../../styles/home/inside';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

// Utils
import {
    // Variables

    // Functions
    calculateHeatIndex,
    celsiusToFahrenheit,
    handleTempConditionIcon,
} from './utils';
// ------------------------------------------------


// ------------- Inside component -----------------
export default function Inside({ navigation }) {
    const isDarkMode = true; // Change based on user's configurations
    const theme = isDarkMode ? darkStyles : lightStyles;

    // States
    const [temperature, setTemperature] = useState('...');
    const [humidity, setHumidity] = useState('...');

    useEffect(() => {
        const data = ref(db);

        onValue(data, snapshot => {
            setTemperature(snapshot.val().temperature);
            setHumidity(snapshot.val().humidity);
        });
    }, [db]);

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
                <View style={home.contentWrapper}>
                    <View style={home.titleWrapper}>
                        <Text style={home.title}>AMBIENTE</Text>
                    </View>

                    <View style={inside.tempInfoWrapper}>
                        <Text style={home.temperatureText}>
                            {isNaN(temperature) ?
                                temperature :
                                Math.round(temperature)}°
                        </Text>

                        <Image
                            style={inside.tempConditionImage}
                            source={handleTempConditionIcon(temperature)}
                        />
                    </View>

                    <View style={inside.additionalInfoWrapper}>
                        <View style={inside.tempFahrenheit}>
                            <Icon
                                name='thermometer'
                                size={home.labelTextSize}
                                color={colors.clr_1}
                            />

                            <Text style={home.additionalInfoText}>
                                {isNaN(temperature)
                                    ? temperature
                                    : Math.round(celsiusToFahrenheit(temperature))
                                }°F
                            </Text>
                        </View>

                        <View style={home.additionalInfoWrapper}>
                            <Icon
                                name='tint'
                                size={home.labelTextSize}
                                color={colors.clr_1}
                            />

                            <Text style={home.additionalInfoText}>{humidity}%</Text>
                        </View>
                    </View>
                </View>

                <View style={home.heatIndexWrapper}>
                    <Text style={home.heatIndexText}>
                        Sensação: {calculateHeatIndex(temperature, humidity)}°C
                        ({celsiusToFahrenheit(calculateHeatIndex(temperature, humidity))}°F)
                    </Text>
                </View>
            </LinearGradient>

            <View style={home.navBtns}>
                <TouchableOpacity style={[home.navBtn, home.navBtnOn, home.navBtnLeft]}>
                    <FontAwesome5
                        name='home'
                        size={25}
                        color={colors.clr_1}
                    />

                    <Text style={home.navBtnText}>Casa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Outside')}
                    style={[home.navBtn, home.navBtnOff, home.navBtnRight]}
                >
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