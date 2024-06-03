import axios from 'axios';
const APIKey = 'ca7af507ddc44d81b52183431241905';

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

export const fetchWeatherData = () => APICall(weatherDataEndpoint);