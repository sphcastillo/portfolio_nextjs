import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    button: {
        margin: 25
    }
}


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM - send data to your API; Express, Python, PHP - any backend framework
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio } } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <br/>
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={ firstName }
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText={ lastName }
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText={ email }
                        />
                        <ListItem
                        primaryText="First Name"
                        secondaryText={ firstName }
                        />
                        <ListItem
                        primaryText="Occupation"
                        secondaryText={ occupation }
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={ city }
                        />    
                        <ListItem
                        primaryText="Bio"
                        secondaryText={ bio }
                        />                                            
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}



export default Confirm;
