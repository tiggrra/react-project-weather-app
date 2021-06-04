import "./Weather.css";

export default function Weather() {
    let WeatherTodayData = {
        temperature: "12",
        precipitation: "0",
        humidity: "62",
        wind: "22"
      };
      return (
        <div className="Weather">
          <div className="row">
            <div className="col-sm-2 current-temp">
              {WeatherTodayData.temperature}
            </div>
            <div className="col-sm-2 measure-unit">
                <a href="/">°C</a> | <a href="/">°F</a>
            </div>
            <div className="col-sm-3">
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly-sunny"/>
            </div>
            <div className="col-sm-5 weather-parameters">
                <p>Precipitation: {WeatherTodayData.precipitation} mm</p>
                <p>Humidity: {WeatherTodayData.humidity}%</p>
                <p>Wind: {WeatherTodayData.wind} km/h</p>
            </div>
          </div>
        </div>
      );
}