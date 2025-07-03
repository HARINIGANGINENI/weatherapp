import React from 'react';

const ForecastIcon = ({ type }) => {
  const iconComponents = {
    sunny: <div className="icon-sun"></div>,
    cloudy: <div className="icon-cloud"></div>,
    rainy: <div className="icon-rain"></div>
  };

  return (
    <div className="forecast-icon">
      {iconComponents[type] || iconComponents.sunny}
    </div>
  );
};

const ForecastDay = ({ day, index }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div 
      className="forecast-day"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${1.1 + index * 0.1}s`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="day-name">{day.day}</div>
      <ForecastIcon type={day.icon} />
      <div className="forecast-temp">{day.temperature} °C</div>
      <div className="forecast-stats">
        <div className="forecast-stat">
          <svg className="mini-icon" viewBox="0 0 24 24">
            <path d="M12 2l1.09 3.26L16 5.18l-3.26 1.09L12 9.82l-1.09-3.26L8 5.18l3.26-1.09L12 2z"/>
          </svg>
          {day.humidity} %
        </div>
        <div className="forecast-stat">
          <svg className="mini-icon" viewBox="0 0 24 24">
            <path d="M4 10v2h2v-2H4zm2.5 6v2h2v-2h-2zm6-12v2h2V4h-2zm7.5 6v2h2v-2h-2z"/>
          </svg>
          {day.windSpeed} km/h
        </div>
      </div>
    </div>
  );
};

export default ForecastDay;