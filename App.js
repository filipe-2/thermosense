import { Text, View, ImageBackground } from 'react-native';
import { styles } from './styles/home';

export default function App() {
  return (
    <ImageBackground style={styles.wrapper} source={require('./assets/bg.jpg')}>
      <View style={styles.temperatureWrapper}>
        <Text style={styles.text}>TEMPERATURE</Text>
        <Text style={[styles.text, styles.temperatureText]}>-15°C</Text>
      </View>

      <View style={styles.temperatureWrapper}>
        <Text style={styles.text}>HUMIDITY</Text>
        <Text style={[styles.text, styles.temperatureText]}>69%</Text>
      </View>
    </ImageBackground>
  );
}