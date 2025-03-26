import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather, fetchForecast } from '../../utils/weatherApi';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const data = await fetchWeather(city);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getForecast = createAsyncThunk(
  'weather/getForecast',
  async (city: string, { rejectWithValue }) => {
    try {
      const data = await fetchForecast(city);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
