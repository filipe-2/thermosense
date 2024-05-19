import axios from 'axios';
const APIKey = 'SET_API_KEY_HERE';

const weatherDataEndpoint = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=Fortaleza&aqi=no`;

const APICall = async endpoint => {
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

export const fetchWeatherData = params => APICall(weatherDataEndpoint);