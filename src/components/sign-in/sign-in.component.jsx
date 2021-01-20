// External 
import React from 'react';

// Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

// Styles
import './sign-in.styles.scss';

import { signInWithGoogle } from  '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
            <h2 className=''>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                 handleChange={this.handleChange} 
                 type='email' name='email' 
                 value={this.state.email}
                 label='email' 
                 required
                 />
                <FormInput 
                handleChange={this.handleChange} 
                type='password' 
                name='password' 
                value={this.state.password} 
                label='password'
                required
                />
                <div className="buttons">
                    
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    {' '}
                    Sign in with google{' '}
                    </CustomButton>
                </div>
            </form>
            </div>
        )

    }
}

export default SignIn;