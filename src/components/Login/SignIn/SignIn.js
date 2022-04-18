import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './SignIn.css'

const SignIn = () => {
    
    return (
        <div className='signin-form'>
            <h2 className='signin-title'>Sign Up</h2>
            <form>
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <input type="password" name="password" id="" placeholder='Passwoed' required/>
                <p>New To PhotoShot? <Link to='/signUp'  className='text-blue-500 text-decoration-none'>Sign Up</Link></p>
                <p>Forget Your Password? <Link to=''  className='text-blue-500 text-decoration-none'>Reset Password</Link></p>

                <input className='bg-pink-600 text-white mt-2' type="submit" value="Sign In" />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;