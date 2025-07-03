import React from 'react';
import ForecastDay from './ForecastDay';
import '../styles/Forecast.css';

const ForecastSection = ({ forecast }) => {
  return (
    <div className="forecast">
      <div className="forecast-days">
        {forecast.map((day, index) => (
          <ForecastDay 
            key={day.day} 
            day={day} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;