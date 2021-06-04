import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "01bc9da346c1591ec92736f4f11269b6";
  let city = "Vienna";
  let apiUnit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units={apiUnit}`;
    
      return (
        <div className="Weather">
          <div className="CurrentLocation">
            <h1>{city}</h1>
            <hr />
            <h2>
              <div>15:09</div>
              <div>Mostly Sunny</div>
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-2 current-temp">27</div>
            <div className="col-sm-2 measure-unit">
                <a href="/">°C</a> | <a href="/">°F</a>
            </div>
            <div className="col-sm-3">
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly-sunny"/>
            </div>
            <div className="col-sm-5 weather-parameters">
                <ul>
                  <li>Precipitation: 0%</li>
                  <li>Humidity: 34%</li>
                  <li>Wind: 13 km/h</li>
                </ul>
            </div>
          </div>
        </div>
      );
}