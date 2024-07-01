import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API call function for weather
const fetchWeatherAPI = async (city) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6f8008ac037d4f8389a32341243006&q=${city}&days=6`);
  const data = await response.json();
  return data;
};

// Mock API call function for search
const searchWeatherAPI = async (query) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=6f8008ac037d4f8389a32341243006&q=${query}`);
  const data = await response.json();
  return data;
};

export const fetchWeatherStart = createAsyncThunk(
  'weather/fetchWeather',
  async (city, thunkAPI) => {
    try {
      const response = await fetchWeatherAPI(city);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchWeatherStart = createAsyncThunk(
  'weather/searchWeather',
  async (query, thunkAPI) => {
    try {
      const response = await searchWeatherAPI(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: null,
    searchData: null,
    loading: false,
    searchLoading: false,
    error: null,
    searchError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherStart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherStart.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherStart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchWeatherStart.pending, (state) => {
        state.searchLoading = true;
        state.searchError = null;
      })
      .addCase(searchWeatherStart.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchData = action.payload;
      })
      .addCase(searchWeatherStart.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.payload;
      });
  },
});

export default weatherSlice.reducer;

