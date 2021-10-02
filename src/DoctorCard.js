import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import steth from './steth.jpg'
import AppointmentGrid from  './Appointment';

const useStyles = makeStyles({
    root: {
      maxWidth: 450,
      objectFit:'contain'
    },
    media: {
      height: 240,
      objectFit:'contain'
    },
  });

const DoctorCard = ({id,doc}) => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={steth}
            title={doc.DoctorName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {doc.DoctorName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {doc.Speciality}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {doc.Clinic}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
          <a style={{textDecoration: 'none'}} href="https://react-chat-app-ce295.web.app/" rel="noreferrer">
          Open App
         </a>
          </Button> */}
          <AppointmentGrid id={id} name={doc.DoctorName} bookings={doc.Availability}/>
        </CardActions>
      </Card>
    );
}

export default DoctorCard
