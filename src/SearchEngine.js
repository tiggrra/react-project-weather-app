import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";

import "./SearchEngine.css";

export default function SearchEngine() {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
    let iconId = response.data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
        setWeatherData({
            icon: iconUrl,
            date: "Saturday, 10:15",
            temperature: response.data.main.temp,
            condition: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            ready: true
    })
    }

    if (weatherData.ready) {
        return (
            <div className="SearchEngine">
                <div className="search-form">
                    <form className="search-input">
                        <input type="search" placeholder="Enter a city..." size="50" />
                        <input type="submit" value="Search" />
                    </form>
                    <button type="button" className="btn btn-secondary btn-sm">
                        Current location
                    </button>
                </div>
                <div>
                    <Weather
                        city="Vienna"
                        date={weatherData.date}
                        temperature={Math.round(weatherData.temperature)}
                        condition={weatherData.condition}
                        humidity={weatherData.humidity}
                        wind={Math.round(weatherData.wind * 3.6)}
                        icon={weatherData.icon}
                    />
                </div>
            </div>
        );
    } else {
        const apiKey = "01bc9da346c1591ec92736f4f11269b6";
        let city = "Vienna";
        let apiUnit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnit}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }
}