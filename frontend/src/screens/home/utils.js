// ----------- Calculates heat index --------------
function calculateHeatIndex(temperature, humidity) {
    // Constants for the formula
    const c1 = -8.78469475556;
    const c2 = 1.61139411;
    const c3 = 2.33854883889;
    const c4 = -0.14611605;
    const c5 = -0.012308094;
    const c6 = -0.0164248277778;
    const c7 = 0.002211732;
    const c8 = 0.00072546;
    const c9 = -0.000003582;

    // Calculates each term separately
    const terms = [
        c1,
        c2 * temperature,
        c3 * humidity,
        c4 * temperature * humidity,
        c5 * (temperature ** 2),
        c6 * (humidity ** 2),
        c7 * (temperature ** 2) * humidity,
        c8 * temperature * (humidity ** 2),
        c9 * (temperature ** 2) * (humidity ** 2),
    ];

    // Sums all the terms to get the heat index
    const heatIndex = terms.reduce((acc, term) => acc + term, 0);

    // Rounds the result to the nearest integer
    return Math.round(heatIndex);
}
// ------------------------------------------------


// -------- Converts Celsius to Fahrenheit --------
const celsiusToFahrenheit = (temperature) => temperature * 1.8 + 32;
// ------------------------------------------------


// --------- Renders temperature icon -------------
function handleTempConditionIcon(temperature) {
    if (temperature < 0) {
        return require('../../../assets/imgs/thermometer-0-less.png');
    } else if (temperature >= 0 && temperature < 20) {
        return require('../../../assets/imgs/thermometer-0-20.png');
    } else if (temperature >= 20 && temperature < 30) {
        return require('../../../assets/imgs/thermometer-20-29.png');
    } else if (temperature >= 30) {
        return require('../../../assets/imgs/thermometer-30-more.png');
    } else {
        return null;
    }
}
// ------------------------------------------------


// ------------ Render weather icon ---------------
function handleWeatherConditionIcon(isDay, condition) {
    if (isDay) {
        if (condition === 'Sunny') {
            return require('../../../assets/imgs/sunny.png');
        } else if (condition === 'Partly cloudy' || condition === 'Partly Cloudy') {
            return require('../../../assets/imgs/partly-cloudy.png');
        } else if (condition === 'Mist') {
            return require('../../../assets/imgs/cloudy.png');
        } else if (condition === 'Cloudy') {
            return require('../../../assets/imgs/cloudy.png');
        } else if (condition === 'Light rain' || condition === 'Light Rain') {
            return require('../../../assets/imgs/partly-rainy.png');
        } else if (condition === 'Patchy rain nearby') {
            return require('../../../assets/imgs/patchy-rain-nearby.png');
        } else {
            return null;
        }
    } else {
        if (condition === 'Partly cloudy' || condition === 'Partly Cloudy') {
            return require('../../../assets/imgs/partly-cloudy-night.png');
        } else if (condition === 'Light rain' || condition === 'Light Rain') {
            return require('../../../assets/imgs/light-rain-night.png');
        } else if (condition === 'Clear') {
            return require('../../../assets/imgs/clear-night.png');
        } else {
            return null;
        }
    }
}
// ------------------------------------------------


// ---------- Render weather message --------------
function handleWeatherConditionMessage(condition) {
    if (condition === 'Sunny') {
        return 'Ensolarado';
    } else if (condition === 'Partly cloudy' || condition === 'Partly Cloudy') {
        return 'Parc. nublado';
    } else if (condition === 'Mist') {
        return 'Nublado';
    } else if (condition === 'Cloudy') {
        return 'Nublado';
    } else if (condition === 'Clear') {
        return 'Limpo';
    } else if (condition === 'Light rain') {
        return 'Chuva leve';
    } else if (condition === 'Patchy rain nearby') {
        return 'Chuva irreg. próx.';
    } else {
        return null;
    }
}
// ------------------------------------------------


// ------------------- Export ---------------------
export {
    // Variables

    // Functions
    calculateHeatIndex,
    celsiusToFahrenheit,
    handleTempConditionIcon,
    handleWeatherConditionIcon,
    handleWeatherConditionMessage,
};
// ------------------------------------------------