import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-10 grid justify-center items-center mb-7'>
            <h2 className='text-center text-pink-600 font-bold text-4xl mb-10'>My Services</h2>
            <div className='grid md:grid-cols-3 gap-y-6 gap-x-7'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;