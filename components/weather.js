import { Card, CardContent, Typography } from "@material-ui/core";
import { useState } from "react";
import pollWeather from '../lib/polling';



export default function Weather({weatherData}) {
    //let weatherData = "no weather";
    const [temp,setWeatherData] = useState('No weather data')

    console.log("show up")
    pollWeather(async () => {
        console.log("Fetching weather data");
        const resp = await fetch("http://localhost:8000/api/weather");
        weatherData = await resp.json();
        console.log(weatherData);
        setWeatherData(Number(weatherData?.main?.temp - 272).toFixed(1))
    },1000);
    return (
        <Card variant="outlined">
            <CardContent >
                <Typography>
                    Here be Weather
                </Typography>
                <Typography>
                    {temp}
                </Typography>
            </CardContent>
        </Card>
    )
}