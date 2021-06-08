import React, { useState } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }
    
    if (ready) {
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col">
                    <ForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "01bc9da346c1591ec92736f4f11269b6";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return null;
    } 
}