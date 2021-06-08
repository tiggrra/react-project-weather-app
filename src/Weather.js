import React from "react";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
    return (
        <div className="Weather">
            <h1>{props.data.city}</h1>
            <hr />
            <h2>
                <div className="current-date"><FormattedDate date={props.data.date}/></div>
                <div className="text-capitalize">{props.data.condition}</div>
            </h2>
            <div className="row">
                <div className="col-sm-4 current-temp">
                    {Math.round(props.data.temperature)}
                    <span className="measure-unit"> °C</span>
                </div>
                <div className="col-sm-3">
                    <img src={props.data.iconUrl} alt={props.data.condition} />
                </div>
                <div className="col-sm-5 weather-parameters">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}