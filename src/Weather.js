import React from "react";

import "./Weather.css";

export default function Weather(props) {
    return (
        <div className="Weather">
            <h1>{props.city}</h1>
            <hr />
            <h2>
                <div>{props.date}</div>
                <div className="text-capitalize">{props.condition}</div>
            </h2>
            <div className="row">
                <div className="col-sm-2 current-temp">{props.temperature}</div>
                <div className="col-sm-2 measure-unit">
                    <a href="/">°C</a> | <a href="/">°F</a>
                </div>
                <div className="col-sm-3">
                    <img src={props.icon} alt="weather-icon" />
                </div>
                <div className="col-sm-5 weather-parameters">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: {props.humidity}%</li>
                        <li>Wind: {props.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}