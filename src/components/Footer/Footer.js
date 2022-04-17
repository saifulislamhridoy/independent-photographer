import React from 'react';

const Footer = () => {
    const date = new Date()
    let year = date.getFullYear()
    return (
        <div className='bg-gray-700 py-4'>
           <p className='text-white'>Copyright &copy; {year} by <span className='text-pink-600'>PHOTOSHOT</span></p> 
        </div>
    );
};

export default Footer;