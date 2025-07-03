import React, { useEffect, useRef } from 'react';
import '../styles/WeatherStats.css';

const WeatherStats = ({ stats }) => {
  const humidityRef = useRef(null);
  const windSpeedRef = useRef(null);

  useEffect(() => {
    const animateStats = () => {
      const statElements = [humidityRef.current, windSpeedRef.current];
      statElements.forEach(stat => {
        if (stat) {
          stat.style.transform = 'scale(1.1)';
          stat.style.color = '#ffd700';
          setTimeout(() => {
            stat.style.transform = 'scale(1)';
            stat.style.color = '#ffffff';
          }, 300);
        }
      });
    };

    const interval = setInterval(animateStats, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="weather-stats">
      <div className="stat">
        <svg className="stat-icon" viewBox="0 0 24 24">
          <path d="M12 2l1.09 3.26L16 5.18l-3.26 1.09L12 9.82l-1.09-3.26L8 5.18l3.26-1.09L12 2z"/>
        </svg>
        <span ref={humidityRef}>{stats.humidity} %</span>
      </div>
      <div className="stat">
        <svg className="stat-icon" viewBox="0 0 24 24">
          <path d="M4 10v2h2v-2H4zm2.5 6v2h2v-2h-2zm6-12v2h2V4h-2zm7.5 6v2h2v-2h-2z"/>
        </svg>
        <span ref={windSpeedRef}>{stats.windSpeed} km/h</span>
      </div>
    </div>
  );
};

export default WeatherStats;