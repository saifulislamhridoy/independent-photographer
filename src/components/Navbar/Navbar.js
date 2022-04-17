import React, { useState } from 'react';

const Navbar = () => {
    const links = [
        { name: 'HOME', link: '/' },
        { name: 'SERVICES', link: '/services' },
        { name: 'BLOGS', link: '/blogs' },
        { name: 'ABOUT ME', link: '/about' },
    ]
    const [open, setOpen] =useState(false)
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between py-4 bg-white md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                    <span className='text-3xl text-pink-500 mr-1 pt-2'>
                        <ion-icon name="camera-outline"></ion-icon>
                    </span>
                    PHOTOSHOT
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:sticky bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-400px]'}`}>
                    {
                        links.map(link => (
                            <li key={link.name} className='md:ml-8 text-1xl font-bold text-gray-600 md:py-0 py-7'>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                    <button className='bg-pink-600 font-[poppins] md:ml-8 py-2 px-6 text-white rounded hover:bg-pink-500 duration-500'>SIGN IN</button>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;