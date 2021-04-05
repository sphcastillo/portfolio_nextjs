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

        const [userDetails, setUserDetails] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })

        // const [firstName, setFirstName] = useState("");
        // const [lastName, setLastName] = useState("");
        // const [email, setEmail] = useState("");
        // const [password, setPassword]= useState("");

        // const [userDetails, setUserDetails] = useState(null)


        function getData(val){
            setUserDetails(val.target.value);
            console.log(val.target.value);
            
        }

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
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            name="firstName"
                            type= "text"
                            label= "First Name"
                            placeholder="Enter Your First Name"
                            onChange={getData}
                        />
                    </div>
                    <div>
                        <TextField
                            name="lastName"
                            type= "text"
                            label= "Last Name"
                            placeholder="Enter Your Last Name"
                            onChange={getData}

                            
                        />
                    </div>                    
                    <div>
                        <TextField
                            name="email"
                            type= "text"
                            label= "Email Address"
                            placeholder="Enter Your Email Address"
                            onChange={getData}

                       />
                    </div>
                    <div>
                        <TextField
                            name="password"
                            type= "password"
                            label= "Password"
                            placeholder="Enter Your Password"
                            onChange={getData}
                           
                            
                        />
                    </div>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        className={classes.button}
                        onClick={moveForward}
                    >
                        Continue
                    </Button>
                </form> 
            </div>
        )

    }





export default FormUserDetails;