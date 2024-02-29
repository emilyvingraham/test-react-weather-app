import React, { useState } from 'react';
import './Forecast.css';
import axios from 'axios';

export default function Forecast(props) {
    const [ready, setReady] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    function handleResponse(response) {
        setReady(true);
        setForecastData(response.data.daily);
    }

    if (ready) {
        console.log(forecastData);

        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col">
                        <div className="Forecast-day">
                            {forecastData[0].time}
                        </div>
                        <div className="Forecast-icon">
                            <img
                                src={forecastData[0].condition.icon_url}
                                alt={forecastData[0].condition.description}
                            />
                        </div>
                        <div className="Forecast-temperatures">
                            <span className="Forecast-temperatures-max">
                                {Math.round(
                                    forecastData[0].temperature.maximum
                                )}
                                °
                            </span>
                            <span className="Forecast-temperatures-min">
                                {Math.round(
                                    forecastData[0].temperature.minimum
                                )}
                                °
                            </span>
                        </div>
                        <div className="Forecast-description text-capitalize">
                            <div>
                                <i>{forecastData[0].condition.description}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
