# Weather App

This is a simple weather application built using React Native and Expo. It allows users to search for the current weather in a specific city and provides a 3-day weather forecast. The app fetches weather data from the [WeatherAPI](https://www.weatherapi.com/) and displays relevant information such as temperature, weather conditions (sunny, rainy, etc.), and weather icons.

## Features

- **Search functionality**: Users can search for weather information by entering a city name.
- **Current weather details**: The app displays the current weather, including temperature, conditions, and an icon.
- **3-day weather forecast**: Shows a 3-day forecast with daily temperature highs and lows.
- **Weather details screen**: Provides a detailed view of the weather forecast when a user taps on a forecast card.
- **Error handling**: Handles invalid city names and network issues gracefully.
- **Redux**: Uses Redux for state management, with Redux Thunk for asynchronous actions.

## Tech Stack

- **React Native**: A framework for building native mobile apps using React.
- **Expo**: A set of tools to make React Native development easier and faster.
- **Redux**: A state management library.
- **Redux Thunk**: Middleware for handling asynchronous actions in Redux.
- **React Navigation**: Navigation library for React Native apps.
- **WeatherAPI**: Public API to fetch weather data.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version): [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** (Node package managers): npm comes bundled with Node.js
- **Expo CLI**: [Install Expo CLI](https://docs.expo.dev/get-started/installation/)
- **React Native Environment**: If you're using a physical device or simulator, ensure that the required development environments for Android or iOS are properly set up.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gdharmeet/weather-app.git
   cd weather-app
