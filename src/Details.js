import React from "react";
import FormatDate from './FormatDate.js';

export default function Details(props) {
    return (
        <div className="Details">
            <div>
                <div className="row py-3 TextResponsive">
                    <div className="col-md-3">
                        <h2 className="pb-0 mb-0">
                            <strong>{props.data.cityName}</strong>
                        </h2>
                        <p className="mb-0">
                            <FormatDate date={props.data.date} />
                        </p>
                        <p className="text-capitalize">
                            {props.data.description}
                        </p>
                    </div>
                    <div className="col-md-3 TemperatureResponsive">
                        <span className="temperature">
                            {Math.round(props.data.temperature)}
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
                            <img
                                src={props.data.iconUrl}
                                alt={props.data.description}
                            />
                        </span>
                    </div>
                    <div className="col-md-3 lh-2">
                        <ul>
                            <li>
                                <strong>{props.data.country}</strong>
                            </li>
                            <li>
                                <strong>Feels Like: </strong>
                                {Math.round(props.data.feelsLike)}°
                            </li>
                            <li>
                                <strong>Humidity</strong>{' '}
                                {props.data.humidity}%
                            </li>
                            <li>
                                <strong>Wind</strong>{' '}
                                {Math.round(props.data.wind)} mph
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}