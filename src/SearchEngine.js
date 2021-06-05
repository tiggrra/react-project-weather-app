import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";

import "./SearchEngine.css";

export default function SearchEngine(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            condition: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed * 3.6),
            ready: true
        })
    }

    function search() {
        const apiKey = "01bc9da346c1591ec92736f4f11269b6";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="SearchEngine">
                <div className="search-form">
                    <form className="search-input" onSubmit={handleSubmit}>
                        <input
                            type="search"
                            placeholder="Enter a city..."
                            size="50"
                            onChange={updateCity}
                        />
                        <input
                            type="submit"
                            value="Search"
                        />
                    </form>
                </div>
                <div>
                    <Weather
                        data = {weatherData}
                    />
                </div>
            </div>
        );
    } else {
        search();
        return "Loading..."
    }
}