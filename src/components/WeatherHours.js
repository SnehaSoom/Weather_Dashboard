import React from "react";
import { useSelector } from "react-redux";

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const WeatherHours = ({ date }) => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const { forecast } = weatherData || {};
  const { forecastday } = forecast || [];

  if (!weatherData) {
    return null;
  }

  const selectedDayForecast = forecastday.find((day) => day.date === date);
  const hourlyForecasts = selectedDayForecast?.hour || [];

  return (
    <>
      <div className="hourly-title">
        <h3>Hourly</h3>
      </div>
      <div className="WeatherHours-container">
        {hourlyForecasts.map((hourData, index) => (
          <div key={index} className="WeatherHours-card">
            <h4>{formatTime(hourData.time)}</h4>
            <div className="temp-icon">
              <img
                src={hourData.condition.icon}
                alt={hourData.condition.text}
              />
            </div>
            <div className="temp-d">
              <span>{hourData.temp_c}°C</span>
            </div>
            <div className="temp-des">
              <p>{hourData.condition.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherHours;
