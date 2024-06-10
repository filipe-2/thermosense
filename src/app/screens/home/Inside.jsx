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
} from '../../styles/global/customStyles';

import {
    home,
    utils,
} from '../../styles/home';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

// Utils
import {
    // Variables

    // Functions
    calculateHeatIndex,
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
            source={require('../../../../assets/bg.jpg')}
            style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
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
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                    <View style={{
                        paddingHorizontal: 10,
                        borderBottomWidth: 2,
                        borderColor: colors.clr_1,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: colors.clr_2,
                            letterSpacing: 8,
                            marginTop: 10,
                            fontWeight: 'bold',
                        }}>AMBIENTE</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        gap: 35,
                        marginTop: 25,
                    }}>

                        <Text style={{
                            fontSize: 100,
                            color: colors.clr_2,
                            fontWeight: '100',
                            textAlign: 'center',
                        }}>
                            {isNaN(temperature) ?
                                temperature :
                                Math.round(temperature)}°
                        </Text>

                        <Image
                            style={{
                                width: 33.5,
                                height: 85.8333,
                            }}
                            source={handleTempConditionIcon(temperature)}
                        />
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: 20,
                        flexDirection: 'row',
                        marginBottom: 35,
                        marginTop: 15
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            gap: 8,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon
                                style={home.labelIcon}
                                name='thermometer'
                                size={utils.labelTextSize}
                                color={colors.clr_1}
                            />
                            <Text style={{
                                fontSize: 20,
                                color: colors.clr_2,
                                fontWeight: '300',
                                textAlign: 'center',
                            }}>
                                {isNaN(temperature) ?
                                    temperature :
                                    Math.round(temperature * 1.8 + 32)}°F
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            gap: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Icon
                                style={home.labelIcon}
                                name='tint'
                                size={utils.labelTextSize}
                                color={colors.clr_1}
                            />
                            <Text style={{
                                fontSize: 20,
                                color: colors.clr_2,
                                fontWeight: '300',
                                textAlign: 'center',
                            }}>{humidity}%</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    marginBottom: 15,
                    paddingHorizontal: 10,
                    borderTopWidth: 2,
                    borderColor: colors.clr_1,
                }}>
                    <Text style={{ fontSize: 18, color: colors.clr_2 }}>
                        Sensação: {calculateHeatIndex(temperature, humidity)}°C
                        ({calculateHeatIndex(temperature, humidity) * 1.8 + 32}°F)
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
// ------------------------------------------------