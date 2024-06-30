// ------------------ Imports ---------------------
import axios from 'axios';
// ------------------------------------------------


// -------------- Weather API Key -----------------
const APIKey = 'ca7af507ddc44d81b52183431241905';
// ------------------------------------------------


// ------------ Weather API Endpoint --------------
const weatherDataEndpoint = (location) => `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${location}&aqi=no`;
// ------------------------------------------------


// ------------ Calls a weather API ---------------
const APICall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('Erro: ', error);
        return null;
    }
};
// ------------------------------------------------


// ------ Fetch weather data from endpoint --------
const fetchWeatherData = (location) => APICall(weatherDataEndpoint(location));
// ------------------------------------------------


// ------------------ Exports ---------------------
export {
    // Variables

    // Functions
    fetchWeatherData,
};
// ------------------------------------------------