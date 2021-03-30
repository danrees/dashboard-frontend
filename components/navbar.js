import {AppBar, Toolbar, Typography} from '@material-ui/core'

export default function Navbar() {
    return (
        <AppBar position="statuc">
            <Toolbar>
                <Typography variant="h6">Weather</Typography>
            </Toolbar>
        </AppBar>
    )
}