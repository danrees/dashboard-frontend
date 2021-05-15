import { Card, CardContent, Typography } from "@material-ui/core";
import pollWeather from "../lib/polling";
import { useState } from "react";

function getEvents() {}

export default function Agenda() {
    const [agenda,setAgenda] = useState([{'summary': 'no data', 'id': "1"}])
    pollWeather(async () => {
        console.log("fetching calendar data");
        const resp = await fetch("http://localhost:8000/api/calendar");
        const calendarData = await resp.json();
        console.log(calendarData)
        setAgenda(calendarData);
    },5000)
    return(
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    <ul>
                        {agenda.map(event => (
                            <li key={event.id}>{event.start?.date} - {event.summary}</li>
                        ))}
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}