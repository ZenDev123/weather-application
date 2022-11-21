import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";
import LightMode from "./Light_Mode/LightMode";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  console.log(weather);

  return (
    <div className="weather">
      <LightMode
        query={query}
        setQuery={setQuery}
        search={search}
        weather={weather}
      />
    </div>
  );
};

export default App;
