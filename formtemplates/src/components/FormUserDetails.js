import React from "react";
import { makeStyles } from '@material-ui/core.styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeSytles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormUserDetails(){
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField></TextField>
        </form> 
    )
}
