import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";

import "./SearchEngine.css";

export default function SearchEngine() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    const [condition, setCondition] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [icon, setIcon] = useState(null);

    function handleResponse(response) {
    let iconId = response.data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    setIcon(iconUrl);
    setTemperature(response.data.main.temp);
    setCondition(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setReady(true);
    }

    if (ready) {
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
                        temperature={Math.round(temperature)}
                        condition={condition}
                        humidity={humidity}
                        wind={Math.round(wind * 3.6)}
                        icon={icon}
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