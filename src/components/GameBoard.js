import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Buttons from './Buttons';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles ((theme) => ({
    root: {
        flexGrow: 1, 
    },
    paper: {
        padding: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Buttons />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
    }
                /* <Grid item xs>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
                <Grid>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item sm>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
                <Grid>
                    <Paper className={classes.paper}>
                    <Buttons />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
} */