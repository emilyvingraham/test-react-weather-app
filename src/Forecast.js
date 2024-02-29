import React from 'react';
import "./Forecast.css";

export default function Forecast() {
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
