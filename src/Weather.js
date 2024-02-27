import React from 'react';
import Details from './Details';
import './App.css';

export default function Weather() {
    return (
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
                        <button className="btn btn-primary w-75 SearchResponsive">Search</button>
                    </div>
                </div>
            </form>
            <Details />
        </div>
    );
}
