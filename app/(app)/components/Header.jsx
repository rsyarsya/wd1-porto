import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.ppgue} alt="PPGUE" className='rounded-full w-32'/>
        </div>
         <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
            >Hi! I`m Rasyadwa Arsya <Image src={assets.hand_icon} alt="Hand Icon" className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Tech Strategist & Sustainable Innovation Enthusiast.</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
            I`m an Information Technology student passionate about developing sustainable energy and technology solutions that empower communities and shape a better future.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
                >contact me <Image src={assets.right_arrow_white} alt='Right Arrow White' className='w-4'></Image></a>

                <a href="/cv - Rasyadwa Arsya.pdf" download 
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='Right Arrow White' className='w-4'></Image></a>
            </div>
    </div>
  );
};

export default Header;
