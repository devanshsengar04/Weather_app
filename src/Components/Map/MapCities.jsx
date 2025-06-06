import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import FetchDataCity from "../FetchData/FetchDataCity";
import "./MapCities.css";

const ChangeMapView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const MapCities = ({ onSelectWeather }) => {
  const [cityName, setCity] = useState("Delhi");
  const [useCity, setuseCity] = useState("Delhi");
  const [center, setCenter] = useState([28.6667, 77.2167]);
  const [zoom, setZoom] = useState(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(useCity);
  };

  const { cityData, error } = FetchDataCity(cityName);

  useEffect(() => {
    if (cityData?.coord) {
      setCenter([cityData.coord.lat, cityData.coord.lon]);
      setZoom(10);
      onSelectWeather(cityData);
    }
  }, [cityData, onSelectWeather]);

  const myIcon = L.icon({
    iconUrl: require("../../Assets/location.png"),
    iconSize: 30,
  });

  return (
    <section className="body-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={useCity}
          placeholder="enter your city"
          onChange={(event) => setuseCity(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MapContainer
        id="map"
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
        <ChangeMapView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={myIcon}>
          {cityData == null ? (
            <Popup>Fetching data or please select any city</Popup>
          ) : (
            <Popup>
              <p>{cityData?.name}</p>
              <div className="cloud-deiscription">
                <img
                  src={`https://openweathermap.org/img/wn/${cityData?.weather[0]?.icon}.png`}
                  alt="description"
                />
                <span>{cityData?.weather[0]?.description}</span>
              </div>
              <p>Temp: {cityData?.main ? `${cityData?.main?.temp}°C` : ""}</p>
              <p>
                Humidity: {cityData?.main ? `${cityData?.main?.humidity}%` : ""}
              </p>
              <p>
                Wind Speed: {cityData?.wind ? `${cityData?.wind?.speed} m/s` : ""}
              </p>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapCities;
