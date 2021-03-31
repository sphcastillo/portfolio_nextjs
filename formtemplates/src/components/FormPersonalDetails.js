import React from "react";
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


    function FormUserDetails(props){
        
        const classes = useStyles();
        const { values, handleChange, nextStep, prevStep} = props;
        
        const moveForward = e => {
            e.preventDefault();
            nextStep();
        }

        const back = e => {
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
                            id="occupation"
                            label="Enter Your Occupation"
                            
                            onChange= {handleChange("occupation")}
                        />
                    </div>
                    <div>
                        <TextField
                            id="city"
                            label="Enter Your City"
    
                        />
                    </div>
                    <div>
                        <TextField
                            id="bio"
                            label="Enter Your Bio"
                            
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
                        onClick={back}
                    >
                    Back
                    </Button>
                </form> 
            </div>
        )

    }





export default FormUserDetails;