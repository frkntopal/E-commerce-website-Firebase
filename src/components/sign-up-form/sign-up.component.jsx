
import { useState } from "react";


import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Footer from "../footer/footer.component";

const defaultFormFields = {
    displayname:'',
    email:'',
    password:'',
    confirmPassword:''
}



function SignUpForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;



    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email,password);


            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

            window.location.href = '/'
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert ('Cannot create user, email already in use')
            }else {

                console.log('user creation encountered an error',error)
            }
        }
    }

    
    const handleChange = (event) =>{
        const {name, value } = event.target;

        setFormFields({...formFields,[name] : value})
    }

    return (
        <div>
        <div className="sign-up-container">
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>               
                <FormInput 
                label='Display Name'
                type="text" 
                required 
                onChange={handleChange} 
                name='displayName' 
                value={displayName}/>

                
                <FormInput 
                label='Email'
                type="email"
                required 
                onChange={handleChange} 
                name='email' 
                value={email}/>

                
                <FormInput 
                label='Password'
                type="password" 
                required 
                onChange={handleChange} 
                name='password'
                value={password}/>

                
                <FormInput 
                label='Confirm Password'
                type="password" 
                required 
                onChange={handleChange} 
                name='confirmPassword'
                value={confirmPassword}/>

                <Button type="submit"> Sign Up</Button>
            </form>
        </div>
            <div>
            <Footer />
            </div>
        </div>
    )
}

export default SignUpForm;