import React, { useState } from 'react';

export default function TemperatureUnit(props) {
    const [unit, setUnit] = useState('fahrenheit');

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }

    if (unit === 'fahrenheit') {
        return (
            <div className="TemperatureUnit">
                <span className="temperature">
                    {Math.round(props.fahrenheit)}
                </span>
                <span className="degrees">
                    <sup>°F |</sup>
                </span>
                <span className="degrees">
                    <sup>
                        <a href="/" onClick={convertToCelsius}>
                            °C
                        </a>
                    </sup>
                </span>
            </div>
        );
    } else {
        //let celsius = formula to convert
        let celsius = (props.fahrenheit - 32) * (5 / 9);

        //change the below props from f to celsius
        return (
            <div className="TemperatureUnit">
                <span className="temperature">{Math.round(celsius)}</span>
                <span className="degrees">
                    <sup>°C |</sup>
                </span>
                <span className="degrees">
                    <sup>
                        <a href="/" onClick={convertToFahrenheit}>
                            °F
                        </a>
                    </sup>
                </span>
            </div>
        );
    }
}
