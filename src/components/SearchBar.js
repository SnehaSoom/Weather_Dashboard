import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherStart, searchWeatherStart } from '../features/weather/weatherSlice';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.weather.searchData);
  const searchLoading = useSelector((state) => state.weather.searchLoading);

  // const handleSearch = () => {
  //   dispatch(fetchWeatherStart(city));
  // };
  const handleSearch = (query) => {
    dispatch(searchWeatherStart(query));
  };

  const handleResultClick = (city) => {
    dispatch(fetchWeatherStart(city));
    setQuery(''); // Optional: Clear the query after selecting a city
  };

  return (
    <div className="search-bar">
      <div className='search-bar-input'>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            if (e.target.value.length > 0) {
              handleSearch(e.target.value);
            }
          }}
          // onChange={(e) => setCity(e.target.value)} 
          placeholder="Search City Name"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          viewBox="0 0 24 24"
          width="28"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>

      </div>
      <div className='search-list'>
        {searchLoading ? (
          <p>Loading...</p>
        ) : (
          searchResults && searchResults.length > 0 && <ul>
            {searchResults.map((result) => (
              <li key={result.id} onClick={() => handleResultClick(result.name)}>
                {result.name}, {result.region}, {result.country}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default SearchBar;
