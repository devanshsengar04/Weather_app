import React, { useState } from 'react';
import ICON from '../../Assets/icon.png';
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-theme', !darkMode);
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="logo-container">
        <img src={ICON} alt="Weather Icon" className="weather-icon" />
        <div className="text-container">
          <h1 className="title">🌤️ Devansh's Weather Map App</h1>
          <p className="subtitle">Your personalized weather forecast, visualized on a map!</p>
        </div>
      </div>
      <button className="dark-mode-toggle" onClick={toggleTheme}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
