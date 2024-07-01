import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import WeatherDashboard from './components/WeatherDashboard';
import './App.css'; // Add your responsive CSS styles here


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherDashboard />
       
      </div>
    </Provider>
  );
}

export default App;
