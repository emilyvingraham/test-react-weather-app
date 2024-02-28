import React from 'react';

export default function FormatDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.time.getDay()];

    let hours = props.time.getHours();
    if (hours < 10) {
        return (
            `0${hours}`
        )
    }

    let minutes = props.time.getMinutes();
    if (minutes < 10) {
        return (
            `0${minutes}`
        )
    }

    return <div>{day} {hours}:{minutes}</div>;
}
