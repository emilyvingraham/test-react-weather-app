import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import "./App.css"

export default function Details() {
    return (
        <div>
            <div className="row py-3 TextResponsive">
                <div className="col-md-6">
                    <h2 className="pb-0 mb-0">
                        <strong>Denver</strong>
                    </h2>
                    <p className="mb-0">Tuesday 10:00</p>
                    <p className="text-capitalize">Description</p>
                </div>
                <div className="col-md-3">
                    <span>
                        <p className="temperature">
                            18{' '}
                            <sup className="fs-6">
                                <strong className="degrees">°F | °C</strong>
                            </sup>
                        </p>
                    </span>
                </div>
                <div className="col-md-3">
                    <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        color="black"
                        size={80}
                        animate={true}
                    />
                </div>
            </div>
            <div className="row TextResponsive">
                <div className="col-md-6 lh-1">
                    <ul>
                        <li>
                            <strong>Country:</strong> United States
                        </li>
                        <li>
                            <strong>Feels Like: </strong>10°
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 lh-1">
                    <ul>
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
    );
}
