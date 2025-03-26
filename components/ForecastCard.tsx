import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ForecastCardProps {
  date: string;
  high: number;
  low: number;
  condition: string;
  onPress: () => void;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ date, high, low, condition, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.weatherContainer}>
        <Text style={styles.highLowTemp}>
          High: {high}°C | Low: {low}°C
        </Text>
        <Text style={styles.condition}>{condition}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  highLowTemp: {
    fontSize: 16,
    color: '#333',
  },
  condition: {
    fontSize: 14,
    color: '#888',
  },
});

export default ForecastCard;
