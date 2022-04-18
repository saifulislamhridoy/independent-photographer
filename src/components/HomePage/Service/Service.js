import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,price,description}=service
    const navigate = useNavigate()
    const handleBook =()=>{
        navigate('/checkout')
    }
    return (
        <div className='w-[300px] h-[420px] border-2 grid justify-items-center pb-3'>
            <img className='w-[295px] h-[200px]' src={img} alt="" />
            <h2 className='text-2xl font-bold pt-1'>{name}</h2>
            <p className='mx-2'>{description}</p>
            <p className='font-bold py-2'>Price: ${price}</p>
            <button onClick={handleBook} className='bg-pink-600 px-3 rounded text-white hover:bg-pink-500 py-1'>Book Now</button>
        </div>
    );
};

export default Service;