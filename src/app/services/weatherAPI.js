// ------------------ Imports ---------------------
import axios from 'axios';
// ------------------------------------------------


// -------------- Weather API Key -----------------
const APIKey = 'ca7af507ddc44d81b52183431241905';
// ------------------------------------------------


// ------ Fetch weather data from endpoint --------
const fetchWeatherData = async (location) => {
    const endpoint = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${location}&aqi=no`;

    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};
// ------------------------------------------------


// ------------------ Exports ---------------------
export {
    // Variables

    // Functions
    fetchWeatherData,
};
// ------------------------------------------------