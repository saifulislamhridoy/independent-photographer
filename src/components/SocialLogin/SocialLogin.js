import React from 'react';
import google from '../../social/google.png'
import github from '../../social/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='flex items-center'>
                <div className='h-1 w-1/2 bg-pink-600'></div>
                <p className='text-xl px-2 mb-1 font-bold'>or</p>
                <div className='h-1 w-1/2 bg-pink-600'></div>
            </div>
            
                <button className='bg-pink-500 px-4 py-2 mb-4 mt-6 rounded-md shadow-md flex justify-between items-center mx-auto'>
                    <img className='w-9 mr-2' src={google} alt="" />
                    <span className='text-white font-bold text-xl'>Sign In Google</span>
                </button>           
            <div>
                <button className='bg-pink-500 px-4 py-2 rounded-md shadow-md flex justify-between items-center mx-auto'>
                    <img className='w-9 mr-2' src={github} alt="" />
                    <span className='text-white font-bold text-xl'>Sign In Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;