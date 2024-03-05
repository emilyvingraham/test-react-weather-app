import React from 'react';
import './App.css';

export default function Footer() {
    return (
        <div className="Footer">
            This project was built by{' '}
            <a
                href="https://github.com/emilyvingraham"
                target="_blank"
                rel="noreferrer"
            >
                Emily Ingraham,
            </a>{' '}
            is{' '}
            <a
                href="https://github.com/emilyvingraham/test-react-weather-app"
                target="_blank"
                rel="noreferrer"
            >
                open-sourced on Github,
            </a>{' '}
            and{' '}
            <a
                href="https://international-react-weather-app-evi.netlify.app/"
                target="_blank"
                rel="noreferrer"
            >
                hosted on Netlify.
            </a>
            <p>👽</p>
        </div>
    );
}
