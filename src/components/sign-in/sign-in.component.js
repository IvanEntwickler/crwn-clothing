import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () =>{
    const [userCredentials, setUserCredentials] = useState({email: '', password:''})



    const {email, password} = userCredentials;

    const handleSubmit = async event =>{
        event.preventDefault();
        

    
        try{
            const signInForm = await auth.signInWithEmailAndPassword(email, password);
            (signInForm) ? 
            alert('Welcome to Crown-Clothing!') : 
            alert('Wrong Password!');
        
            setUserCredentials({email:'', password: ''});

        } catch(error){
                console.error(error);
            }
};

    const handleChange = event =>{
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]: value })
    }

        return(
            
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        value={email} 
                        handleChange={handleChange}
                        label= 'Email'
                        required
                    />
                    <FormInput
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' > Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                            {' '}
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }

export default SignIn;
