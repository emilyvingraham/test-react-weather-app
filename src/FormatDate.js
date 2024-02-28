import React from 'react';

export default function FormatDate(props) {
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

    let minute = props.date.getMinutes();
    if (minute < 10) {
        return `0${minute}`;
    }

    let hour = props.date.getHours();
    if (hour < 10) {
        return `0${hour}`;
    }

    return (
        <div>
            {day} {hour}:{minute}
        </div>
    );
}
