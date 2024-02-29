import React from 'react';
import './Forecast.css';
import axios from 'axios';

export default function Forecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="Forecast">
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">Fri</div>
                    <div className="Forecast-icon">
                        <img
                            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                            alt="description"
                        />
                    </div>
                    <div className="Forecast-temperatures">
                        <span className="Forecast-temperatures-max">55°</span>
                        <span className="Forecast-temperatures-min">20°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
