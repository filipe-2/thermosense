import { Text, View, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { db, ref, onValue } from '../services/firebaseDB';

// Styles
import { colors, darkStyles, lightStyles } from '../styles/global/customStyles';
import { boilerplate } from '../styles/global/boilerplate';
import { home, utils } from '../styles/home';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
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
        <ImageBackground style={[boilerplate.wrapper, home.wrapper]} source={require('../../assets/bg.jpg')}>
            <View style={home.labelsWrapper}>
                <View style={home.labelWrapper}>
                    <Text style={theme.text.secondary}>TEMPERATURA</Text>
                    <View style={home.labelInfoWrapper}>
                        <Icon style={home.labelIcon} name='thermometer' size={utils.labelTextSize} color={colors.clr_1} />
                        <Text style={[theme.text.secondary, home.labelText]}>{temperature}°C</Text>
                    </View>
                </View>

                <View style={home.labelWrapper}>
                    <Text style={theme.text.secondary}>HUMIDIDADE</Text>
                    <View style={home.labelInfoWrapper}>
                        <Icon style={home.labelIcon} name='tint' size={utils.labelTextSize} color={colors.clr_1} />
                        <Text style={[theme.text.secondary, home.labelText]}>{humidity}%</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}