import "./Weather.css";

export default function Weather() {
    let WeatherTodayData = {
        temperature: "12",
        precipitation: "0",
        humidity: "62",
        wind: "22"
      };

    let CurrentLocationData = {
        city: "Vienna",
        time: "09:44",
        condition: "Clear Sky"
      };

      return (
        <div className="Weather">
          <div className="CurrentLocation">
            <h1>{CurrentLocationData.city}</h1>
            <hr />
            <h2>
              <div>{CurrentLocationData.time}</div>
              <div>{CurrentLocationData.condition}</div>
            </h2>
          </div>
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
                <ul>
                  <li>Precipitation: {WeatherTodayData.precipitation} mm</li>
                  <li>Humidity: {WeatherTodayData.humidity}%</li>
                  <li>Wind: {WeatherTodayData.wind} km/h</li>
                </ul>
            </div>
          </div>
        </div>
      );
}