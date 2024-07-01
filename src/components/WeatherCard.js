import React from 'react';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const weatherData = useSelector(state => state.weather.weatherData);
  const { current, location } = weatherData || {}
  console.log(weatherData)

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather-card">
      <h2>{location.name}, {location.country}</h2>
      <div className='temp-detail'>
        <div className='temp-icon'>
          <img src={current.condition.icon} alt='weather' />
        </div>
        <div className='temp'>
          <p>{current.temp_c}°C</p>
        </div>
      </div>
      <p className='para'> {current.condition.text}</p>
      <p className='para_update'>Updated as of {current.last_updated}</p>
      <div className='weather-detail'>
        <span className='weather-detail-points'><b>Feels Like : </b> {current.feelslike_c}</span>
        <span className='weather-detail-points'><b>Wind Chill : </b> {current.windchill_c}</span>
        <span className='weather-detail-points'><b>Heat Index : </b> {current.heatindex_c}</span>
      </div>
      <div className='weather-detail'>
        <span className='weather-detail-points'><b>Wind : </b> {current.wind_kph} km/h</span>
        <span className='weather-detail-points'><b>Humidity : </b> {current.humidity}</span>
        <span className='weather-detail-points'><b>UV : </b> {current.uv}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
