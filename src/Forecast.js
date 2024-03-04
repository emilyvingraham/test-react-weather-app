import React, { useState } from 'react';
import './Forecast.css';
import FormatForecast from './FormatForecast.js';
import axios from 'axios';

export default function Forecast(props) {
    const [ready, setReady] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col">
                        <FormatForecast data={forecastData[0]} date={new Date(forecastData[0].time * 1000)}/>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
