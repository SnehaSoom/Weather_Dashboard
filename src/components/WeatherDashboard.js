import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherStart } from '../features/weather/weatherSlice';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';
import WeatherDaily from './WeatherDaily';
import Loading from './Loading';

const WeatherDashboard = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.weather.loading);

  useEffect(() => {
    dispatch(fetchWeatherStart('New Delhi')); // Replace with actual API call
  }, [dispatch]);

  return (
    <div className="weather-dashboard">
      <h1 style={{color : 'white'}}>Weather Dashboard</h1>
      <SearchBar />
      <WeatherCard />
      {/* {loading ? <Loading /> : <WeatherCard />} */}
      {/* <WeatherDetails /> */}
      {/* Add more components and features as needed */}
      <WeatherDaily/>
      
    </div>
  );
};

export default WeatherDashboard;
