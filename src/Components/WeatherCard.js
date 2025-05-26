import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.name || !weather.main || !weather.weather || !weather.wind) {
    return (
      <div className="weather-card">
        <p>Loading weather data...</p>
      </div>
    );
  }

  const { name, main, weather: weatherInfo, wind } = weather;
  const { temp, humidity } = main;
  const { main: condition, description } = weatherInfo[0];
  const { speed } = wind;

  return (
    <div className="weather-card">
      <h2 className="city-name">{name}</h2>
      <div className="weather-info">
        <div className="weather-details">
          <p className="temp">🌡️ Temperature: <strong>{Math.round(temp)}°C</strong></p>
          <p className="desc">🌥️ Condition: <strong>{condition}</strong></p>
          <p className="desc">📝 Description: {description}</p>
          <p className="humidity">💧 Humidity: {humidity}%</p>
          <p className="wind">🌬️ Wind Speed: {speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
