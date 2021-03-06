import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setReady(false);
    }, [props.coordinates]);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    function load() {
        let apiKey = "01bc9da346c1591ec92736f4f11269b6";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }
    
    if (ready) {
        return (
            <div className="Forecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        load();
        return null;
    } 
}