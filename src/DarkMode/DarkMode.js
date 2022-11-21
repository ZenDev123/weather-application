import { AirplanemodeActiveRounded, WavesRounded } from "@material-ui/icons";
import React from "react";
import './DarkMode.css'

const DarkMode = ({ query, setQuery, search, weather }) => {
  const date = new Date();

  var month = date.getMonth();
  var year = date.getFullYear();

  return (
    <div className="app">
      <div className="navbar">
        <div className="date-day">
          <div className="Month-Year">
            <div className="month">
              {month === 0 ? "January" : ""}
              {month === 1 ? "February" : ""}
              {month === 2 ? "March" : ""}
              {month === 3 ? "April" : ""}
              {month === 4 ? "May" : ""}
              {month === 5 ? "June" : ""}
              {month === 6 ? "July" : ""}
              {month === 7 ? "August" : ""}
              {month === 8 ? "September" : ""}
              {month === 9 ? "October" : ""}
              {month === 10 ? "November" : ""}
              {month === 11 ? "December" : ""}
            </div>
            <div className="year">{year}</div>
          </div>
        </div>
        <div className="searchbar">
          <input
            type="text"
            className="search"
            placeholder="Search For Desired Location"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
      </div>
      {weather.main && (
        <div className="data-hero-div">
          <div className="datas">
            <div className="wind-data">
              <div className="data-title">
                <AirplanemodeActiveRounded /> Wind
              </div>
              {Math.max(weather.wind.speed)} Km/h
            </div>
            <div className="search-data">
              <div className="search-area-name">{weather.name}</div>
              <div className="search-area-temp">
                {Math.round(weather.main.temp)}&deg;C
              </div>
              <div className="search-area-clouds">
                Humidity &nbsp;
                {weather.main.humidity} %
              </div>
            </div>
            <div className="pressure-data">
              <div className="data-title">
                <WavesRounded /> Pressure
              </div>
              {weather.main.pressure} hPa
            </div>
          </div>
        </div>
      )}
      {weather.main && (
        <div className="main-body">
          <div className="wind-data">
            <div className="wind-speed">
              Wind Speed: {Math.round(weather.wind.speed)}km/h
            </div>
            <div className="wind-direction">
              {weather.wind.deg > 0 && weather.wind.deg < 90
                ? "Wind Blowing From South West"
                : ""}
              {weather.wind.deg > 91 && weather.wind.deg < 180
                ? "Wind Blowing From North West"
                : ""}
              {weather.wind.deg > 181 && weather.wind.deg < 270
                ? "Wind Blowing From North East"
                : ""}
              {weather.wind.deg > 271 && weather.wind.deg < 360
                ? "Wind Blowing From South East"
                : ""}
            </div>
          </div>
          <div className="pressure-data">
            <div className="pressure">
              Preasure: &nbsp; {weather.main.pressure}
            </div>
            <div className="pressure-sea-level">
              Pressure At Sealevel: &nbsp; {weather.main.sea_level}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkMode;

{
  /* <div className="main-container">
  <input
    type="text"
    className="search"
    placeholder="Search..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyPress={search}
  />
  {weather.main && (
    <div className="city">
      <h2 className="city-name">
        <span>{weather.name}</span>
        <sup>{weather.sys.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(weather.main.temp)}
        <sup>&deg;C</sup>
      </div>
      <div className="info">
        <img
          className="city-icon"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>{weather.weather[0].description}</p>
      </div>
    </div>
  )}
  </div> */
}

{
}
