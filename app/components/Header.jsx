import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.ppgue} alt="PPGUE" className='rounded-full w-32'/>
        </div>
         <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
            >HIi! I`m Rasyadwa Arsya <Image src={assets.hand_icon} alt="Hand Icon" className='w-6'/></h3>
            <p className='max-w-2xl mx-auto font-Ovo'>
            I`m an Information Technology student passionate about developing sustainable energy and technology solutions that empower communities and shape a better future.        
            </p>
            <div>
                <a href="#contact">contact me <Image src={assets.right_arrow_white} alt='Right Arrow White' className='w-4'></Image></a>

                <a href="/sample">my resume <Image src={assets.download_icon} alt='Right Arrow White' className='w-4'></Image></a>
            </div>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Tech Strategist & Sustainable Innovation Enthusiast.</h1>
    </div>
  );
};

export default Header;
