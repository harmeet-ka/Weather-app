import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface WeatherCardProps {
  temperature: number;
  condition: string;
  icon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, condition, icon }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Current Weather</Text>
      <View style={styles.weatherContainer}>
        <Image
          source={{ uri: `https:${icon}` }}
          style={styles.weatherIcon}
        />
        <View>
          <Text style={styles.temperature}>{temperature}°C</Text>
          <Text style={styles.condition}>{condition}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  temperature: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 16,
    color: '#555',
  },
});

export default WeatherCard;
