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
        const { values, handleChange} = this.props;
        
        const moveForward = e => {
            e.preventDefault();
            this.props.nextStep();
        }

        const back = e => {
            e.preventDefault();
            this.props.prevStep();
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
                            id="password"
                            label="Name"
                            type="password"
                            onChange= {handleChange("occupation")}
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Email"
                            type="password"
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
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