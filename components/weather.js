import { Card, CardContent, Typography } from "@material-ui/core";
import { useState } from "react";
import pollWeather from '../lib/polling';



export default function Weather({weatherData}) {
    //let weatherData = "no weather";
    const [temp,setWeatherData] = useState('No weather data')
    const [wIcon,setWIcon] = useState('')
    console.log("show up")
    pollWeather(async () => {
        console.log("Fetching weather data");
        const resp = await fetch("http://localhost:8000/api/weather");
        weatherData = await resp.json();
        console.log(weatherData);
        setWeatherData(Number(weatherData?.main?.temp - 272).toFixed(1))
        const icon = weatherData.weather[0].icon;
        setWIcon(`https://openweathermap.org/img/w/${icon}.png`)
    },1000);
    return (
        <Card variant="outlined">
            <CardContent >
                <Typography>
                    Here be Weather
                </Typography>
                <img src={wIcon} ></img>
                <Typography>
                    {temp}<span>&#176;</span>C
                </Typography>
            </CardContent>
        </Card>
    )
}