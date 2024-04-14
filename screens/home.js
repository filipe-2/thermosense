import { Text, View, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { db, ref, onValue } from '../firebaseDB';

// Styles
import { globalStyles } from '../styles/global';
import { homeStyles } from '../styles/home';

export default function Home() {
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);

    useEffect(() => {
        const data = ref(db);

        onValue(data, snapshot => {
            setTemperature(snapshot.val().temperature);
            setHumidity(snapshot.val().humidity);
        });
    }, [db]);

    return (
        <ImageBackground style={[globalStyles.wrapper, homeStyles.wrapper]} source={require('../assets/bg.jpg')}>
            <View style={homeStyles.temperatureWrapper}>
                <Text style={globalStyles.text}>TEMPERATURA</Text>
                <Text style={[globalStyles.text, homeStyles.temperatureText]}>{temperature}°C</Text>
            </View>

            <View style={homeStyles.temperatureWrapper}>
                <Text style={globalStyles.text}>HUMIDADE</Text>
                <Text style={[globalStyles.text, homeStyles.temperatureText]}>{humidity}%</Text>
            </View>
        </ImageBackground>
    );
}