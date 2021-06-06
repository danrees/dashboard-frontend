import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import Head from "next/head";
import Day from "../../components/day";
import Navbar from "../../components/navbar";

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    top: {
        padding: 20,
    },
    paper: {
        height: 140,
        width: 100,
    },
}))
export default function calendar() {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Calendar</title>
                <link rel="icon" href="favicon.ico"></link>
            </Head>
            <Navbar></Navbar>
            <h1>Title</h1>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    {[0,1,2,3,4].map((week) => (
                        <Grid container justify="center" spacing={2} key={week}>
                            {["Sun","Mon", "Tues", "Wed", "Thurs", "Fri","Sat"].map((day) => (
                                <Day dayName={day} date={week} key={day}></Day>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}