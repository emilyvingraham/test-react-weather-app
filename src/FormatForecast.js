import React from 'react';

export default function FormatForecast(props) {
    function dayOfWeek() {
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        let day = days[props.date.getDay()];

        return `${day}`;
    }

    function maximum() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minimum() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    return (
        <div className="FormatForecast">
            <div className="Forecast-day">{dayOfWeek()}</div>
            <div className="Forecast-icon">
                <img
                    src={props.data.condition.icon_url}
                    alt={props.data.condition.description}
                />
            </div>
            <div className="Forecast-temperatures">
                <span className="Forecast-temperatures-max">{maximum()}</span>
                <span className="Forecast-temperatures-min">{minimum()}</span>
            </div>
            <div className="Forecast-description text-capitalize">
                <div>
                    <i>{props.data.condition.description}</i>
                </div>
            </div>
        </div>
    );
}
