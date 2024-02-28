import React, { useState } from 'react';
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';
import { Puff } from 'react-loader-spinner';
import './App.css';

export default function Weather() {
    const [loaded, setLoaded] = useState(false);
    const [temperature, setTemperature] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.temperature.current);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div>
                <div className="container Weather">
                    <form>
                        <div className="row">
                            <div className="col-md-8">
                                <input
                                    className="form-control SearchResponsive"
                                    type="text"
                                    placeholder="Enter a city"
                                />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary w-100 SearchResponsive">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <div className="row py-3 TextResponsive">
                            <div className="col-md-3">
                                <h2 className="pb-0 mb-0">
                                    <strong>Grand Junction</strong>
                                </h2>
                                <p className="mb-0">Tuesday 10:00</p>
                                <p className="text-capitalize">Description</p>
                            </div>
                            <div className="col-md-3 TemperatureResponsive">
                                <span className="temperature">
                                    {Math.round(temperature)}
                                </span>
                                <span className="degrees">
                                    <sup>°F | </sup>
                                </span>
                                <span className="degrees">
                                    <sup>°C</sup>
                                </span>
                            </div>
                            <div className="col-md-3">
                                <span>
                                    <ReactAnimatedWeather
                                        icon="CLEAR_DAY"
                                        color="black"
                                        size={80}
                                        animate={true}
                                    />
                                </span>
                            </div>
                            <div className="col-md-3 lh-2">
                                <ul>
                                    <li>
                                        <strong>United States</strong>
                                    </li>
                                    <li>
                                        <strong>Feels Like: </strong>10°
                                    </li>
                                    <li>
                                        <strong>Humidity</strong> %
                                    </li>
                                    <li>
                                        <strong>Wind</strong> mp/h
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let city = 'Grand Junction';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return (
            <Puff
                visible={true}
                height="80"
                width="80"
                color="#265073"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        );
    }
}
