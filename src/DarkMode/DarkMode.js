import {
  AcUnitRounded,
  AirplanemodeActiveRounded,
  RemoveRedEyeRounded,
  WavesRounded,
} from "@material-ui/icons";
import React from "react";
import "./DarkMode.css";

const DarkMode = ({ query, setQuery, search, weather }) => {
  const date = new Date();

  var month = date.getMonth();
  var year = date.getFullYear();

  return (
    <div className="app-dark">
      <div className="navbar-dark">
        <div className="date-day-dark">
          <div className="Month-Year-dark">
            <div className="month-dark">
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
            <div className="year-dark">{year}</div>
          </div>
        </div>
        <div className="searchbar-dark">
          <input
            type="text"
            className="search-dark"
            placeholder="Search For Desired Location"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
      </div>
      {weather.main && (
        <div className="data-hero-div-dark">
          <div className="datas-dark">
            <div className="visibility-data-dark">
              <div className="data-title-dark">
                <RemoveRedEyeRounded />
                &nbsp; Visibility
              </div>
              {weather.visibility / 1000}KM
            </div>
            <div className="wind-data-dark">
              <div className="data-title-dark">
                <AirplanemodeActiveRounded />
                &nbsp; Wind
              </div>
              {Math.max(weather.wind.speed)} Km/h
            </div>
            <div className="search-data-dark">
              <div className="search-area-name-dark">{weather.name}</div>
              <div className="search-area-temp-dark">
                {Math.round(weather.main.temp)}&deg;C
              </div>
              <div className="search-area-clouds-dark">
                Humidity &nbsp;
                {weather.main.humidity} %
              </div>
            </div>
            <div className="pressure-data-dark">
              <div className="data-title-dark">
                <WavesRounded /> Pressure
              </div>
              {weather.main.pressure} hPa
            </div>
            <div className="visibility-data-dark">
              <div className="data-title-dark">
                <RemoveRedEyeRounded />
                &nbsp; Type
              </div>
              {weather.weather[0].main}
            </div>
          </div>
        </div>
      )}
      {weather.main && (
        <div className="main-body-dark">
          <div className="temperature">
            <AcUnitRounded />
            Temperature: &nbsp; {Math.round(weather.main.temp)}&deg;C
          </div>
          <div className="wind">
            <AirplanemodeActiveRounded />
            Wind Speed: &nbsp; {Math.round(weather.wind.speed)}Kmph
          </div>
          <div className="visibility">
            <RemoveRedEyeRounded />
            Visibility: &nbsp; {Math.round(weather.visibility/1000)}KM
          </div>
          <div className="pressure">
            <WavesRounded />
            Pressure: &nbsp; {Math.round(weather.main.pressure)}hPa
          </div>
          <div className="type">
            <AcUnitRounded />
            Type: &nbsp; {weather.weather[0].main}
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkMode;