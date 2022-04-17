import React from 'react';

const Service = ({service}) => {
    const {img,name,}=service
    return (
        <div className='w-[300px] h-[400px] border-2 grid justify-items-center pb-3'>
            <img className='w-[295px] h-[200px]' src={img} alt="" />
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa distinctio quo quis quia dolores quasi neque fugiat eius ipsa.</p>
            <button className='bg-pink-600 px-3 rounded text-white hover:bg-pink-500'>Book Now</button>
        </div>
    );
};

export default Service;