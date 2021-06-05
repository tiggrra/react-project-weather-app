import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("metric");

    function convertToF(event) {
        event.preventDefault();
        setUnit("imperial");
    }

    function convertToC(event) {
        event.preventDefault();
        setUnit("metric");
    }

    if (unit === "metric") {
    return (
        <div className="Temperature">
            <span className="current-temp">{props.celsius}</span>
            <span className="measure-unit">
                <strong> °C</strong> | <a href="/" onClick={convertToF}>°F</a>
            </span>
        </div>
    );
    } else {
        return (
            <div className="Temperature">
                <span className="current-temp">{Math.round((props.celsius * 9 / 5) + 32)}</span>
            <span className="measure-unit">
                <a href="/" onClick={convertToC}> °C</a> | <strong>°F</strong>
            </span>
        </div>
        )
    }
}