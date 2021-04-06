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
        
        const { nextStep } = props;

        // const [userDetails, setUserDetails] = useState({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     password: ""
        // })

        const [firstName, setFirstName] = useState();
        const [lastName, setLastName] = useState();
        const [email, setEmail] = useState();
        const [password, setPassword]= useState();

        const handleSubmit = e => {
            e.preventDefault();
            console.log("first name: " + firstName)
            console.log("last name: " + lastName)
            console.log("email address: " + email)
            console.log("password: " + password)
            nextStep();
        }

        // function getData(val){
        //     setUserDetails(val.target.value);
        //     console.log(val.target.value);
            
        // }

        const moveForward = e => {
            console.log("Let's continue");
            e.preventDefault();
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
                    <h2>Hello {firstName}</h2>
                    <h3>Your last name is {lastName}.</h3>
                    <h4>Your email is {email}.</h4>
                    <h5>And we won't tell anyone your password is {password}</h5>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            name="firstName"
                            type= "text"
                            label= "First Name"
                            placeholder="Enter Your First Name"
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            name="lastName"
                            type= "text"
                            label= "Last Name"
                            placeholder="Enter Your Last Name"
                            onChange={e => setLastName(e.target.value)}

                            
                        />
                    </div>                    
                    <div>
                        <TextField
                            name="email"
                            type= "text"
                            label= "Email Address"
                            placeholder="Enter Your Email Address"
                            onChange={e => setEmail(e.target.value)}

                       />
                    </div>
                    <div>
                        <TextField
                            name="password"
                            type= "password"
                            label= "Password"
                            placeholder="Enter Your Password"
                            onChange={e => setPassword(e.target.value)}
                           
                            
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