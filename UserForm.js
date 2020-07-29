import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormEducationalDetails from './FormEducationalDetails';
import FormProfessionalDetails from './FormProfessionalDetails';
import FormSocialDetails from './FormSocialDetails';
import Sucess from './sucess';
export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        currentAddress: '',
        permanentAddress: '',
        image: '',
        Cource: '',
        College: '',
        Year: '',
        Percentage: '',
        Company: '',
        From: '',
        To: '',
        Desgination:'',
        Linkedln: '',
        Github: '',
        Facebook: '',
        Hobbies: '',
        }
    // next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    
    
    render() {
        const { step } = this.state;
       const { firstName, lastName, email, phoneNo, currentAddress,
             permanentAddress, image, Cource, College, Year, Percentage,
              Company, From, To, Desgination, Linkedln, Github, Facebook, Hobbies } = this.state;
             const values = { firstName, lastName, email, phoneNo, currentAddress,
                permanentAddress, image, Cource, College, Year, Percentage,
                 Company, From, To, Desgination, Linkedln, Github, Facebook, Hobbies }
        
                switch(step) {
                    case 1:
                        return (
                            <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                            
                            />
                        )
                    case 2:
                        return (
                            <FormEducationalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        )
                    case 3:
                        return (
                            <FormProfessionalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        )
                    case 4:
                        return (
                            <FormSocialDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        )
                        case 5:
                        return (
                            <Sucess
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            
                            values={values}
                            />
                        )
                    
                        
                }
    }
}

export default UserForm