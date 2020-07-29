import React, { Component } from 'react';
import MuiThemeProvider from
 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import { EditorBorderRight } from 'material-ui/svg-icons';

export class FormSocialDetails extends Component {
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
                    <AppBar title="Enter Social Details"/>
                    <TextField 
                    hintText="Enter Linkedln"
                    floatingLabelText="Linkedln Profile"
                    onChange={handleChange('Linkedln')}
                    defaultValue={values.Linkedln}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Github"
                    floatingLabelText="Github Profile"
                    onChange={handleChange('Github')}
                    defaultValue={values.Github}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Facebook"
                    floatingLabelText="Facebook Profile"
                    onChange={handleChange('Facebook')}
                    defaultValue={values.Facebook}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your Hobbies"
                    
                    align={EditorBorderRight}
                    multiLine={true}
                    onChange={handleChange('Hobbies')}
                    defaultValue={values.Hobbies}
                    />
                    <br/>
                    
                    <RaisedButton 
                    label="Save"
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
export default FormSocialDetails
