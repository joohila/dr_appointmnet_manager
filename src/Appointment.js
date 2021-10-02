import React,{useState,useRef} from 'react';
import './Appointment.css'
import { db, auth } from "./firebase";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link, useHistory } from "react-router-dom";

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


const  AppointmentGrid = ({id,name,bookings})=> {
  const history = useHistory();
  const classes = useStyles();
  const [loading,setLoading] = useState(false);

  const [slot,setSlot] = useState(null);
  const [slotTime,setSlotTime] = useState('');
  const [confirmBooking,setConfirmBooking] = useState(null)

  const showSlot=(booking)=>{
    setSlot(booking)
  }

  const bookSlot= async (slot,time)=>{
      setSlotTime(time)
    //   slot.BookedHours+=2
    setLoading(true)
      let check = bookings;
      check.forEach(element => {
          if(element.Date==slot.Date){
          element.BookedHours = slot.BookedHours+2
          }
      });
    await db.collection("Doctors")
      .doc(id).update({Availability: check});
    setLoading(false)
    let unsubscribe ;
   setConfirmBooking(slot);
   history.push({
    pathname:  '/AppointmentConfirmation',
    state: {
      name:name,
      slotTime:time,
     confirmBooking:slot
    } 
 })
      

  }

  function FormRow() {
    return (
      <React.Fragment>
        {loading && <CircularProgress className="spinner" color="secondary"/>}
          {bookings && bookings.map((booking)=>{
              return (
                <Grid item xs={2}>
                {/* <Paper className={classes.paper}>
                <Button size="small" className={classes.paper}> */}
                <Typography variant="caption" color="textSecondary" component="p">
                <button className={"button " + ( booking.TotalHours-booking.BookedHours==0? 'disabled' : booking.TotalHours-booking.BookedHours<=2?'Orangebutton':'greenbutton')} onClick={()=>showSlot(booking)}>{booking.Date}</button>
                </Typography>
                {/* </Paper> */}
              </Grid>
              )
          })}

      </React.Fragment>
    );
  }

  function SlotRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          {/* <Button size="small" className={classes.paper}> */}
          <Typography variant="body2" color="textSecondary" component="p">
          <button className={"button " + ( slot.TotalHours-slot.BookedHours==0? 'disabled' : slot.TotalHours-slot.BookedHours<=2?'redbutton disabled':'greenbutton')} 
          onClick={()=>bookSlot(slot,'Morning')}>
          Morning</button>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Typography variant="body2" color="textSecondary" component="p">
          <button className={"button " + ( slot.TotalHours-slot.BookedHours==0? 'disabled' : slot.TotalHours-slot.BookedHours<=2?'redbutton disabled':'greenbutton')}
           onClick={()=>bookSlot(slot,'Noon')}>
         Noon </button>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography variant="body2" color="textSecondary" component="p">
          <button className={"button " + ( slot.TotalHours-slot.BookedHours==0? 'disabled' : slot.TotalHours-slot.BookedHours<=2?'greenbutton':'greenbutton')}
           onClick={()=>bookSlot(slot,'Evening')}> 
        Evening </button>
            </Typography>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className="day_slot">
        <Grid container item xs={12} spacing={1}>
        <FormRow />
        </Grid>
      </Grid>
     { slot && (<Grid container spacing={1} className="time_slot">
        <Grid container item xs={12} spacing={1}>
        <SlotRow />
        </Grid>
      </Grid>)
    }

    </div>
  );
}

export default  AppointmentGrid