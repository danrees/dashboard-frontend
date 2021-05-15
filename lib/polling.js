import React, { useState, useEffect, useRef } from 'react';

export default function pollWeather(callback, delay) {
    console.log("polling")
    const intervalId = React.useRef(null);
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
        savedCallback.current = callback;
    });
    React.useEffect(() => {
        const tick = () => savedCallback.current();
        if (typeof delay === 'number') {
            intervalId.current = window.setInterval(tick, delay);
            return () => window.clearInterval(intervalId.current);
        }
    }, [delay]);
    return intervalId.current;
}