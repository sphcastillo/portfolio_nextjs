import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
        flexGrow: 1
      }
    },
    button: {
        margin: 25
    },
    title: {
        flexGrow: 1,
        padding: "20px",
        backgroundColor: "firebrick"
    }
  }));


    function FormPersonalDetails(props){
        
        const classes = useStyles();
        const {  nextStep, prevStep } = props;
        const { firstName, lastName, email, password } = props;
        const { setFirstName, setLastName, setEmail, setPassword} = props;

        const [occupation, setOccupation] = useState();
        const [city, setCity] = useState();
        const [bio, setBio] = useState();


        const moveForward = e => {
            e.preventDefault();
            console.log("occupation: " + occupation);
            console.log("city: " + city);
            console.log("bio: " + bio);
            nextStep();
        }


        const backButton = e => {
            e.preventDefault();
            prevStep();
        }

        return (
            <div>
                <AppBar position="static" className={classes.navBar}>
                    <Typography variant="h5" className={classes.title}>
                    Enter Personal Details
                    </Typography>   
                </AppBar>
                <div>
                    <h2>{firstName} is a {occupation}.</h2>
                    <h3>{setFirstName} lives in {city}.</h3>
                    <h4>This is what I know about {firstName}: {bio}</h4>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            name="occupation"
                            type= "text"
                            label= "Occupation"
                            placeholder="Enter Your Occupation"
                            onChange={e => setOccupation(e.target.value)}
                        
                        />
                    </div>
                    <div>
                        <TextField
                            name="city"
                            type= "text"
                            label= "City"
                            placeholder="Enter Your City"
                            onChange={e => setCity(e.target.value)}
    
                        />
                    </div>
                    <div>
                        <TextField
                            name="bio"
                            type= "text"
                            label= "Bio"
                            placeholder="Enter Your Bio"
                            onChange={e => setBio(e.target.value)}
                            
                        />
                    </div>
                    <br />
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        className={classes.button}
                        onClick={moveForward} 
                    >
                    Continue
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        className={classes.button}
                        onClick={backButton}
                    >
                    Back
                    </Button>
                </form> 
            </div>
        )

    }





export default FormPersonalDetails;