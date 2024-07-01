import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WeatherHours from './WeatherHours'; // Import WeatherHours component

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
};

const WeatherDaily = () => {
    const [selectedDate, setSelectedDate] = useState(null); // State to track selected date
    const weatherData = useSelector(state => state.weather.weatherData);
    const { forecast } = weatherData || {};
    const { forecastday } = forecast || [];

    if (!weatherData) {
        return null;
    }

    const handleDateClick = (date) => {
        setSelectedDate(selectedDate === date ? null : date); // Toggle selected date
    };

    return (
        <>
            {/* <div style={{ color : 'white'}}>
                <h3>Weekly</h3>
            </div> */}
            <div className='WeatherDaily-container'>
                {forecastday.map((ele, index) => (
                    <div key={index} className={`${selectedDate === ele.date ? 'WeatherDaily-card active' : 'WeatherDaily-card nonactive'}`}>
                        <div onClick={() => handleDateClick(ele.date)} className={`day`}>
                            <div className='dayDate'>
                                <h5>{formatDate(ele.date)}</h5>
                            </div>
                            <div className='temp-icon'>
                                <img src={ele.day.condition.icon} alt={ele.day.condition.text} />
                            </div>
                            <div className='temp-d'>
                                <span className='max'>{ele.day.maxtemp_c}°C </span>
                                <span className='min'>{ele.day.mintemp_c}°C</span>
                            </div>
                            <div className='temp-des'>
                                <p>{ele.day.condition.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedDate && <WeatherHours date={selectedDate} />} {/* Render WeatherHours component when date is selected */}
        </>
    );
};

export default WeatherDaily;
