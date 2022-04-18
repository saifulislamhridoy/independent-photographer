import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    const [agree,setAgree]=useState(false)
    return (
        <div className='h-screen'>
            <div className='signup-form'>
        <h2 className='signup-title'>Please Sign Up</h2>
        <form>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Email Address' required/>
            <input type="password" name="password" id="" placeholder='Passwoed' required/>
            <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label className={`pl-2 ${agree ? 'text-blue-600' : 'text-red-600'}`} htmlFor="terms">Accept terms and condition</label>
            <p>Already Have An Account? <Link to='/signin'  className='text-blue-600 text-decoration-none'>Sign In</Link></p>

            <input disabled={!agree} className={` ${agree ? 'bg-pink-600 text-white' : 'bg-slate-500 text-gray-400 cursor-text'} mt-4`} type="submit" value="Sign Up" />
        </form>
        <SocialLogin></SocialLogin>
    </div>
        </div>
    );
};

export default SignUp;