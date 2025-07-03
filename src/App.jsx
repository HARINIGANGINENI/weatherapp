import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import { weatherData } from './data/weatherData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherWidget weatherData={weatherData} />
    </div>
  );
}

export default App;