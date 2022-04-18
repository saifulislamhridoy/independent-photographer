import React from 'react';
import aboutimg from '../../social/about.png'

const About = () => {
    return (
        <div className='h-[80vh]'>
            <div className=' mt-[120px] mx-auto w-[400px] h-[460px] border-2 grid justify-items-center py-3 shadow-2xl rounded bg-gray-200'>
            <img className='w-[295px] h-[300px] rounded-full' src={aboutimg} alt="" />
            <h2 className='text-2xl font-bold pt-1'>Saiful Islam Hridoy</h2>
            <p className='mx-2'> I am a front-end web developer.I love to use my criativty and make somthing new.I love to work with react.js. My ultimate goal is to become an awsome full-stack web developer.</p>
        </div>
        </div>
    );
};

export default About;