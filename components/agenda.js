import { Card, CardContent, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"
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
                    <List>
                        {agenda.map(event => (
                            <ListItem>
                                <ListItemText key={event?.id}>{event?.start?.date} - {event?.summary}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Typography>
            </CardContent>
        </Card>
    )
}