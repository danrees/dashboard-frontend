import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 100,
        height: 140
    }
}))

export default function Day(props) {
    const classes = useStyles();
    return(
        <Grid item >
            <Paper className={classes.paper}>
                <Typography>{props.dayName}</Typography>
                <Typography>{props.date}</Typography>
            </Paper>
        </Grid>
    )
}