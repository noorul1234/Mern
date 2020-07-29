import React, { Component } from 'react';
import MuiThemeProvider from
 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';

export class FormEducationalDetails extends Component {
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
                    <AppBar title="Enter Educational Details"/>
                    <TextField 
                    hintText="Enter Your Cource"
                    floatingLabelText="Cource"
                    onChange={handleChange('Cource')}
                    defaultValue={values.Cource}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your College"
                    floatingLabelText="College"
                    onChange={handleChange('College')}
                    defaultValue={values.College}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your Year"
                    floatingLabelText="Year"
                    onChange={handleChange('Year')}
                    defaultValue={values.Year}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your Percentage/CGPA"
                    floatingLabelText="Percentage/CGPA"
                    onChange={handleChange('Percentage')}
                    defaultValue={values.Percentage}
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
export default FormEducationalDetails
