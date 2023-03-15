import SignInForm from '../../components/sign-in-form/sign-in.component';
import SignUpForm from '../../components/sign-up-form/sign-up.component';

import './auth.styles.scss'

const Auth = () =>{
  

    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
     
        </div>
    )
}

export default Auth;