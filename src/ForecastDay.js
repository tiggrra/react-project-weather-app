import React from "react";

export default function ForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day];
    }
    return (
        <div className="ForecastDay">
            <div className="Forecast-day"><strong>{day()}</strong></div>
            <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="Forecast-icon" />
            <div>
                <span className="Forecast-temp-max">{maxTemp()}</span>
                <span className="Forecast-temp-min">{minTemp()}</span>
            </div>
        </div>      
    )
}