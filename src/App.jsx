import React, { useState } from 'react';
import Header from './Components/Header/Header';
import MapCities from './Components/Map/MapCities';
import WeatherCard from './Components/WeatherCard';
import './App.css';

const App = () => {
  const [selectedWeather, setSelectedWeather] = useState({
    name: "city ",
    main: { temp: "?", humidity: "?" },
    weather: [{ main: "?", description: "?", icon: "?" }],
    wind: { speed: "?" }
  });

  return (
    <>
      <Header />
      <div className="main-content">
        <MapCities onSelectWeather={setSelectedWeather} />
        <WeatherCard weather={selectedWeather} />
      </div>
    </>
  );
};

export default App;
