import React, { Component } from 'react';
import MuiThemeProvider from
 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';

import RaisedButton from 'material-ui/RaisedButton';



export class Sucess extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        };
        back = e => {
            e.preventDefault();
            this.props.prevStep();
          };
        
    render() {
        const { values: {firstName, lastName, email, phoneNo, currentAddress,
            permanentAddress, image, Cource, College, Year, Percentage,
             Company, From, To, Desgination, Linkedln, Github, Facebook, Hobbies}  } = this.props;
        
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm"/>
                    <List>
                        <ListItem>
                           primaryText="First Name"
                           secondaryText={ firstName }  
                        </ListItem>
                        <ListItem>
                           primaryText="Last Name"
                           secondaryText={ lastName }  
                        </ListItem>
                        <ListItem>
                           primaryText="Email"
                           secondaryText={ email }  
                        </ListItem>
                        <ListItem>
                           primaryText="Phone no"
                           secondaryText={ phoneNo }  
                        </ListItem>
                        <ListItem>
                           primaryText="currentAddress"
                           secondaryText={ currentAddress }  
                        </ListItem>
                        <ListItem>
                           primaryText="permanentAddress"
                           secondaryText={ permanentAddress }  
                        </ListItem>
                        <ListItem>
                           primaryText="Employee Image"
                           secondaryText={ image }  
                        </ListItem>
                        <ListItem>
                           primaryText="Cource"
                           secondaryText={ Cource }  
                        </ListItem>
                        <ListItem>
                           primaryText="college"
                           secondaryText={ College }  
                        </ListItem>
                        <ListItem>
                           primaryText="Year"
                           secondaryText={ Year }  
                        </ListItem>
                        <ListItem>
                           primaryText="Percentage"
                           secondaryText={ Percentage }  
                        </ListItem>
                        <ListItem>
                           primaryText="Company Name"
                           secondaryText={ Company }  
                        </ListItem>
                        <ListItem>
                           primaryText="From"
                           secondaryText={ From }  
                        </ListItem>
                        <ListItem>
                           primaryText="To"
                           secondaryText={ To }  
                        </ListItem>
                        <ListItem>
                           primaryText="Desgination Name"
                           secondaryText={ Desgination }  
                        </ListItem>
                        <ListItem>
                           primaryText="Linkedln"
                           secondaryText={ Linkedln }  
                        </ListItem>
                        <ListItem>
                           primaryText="Github"
                           secondaryText={ Github }  
                        </ListItem>
                        <ListItem>
                           primaryText="Facebook"
                           secondaryText={ Facebook }  
                        </ListItem>
                        <ListItem>
                           primaryText="Hobbies"
                           secondaryText={ Hobbies }  
                        </ListItem>
                    </List>
                    
                     
                    
                    
                    
                    
                    <br/><br/>
                    <RaisedButton 
                    label="Confirm & Contine"
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
export default Sucess
