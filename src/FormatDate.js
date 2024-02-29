import React from 'react';

export default function FormatDate(props) {
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    let days = [
        'Sunday, Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let day = days[props.date.getDay()];

    return (
        <div>
            {day} {hours}:0{minutes}
        </div>
    );
}
