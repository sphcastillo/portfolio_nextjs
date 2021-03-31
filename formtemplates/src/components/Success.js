import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

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

function Success() {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.navBar}>
                <Typography variant="h5" className={classes.title}>
                Success
                </Typography>   
            </AppBar>         
            <div>
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email with further instructions</p>
            </div>   
        </div>
    )
}

export default Success;
