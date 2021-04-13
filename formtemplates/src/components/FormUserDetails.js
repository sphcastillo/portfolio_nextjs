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


    function FormUserDetails(props){
        
        const classes = useStyles();
        
        const { nextStep, setForm, form } = props;

const setDetails = ({target:{value, name}}) => {
    setForm({...form, [name]: value});
}

        const handleSubmit = e => {
            e.preventDefault();
            console.log("first name: " + form.firstName);
            console.log("last name: " + form.lastName);
            console.log("email address: " + form.email);
            console.log("password: " + form.password);
            nextStep();
        }

     
        return (
            <div>
                <AppBar position="static" className={classes.navBar}>
                    <Typography variant="h5" className={classes.title}>
                    Enter User Details
                    </Typography>   
                </AppBar>
                <div>
                    <h2>Hello {form.firstName}</h2>
                    <h3>Your last name is {form.lastName}.</h3>
                    <h4>Your email is {form.email}.</h4>
                    <h5>And we won't tell anyone your password is {form.password}</h5>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            name="firstName"
                            type= "text"
                            label= "First Name"
                            defaultValue={form.firstName || "Enter Your First Name"}
                            onChange={setDetails}
                        />
                    </div>
                    <div>
                        <TextField
                            name="lastName"
                            type= "text"
                            label= "Last Name"
                            placeholder={form.lastName || "Enter Your Last Name"}
                            onChange={setDetails}

                            
                        />
                    </div>                    
                    <div>
                        <TextField
                            name="email"
                            type= "text"
                            label= "Email Address"
                            placeholder={form.email || "Enter Your Email Address"}
                            onChange={setDetails}

                       />
                    </div>
                    <div>
                        <TextField
                            name="password"
                            type= "password"
                            label= "Password"
                            placeholder={form.password || "Enter Your Password"}
                            onChange={setDetails}
                           
                            
                        />
                    </div>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        Continue
                    </Button>
                </form> 
            </div>
        )

    }





export default FormUserDetails;