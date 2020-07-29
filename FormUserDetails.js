import React, { Component } from 'react';
import MuiThemeProvider from
 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';



export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        };
        
    render() {
        const { values , handleChange } = this.props;
        
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField 
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    
                    />
                    <br/>
                    <TextField
                    
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your Phone Number"
                    floatingLabelText="Phone Number"
                    onChange={handleChange('phoneNo')}
                    defaultValue={values.PhoneNo}
                   
                    />
                    
                    <br/>
                    <TextField 
                    hintText="Enter Your Current Address"
                    floatingLabelText="Current Address"
                    onChange={handleChange('currentAddress')}
                    defaultValue={values.currentAddress}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your Permanent Address"
                    floatingLabelText="Permanent Address"
                    onChange={handleChange('permanentAddress')}
                    defaultValue={values.permanentAddress}
                    />
                    <br/>
                    
                    <br/><br/>
                    <RaisedButton 
                    label="Contine"
                    primary={true}
                    styles={styles.button}
                    onClick={this.continue}

                    />

                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetails
