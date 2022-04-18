import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate()
    const location=useLocation()
    const from = location.state?.from?.pathname || "/" 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [agree,setAgree]=useState(false)
    const passwordRef = useRef()
    const emailRef = useRef()
    if(user){
    navigate(from,{replace:true})
    }
    const handleFormSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email,password)
        toast('Sent Email Verification')

    }
    return (
        <div className='h-screen mb-10'>
            <div className='signup-form'>
        <h2 className='signup-title'>Please Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required/>
            <input ref={passwordRef} type="password" name="password" id="" placeholder='Passwoed' required/>
            {
                error && <p className='text-red-600'>{error?.message}</p>
            }
            <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label className={`pl-2 ${agree ? 'text-blue-600' : 'text-red-600'}`} htmlFor="terms">Accept terms and condition</label>
            <p>Already Have An Account? <Link to='/signin'  className='text-blue-600 text-decoration-none'>Sign In</Link></p>

            <input disabled={!agree} className={` ${agree ? 'bg-pink-600 text-white' : 'bg-slate-500 text-gray-400 cursor-text'} mt-4`} type="submit" value="Sign Up" />
        </form>
        <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer>
    </div>
        </div>
    );
};

export default SignUp;