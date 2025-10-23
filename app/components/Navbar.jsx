import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef, useState } from 'react'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.gemini_hd_bg_light} alt='hd-bg' className='w-full' />
        </div>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between z-50'>
                <a href="#top">
                    <Image src={assets.logo} alt="logo" className='w-28 cursor-pointer mr-14'/>
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-60 backdrop-blur-md'>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Works</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>   

                <div className='flex items-center gap-4'>

                    <button>
                        <Image src={assets.moon_icon} alt="moon_icon" className='w-6'/>
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt="arrow_icon" className='w-3'/></a>

                    <button className='block md:hiddennml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt="menu_black" className='w-6'/>
                    </button>   
                </div>

            {/* -- ----- Mobile menu ----- --*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen 
            bg-[rgba(255,255,255,0.65)] backdrop-blur-lg shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-white/20 dark:border-white/10
            transition-all duration-500 dark:bg-[rgba(10,0,30,0.4)]'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt="close_icon" className='w-5 cursor-pointer'></Image>
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Works</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar;