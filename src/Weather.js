import React, { useState } from 'react';
import axios from 'axios';
// import ReactAnimatedWeather from 'react-animated-weather';
import Details from './Details.js';
import { Puff } from 'react-loader-spinner';
import './App.css';

export default function Weather(props) {
    const [loaded, setLoaded] = useState(false);
    const [currentWeather, setCurrentWeather] = useState({});

    function handleResponse(response) {
        let icon = response.data.condition.icon;
        console.log(response.data);
        setLoaded(true);
        setCurrentWeather({
            cityName: response.data.city,
            temperature: response.data.temperature.current,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            country: response.data.country,
            feelsLike: response.data.temperature.feels_like,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            iconUrl: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`,
        });
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
                    <Details data={currentWeather}/>
                </div>
            </div>
        );
    } else {
        let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
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
