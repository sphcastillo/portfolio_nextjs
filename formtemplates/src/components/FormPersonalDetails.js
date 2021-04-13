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
        const {  nextStep, prevStep, form, details, setForm } = props;

        const setUserDetails = ({target:{value, name}}) => {
            setForm({...form, [name]: value});
        }
        

        const moveForward = e => {
            e.preventDefault();
            console.log("occupation: " + form.occupation);
            console.log("city: " + form.city);
            console.log("bio: " + form.bio);
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

                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            name="occupation"
                            type= "text"
                            label= "Occupation"
                            placeholder="Enter Your Occupation"
                            onChange={setUserDetails}
                        
                        />
                    </div>
                    <div>
                        <TextField
                            name="city"
                            type= "text"
                            label= "City"
                            placeholder="Enter Your City"
                            onChange={setUserDetails}
    
                        />
                    </div>
                    <div>
                        <TextField
                            name="bio"
                            type= "text"
                            label= "Bio"
                            defaultValue={form.bio || "Enter Your Bio"}
                            onChange={setUserDetails}
                            
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