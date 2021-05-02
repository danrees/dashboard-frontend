import { Card, CardContent, Typography } from "@material-ui/core";


export default function Weather({weatherData}) {
    return (
        <Card variant="outlined">
            <CardContent >
                <Typography>
                    Here be Weather
                </Typography>
                <Typography>
                    {weatherData ? Number((weatherData?.main?.temp - 272.0).toFixed(1) ) : 'No weather data'}
                </Typography>
            </CardContent>
        </Card>
    )
}