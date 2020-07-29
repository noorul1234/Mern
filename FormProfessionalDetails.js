import React, { Component } from 'react';
import MuiThemeProvider from
 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';

export class FormProfessionalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    
    render() {
        const { values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Professional Details"/>
                    <TextField 
                    hintText="Enter Your Company"
                    floatingLabelText="Company"
                    onChange={handleChange('Company')}
                    defaultValue={values.Company}
                    />
                    <br/>
                    <TextField
                    id="date"
                    label="From"
                    type="date"
                    floatingLabelText="From"
                    defaultValue="02/01/2020"
                    onChange={handleChange('From')}
                    InputLabelProps={{
                    shrink: true,
                     }}
                    /> <br/>
                    <TextField
                    id="date"
                    label="To"
                    type="date"
                    floatingLabelText="To"
                    defaultValue="02/01/2020"
                    onChange={handleChange('To')}
                    InputLabelProps={{
                    shrink: true,
                     }}
                    /> <br/>
                     <TextField 
                    hintText="Enter Your Designation"
                    floatingLabelText="Designation"
                    onChange={handleChange('Designation')}
                    defaultValue={values.Designation}
                    />
                    <br/>
                    <RaisedButton 
                    label="Contine"
                    primary={true}
                    styles={styles.button}
                    onClick={this.continue}
                     />
                     
                    <RaisedButton 
                    label="Back"
                    primary={false}
                    styles={styles.button}
                    onClick={this.back}
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
export default FormProfessionalDetails
