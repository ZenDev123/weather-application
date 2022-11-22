import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";
import DarkMode from "./DarkMode/DarkMode";
import LightMode from "./Light_Mode/LightMode";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
    }
  };

  const date = new Date();

  const hours = date.getHours();

  console.log(weather);

  return (
    <div className="weather">
      {hours > 6 && hours < 18 ? (
        <LightMode
          query={query}
          setQuery={setQuery}
          search={search}
          weather={weather}
        />
      ) : (
        <DarkMode
          query={query}
          setQuery={setQuery}
          search={search}
          weather={weather}
        />
      )}
    </div>
  );
};

export default App;
