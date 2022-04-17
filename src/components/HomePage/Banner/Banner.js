import React from 'react';
import banner from '../../../banner/banner.mp4'

const Banner = () => {
    return (
        <div className='mt-20 z-[-1]'>
           <video className=' object-cover z-[-1] w-full h-[90vh]' autoPlay loop muted>
                <source src={banner} type="video/mp4"></source>
                
            </video>
            <div className='absolute top-[300px] left-0 flex justify-center mx-2'>
               <div className=' border-2 p-5 md:w-1/2'>
               <h2 className='bg-pink-600 inline rounded text-2xl  px-2 py-2 text-white font-bold w-full'>Make Your Moment</h2>
                <p className='text-white mt-2 text-1xl md:text-4xl'>We're Photoshot a small and enthusiastic photography studio based in Dhaka</p>
                <button className='bg-white px-3 py-2 mt-2 text-xl rounded hover:bg-pink-600 hover:text-white duration-500 ease-in'>Book Now</button>
               </div>
            </div>
           
        </div>
        
    );
};

export default Banner;