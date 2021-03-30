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


    function FormUserDetails(){
        
        const classes = useStyles();
        const { values, handleChange } = this.props;
        
        const moveForward = e => {
            e.preventDefault();
            this.props.nextStep();
        }

     
        return (
            <div>
                <AppBar position="static" className={classes.navBar}>
                    <Typography variant="h5" className={classes.title}>
                    Enter User Details
                    </Typography>   
                </AppBar>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="firstName"
                            label="Enter Your First Name"
                            onChange= {handleChange("firstName")}
                            defaultValue = {values.firstName}
                        />
                    </div>
                    <div>
                        <TextField
                            id="lastName"
                            label="Enter Your Last Name"
                            onChange= {handleChange("lastName")}
                            defaultValue = {values.lastName}
                        />
                    </div>                    
                    <div>
                        <TextField
                            id="email"
                            label="Enter Your Email Address"
                            onChange= {handleChange("email")}
                            defaultValue = {values.email}
                    
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Enter Your Password"
                            onChange= {handleChange("password")}
                            defaultValue = {values.password}
                            
                        />
                    </div>
                    <Button variant="outlined" color="secondary" className={classes.button}>
                        Continue
                    </Button>
                </form> 
            </div>
        )

    }





export default FormUserDetails;