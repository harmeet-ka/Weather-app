import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather, getForecast } from '../store/actions/weatherActions';
import { RootState } from '../store/store';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { current, forecast, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(getWeather(city));
      dispatch(getForecast(city));
    }
  };

  return (
    <View style={styles.container}>
      {/* SearchBar Component */}
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {current && (
        <WeatherCard
          temperature={current?.current?.temp_c}
          condition={current?.current?.condition?.text}
          icon={current?.current?.condition?.icon}
        />
      )}

      {forecast && (
        <FlatList
          data={forecast?.forecast?.forecastday}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <ForecastCard
              date={item.date}
              high={item.day.maxtemp_c}
              low={item.day.mintemp_c}
              condition={item.day.condition.text}
              onPress={() =>
                navigation.navigate('Detail', {
                  forecast: item,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default HomeScreen;
