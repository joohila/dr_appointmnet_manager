import React,{useState,useEffect} from 'react'
import { db, auth } from "./firebase";
import Grid from '@material-ui/core/Grid';
import DoctorCard from './DoctorCard';


const Dashboard = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        let unsubscribe;

        unsubscribe = db.collection("Doctors").onSnapshot((snapshot) => {
    setDoctors(snapshot.docs.map((doc) => ({ id: doc.id, docDetails: doc.data() }))); //doc.id for doc id
    });
    return () => {
        unsubscribe();
      };
    },[])

    return (
        <>
        <Grid container spacing={3}>
            {doctors && doctors.map((doc)=>{
                console.log(doc)
               return ( 
                <Grid item xs={12} sm={4}>
                  <DoctorCard id={doc.id} doc={doc.docDetails}/>
                </Grid>
               )
            })}
        </Grid>

</>
    )
}

export default Dashboard
