
import React from 'react';
import '../styles/CurrentWeather.css';

const WeatherIcon = ({ type }) => {
  const handleIconClick = (e) => {
    e.currentTarget.style.animation = 'none';
    setTimeout(() => {
      e.currentTarget.style.animation = 'bounce 0.6s ease-in-out';
    }, 10);
  };

  return (
    <div className="weather-icon" onClick={handleIconClick}>
      <div className="sun"></div>
      <div className="cloud"></div>
    </div>
  );
};

const CurrentWeather = ({ current }) => {
  return (
    <div className="current-weather">
      <div className="weather-icon-container">
        <WeatherIcon type={current.icon} />
        <div className="weather-description">{current.description}</div>
      </div>
      <div className="temperature">{current.temperature} °C</div>
    </div>
  );
};

export default CurrentWeather;