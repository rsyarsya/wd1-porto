import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.gemini_hd_bg_light} alt='hd-bg' className='w-full' />
        </div>

        <nav
            className={`
                w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex
                items-center justify-between z-50
                transition-all duration-300 ease-out
                ${isScroll 
                    ? 'bg-white/30 backdrop-blur-md shadow-lg' 
                    : ''
                }
            `}
        >
            <a href="#top">
                <Image src={assets.logo} alt="logo" className='w-28 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                    ${isScroll 
                        ? '' 
                        : 'bg-white shadow-sm bg-opacity-50'
                    }
                `}
            >
                <li><a className='font-Ovo hover:text-gray-600 transition-colors' href="#top">Home</a></li>
                <li><a className='font-Ovo hover:text-gray-600 transition-colors' href="#about">About me</a></li>
                <li><a className='font-Ovo hover:text-gray-600 transition-colors' href="#services">Services</a></li>
                <li><a className='font-Ovo hover:text-gray-600 transition-colors' href="#work">My Works</a></li>
                <li><a className='font-Ovo hover:text-gray-600 transition-colors' href="#contact">Contact me</a></li>
            </ul>   

            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt="moon_icon" className='w-6'/>
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 rounded-full ml-4 font-Ovo hover:bg-black/5 transition-colors'>
                    Contact <Image src={assets.arrow_icon} alt="arrow_icon" className='w-3'/>
                </a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt="menu_black" className='w-6'/>
                </button>   
            </div>
        </nav>

        {/* SIDE MENU MOBILE */}
        <ul
            ref={sideMenuRef}
            className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen 
                     bg-white/30 backdrop-blur-xl shadow-lg border border-white/20
                     transition-all duration-500 z-[60] pointer-events-auto'
        >
            <div className='absolute right-6 top-6 cursor-pointer z-[70]' onClick={closeMenu}>
                     <Image src={assets.close_black} alt="close_icon" className='w-5' />
            </div>

            <li><a className='font-Ovo hover:text-gray-600 transition-colors' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo hover:text-gray-600 transition-colors' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo hover:text-gray-600 transition-colors' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo hover:text-gray-600 transition-colors' onClick={closeMenu} href="#work">My Works</a></li>
            <li><a className='font-Ovo hover:text-gray-600 transition-colors' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
    </>
);
};

export default Navbar;