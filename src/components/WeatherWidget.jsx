import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import ForecastSection from './ForecastSection';
import '../styles/WeatherWidget.css';
import WeatherStats from './WeatherStats';

const WeatherWidget = ({ weatherData }) => {
  return (
    <Container fluid className="weather-app">
      <div className="weather-widget">
        <div className="world-map"></div>
        <div className="content">
          <Header location={weatherData.location} />
          <CurrentWeather current={weatherData.current} />
          <WeatherStats stats={weatherData.stats} />
          <ForecastSection forecast={weatherData.forecast} />
        </div>
      </div>
    </Container>
  );
};

export default WeatherWidget;