import React, { useState, useEffect } from 'react';
import './Forecast.css';
import FormatForecast from './FormatForecast.js';
import axios from 'axios';

export default function Forecast(props) {
    const [ready, setReady] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setReady(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setReady(true);
    }

    function search() {
        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (ready) {
        return (
            <div className="Forecast">
                <div className="row">
                    {forecastData.map(function (daily, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <FormatForecast
                                        data={daily}
                                        date={new Date(daily.time * 1000)}
                                    />
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
        search();

        return null;
    }
}
