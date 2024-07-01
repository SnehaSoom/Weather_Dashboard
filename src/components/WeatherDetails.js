import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDetails = () => {
  const weatherData = useSelector(state => state.weather.weatherData);

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather-details">
      <h3>Details for {weatherData.city}</h3>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} m/s</p>
      {/* Add more detailed weather information as needed */}
    </div>
  );
};

export default WeatherDetails;
