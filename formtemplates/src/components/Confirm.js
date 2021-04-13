import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    },
    li: {
        textAlign: "center"
    }
  }));


    function FormUserDetails(props){
        
        const classes = useStyles();
        const { nextStep, prevStep, personalData, details } = props;

        
        const moveForward = e => {
            e.preventDefault();
            nextStep();
        }

        const back = e => {
            e.preventDefault();
            prevStep();
        }

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.navBar}>
                    <Typography variant="h5" className={classes.title}>
                    Confirm User Data
                    </Typography>   
                </AppBar>
                <div>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem className={classes.li}>
                            <ListItemText primary={`First Name: ${personalData.firstName}`}>
                            </ListItemText>
                            
                        </ListItem>
                        <ListItem className={classes.li}>
                            <ListItemText primary={`Last Name: ${personalData.lastName}`}></ListItemText> 
                        </ListItem>
                        <ListItem className={classes.li}>
                            <ListItemText primary={`Email: ${personalData.email}`} />
                        </ListItem>
                        <ListItem className={classes.li}>
                            <ListItemText primary={`Password: ${personalData.password}`}/>
                        </ListItem>
                        <ListItem className={classes.li}>
                            <ListItemText primary={`Occupation: ${details.occupation}`}/>
                        </ListItem>
                        <ListItem className={classes.li}>
                            <ListItemText primary={`City: ${details.city}`}/>
                        </ListItem>                    
                        <ListItem className={classes.li}>
                            <ListItemText primary={`Bio: ${details.bio}`}/>
                        </ListItem>                      
                        <br />
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            className={classes.button}
                            onClick={moveForward} 
                        >
                        Confirm and Continue
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            className={classes.button}
                            onClick={back}
                        >
                        Back
                        </Button>
                    </List>
                </div>
            </div>
        )

    }





export default FormUserDetails;