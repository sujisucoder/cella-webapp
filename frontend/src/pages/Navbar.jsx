import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className=' flex justify-between w-full items-center p-3 '>
                {/* mobile */}
                <div className='block sm:hidden'>
                    <button onClick={toggleMenu} className='text-gray-700 focus:outline-none px-5'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
                {/* collapsable menu */}
                {/* Collapse Menu */}
                <div className={`fixed inset-0  bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                    <button onClick={toggleMenu} className='absolute top-4 right-4 text-gray-700 focus:outline-none'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className='flex flex-col items-start p-8 gap-4'>
                        <a href="/" className='text-btnPrimary font-semibold'>Home</a>
                        <a href="/brands" className='font-semibold'>Brands</a>
                        <a href="/about" className='font-semibold'>About</a>
                        <a href="/contact" className='font-semibold'>Contact</a>
                    </div>
                </div>
                <div className='flex gap-5 items-center '>
                    <a href="/">
                        <img src="https://placehold.co/40x40" alt="logo" />
                    </a>
                    <div className='font-medium text-[10px] sm:text-xl text-[#6D6F73]'>
                        India’s Biggest Mobile
                        <br />
                        Battery Brand
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <div>
                        <nav>
                            <ul className='flex font-bold text-[#54595f] text-xl gap-3'>
                                <li className=' active:text-green-500 active:underline'>
                                    <a href="/">Home</a>
                                </li>
                                <li className=' active:text-green-500 active:underline'>
                                    <a href="/brands">Brands</a>
                                </li>
                                <li className=' active:text-green-500 active:underline'>
                                    <a href="/about">About</a>
                                </li>
                                <li className=' active:text-green-500 active:underline'>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>
                    <a href="/contact">
                        <button className='bg-[#20B2AA] hover:bg-[#229D96] text-white font-bold py-2 sm:py-3 px-5 sm:px-8 rounded text-sm sm:text-xl'>Contact Us</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
