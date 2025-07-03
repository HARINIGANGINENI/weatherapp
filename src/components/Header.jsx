import React from 'react';
import '../styles/Header.css';

const Header = ({ location }) => {
  return (
    <div className="weather-header">
      <div className="location">
        <svg className="location-icon" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <div>
          <div className="location-text">{location.state}</div>
          <div className="location-text location-subtext">{location.city}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;