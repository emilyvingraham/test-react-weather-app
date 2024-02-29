import React from 'react';

export default function FormatForecast(props) {
    function dayOfWeek() {
        let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        let day = days[props.date.getDay()];

        return `${day}`;
    }

    function max() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function min() {
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
                <span className="Forecast-temperatures-max">{max()}</span>
                <span className="Forecast-temperatures-min">{min()}</span>
            </div>
            <div className="Forecast-description text-capitalize">
                <div>
                    <i>{props.data.condition.description}</i>
                </div>
            </div>
        </div>
    );
}
