import axios from 'axios';

const API_KEY = 'ac92964eb94540cea9934440252603'; 
const BASE_URL = 'http://api.weatherapi.com/v1';

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchForecast = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
