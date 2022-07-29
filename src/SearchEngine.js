import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState();
  let [search, setSearch] = useState(false);
  let [weather, setWeather] = useState({});

  function showResponse(response) {
    setSearch(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3f49c533f868ff71e6ec9af59e37e163";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Go" className="btn btn-success" />
    </form>
  );

  let result = (
    <div className="container">
      <div className="results">
        <div className="row">
          <div className="col-4">
            <div className="temperature">
              {Math.round(weather.temperature)}°C
            </div>
            <div className="description">{weather.description}</div>
          </div>
          <div className="col-4">
            <div>
              <img src={weather.icon} alt={weather.description} />
            </div>
          </div>
          <div className="col-4">
            <div className="humidity">Humidity: {weather.humidity}%</div>
            <div className="wind">Wind: {Math.round(weather.wind)} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );

  if (search) {
    return (
      <div>
        {form}
        {result}
      </div>
    );
  } else {
    return form;
  }
}
