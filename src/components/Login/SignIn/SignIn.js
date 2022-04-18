import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './SignIn.css'

const SignIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if(user){
        navigate(from,{replace: true})
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email,password)
    }
    const handleResetPass = async()=>{
        const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email)
        toast('Sent email');
       }
       else{
           toast('Please enter your email')
       }
    }
    return (
        <>
        <div className='signin-form'>
            <h2 className='signin-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required/>
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Passwoed' required/>
                {
                    error && <p className='text-red-600'>{error?.message}</p>
                }
                {
                    loading && <p className='text-blue-500'>Loading...</p>
                }
                <p>New To PhotoShot? <Link to='/signUp'  className='text-blue-500 text-decoration-none'>Sign Up</Link></p>
                <p>Forget Your Password? <Link to='' onClick={handleResetPass}  className='text-blue-500 text-decoration-none'>Reset Password</Link></p>
                <input className='bg-pink-600 text-white mt-2' type="submit" value="Sign In" />
            </form>
            <SocialLogin></SocialLogin>
        </div>
        <ToastContainer></ToastContainer>
        </>
    );
};

export default SignIn;