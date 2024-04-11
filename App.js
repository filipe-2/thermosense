import { Text, View, ImageBackground } from 'react-native';
import { styles } from './styles/home';
import { useEffect, useState } from 'react';
import { db, ref, onValue } from './firebase';

export default function App() {
  const [temperature, setTemperature] = useState(-15);
  const [humidity, setHumidity] = useState(69);

  useEffect(() => {
    const data = ref(db);

    onValue(data, snapshot => {
      setTemperature(snapshot.val().temperature);
      setHumidity(snapshot.val().humidity);
    });
  }, [db]);

  return (
    <ImageBackground style={styles.wrapper} source={require('./assets/bg.jpg')}>
      <View style={styles.temperatureWrapper}>
        <Text style={styles.text}>TEMPERATURE</Text>
        <Text style={[styles.text, styles.temperatureText]}>{temperature}°C</Text>
      </View>

      <View style={styles.temperatureWrapper}>
        <Text style={styles.text}>HUMIDITY</Text>
        <Text style={[styles.text, styles.temperatureText]}>{humidity}%</Text>
      </View>
    </ImageBackground>
  );
}