import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Confirmation = (props) => {
    console.log(props.location.state)
    const {name,confirmBooking,slotTime}= props.location.state
    const classes = useStyles();

    return (
        <div>
 <Grid container spacing={1} className="day_slot">
      <Grid container item xs={12} spacing={1}>
      <Paper className={classes.paper}>
      <Typography variant="h2" color="textSecondary" component="p">
         Booking Confirmed
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        you have successfully booked appointment for {confirmBooking?.Date} on {slotTime}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        with DR.{name}
      </Typography>
      </Paper>
      </Grid>
 </Grid>
        </div>
    )
}

export default Confirmation
