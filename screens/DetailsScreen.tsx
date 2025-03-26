import React from 'react';
import { View, Text, Image } from 'react-native';

const DetailScreen = ({ route }) => {
  const { forecast } = route.params;

  return (
    <View>
      <Text>Date: {forecast.date}</Text>
      <Text>High: {forecast.day.maxtemp_c}°C</Text>
      <Text>Low: {forecast.day.mintemp_c}°C</Text>
      <Text>Condition: {forecast.day.condition.text}</Text>
      <Image
        source={{ uri: `https:${forecast.day.condition.icon}` }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default DetailScreen;
