import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
            <Image src={assets.ppgue} alt="PPGUE" className='rounded-full w-32'/>
        </motion.div>

        <motion.h3
        initial={{y: -20, scale: 0, opacity: 0 }}
        whileInView={{y:0, scale: 1, opacity: 1}}
        transition={{ duration: 0.6, delay:0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
            >Hi! I`m Rasyadwa Arsya <Image src={assets.hand_icon} alt="Hand Icon" className='w-6'/></motion.h3>
        <motion.h1
        initial={{y: -20, scale: 0, opacity: 0 }}
        whileInView={{y:0, scale: 1, opacity: 1}}
        transition={{ duration: 0.8, delay:0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Tech Strategist & Sustainable Innovation Enthusiast.</motion.h1>
            <motion.p
            initial={{y: 20, opacity: 0 }}
            whileInView={{y:0, opacity: 1}}
            transition={{ duration: 0.6, delay:0.7 }}
            className='max-w-2xl mx-auto font-Ovo'>
            I`m an Information Technology student passionate about developing sustainable energy and 
            technology solutions that empower communities and shape a better future.
            </motion.p>
            
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                
                <motion.a
                initial={{y: 30, opacity: 0 }}
                whileInView={{y:0, opacity: 1}}
                transition={{ duration: 0.6, delay:1 }}
                href="#contact"
                   className='
                    group
                    px-10 py-3 border rounded-full flex items-center gap-2
                    transition-all duration-300 ease-out

                    /* Style Light Mode (Base) */
                    bg-black text-white border-black
                    
                    /* Style Light Mode (Hover) */
                    hover:bg-transparent hover:text-black
                    
                    /* Style Dark Mode (Base) */
                    dark:bg-transparent dark:text-white dark:border-white
                    
                    /* Style Dark Mode (Hover) */
                    dark:hover:bg-white dark:hover:text-black
                   '
                >
                  contact me 
                  <Image 
                    src={assets.right_arrow_white} 
                    alt='Right Arrow White' 
                    className='w-4 transition-all duration-300
                               group-hover:invert /* Light Hover: (Putih -> Hitam) */
                               dark:invert /* Dark Base: (Putih -> Putih) */
                               dark:group-hover:invert /* Dark Hover: (Putih -> Hitam) */
                               '
                  />
                </motion.a>

                <motion.a
                initial={{y: 30, opacity: 0 }}
                whileInView={{y:0, opacity: 1}}
                transition={{ duration: 0.6, delay:1.2 }}
                href="/cv - Rasyadwa Arsya.pdf" download 
                   className='
                    group
                    px-10 py-3 border rounded-full flex items-center gap-2
                    transition-all duration-300 ease-out
                    
                    /* Style Light Mode (Base) */
                    bg-white text-black border-gray-400
                    
                    /* Style Light Mode (Hover) */
                    hover:bg-transparent hover:text-black hover:border-black
                    
                    /* Style Dark Mode (Base) */
                    dark:bg-white dark:text-black dark:border-white
                    
                    /* Style Dark Mode (Hover) */
                    dark:hover:bg-transparent dark:hover:text-white dark:hover:border-white
                   '
                >
                   my resume 
                   <Image 
                    src={assets.download_icon} 
                    alt='Download Icon' 
                    className='w-4 transition-all duration-300
                               group-hover:invert /* Light Hover: (Hitam -> Putih) */
                               dark:group-hover:invert /* Dark Hover: (Hitam -> Putih) */
                               '
                   />
                </motion.a>
            </div>
    </div>
  );
};

export default Header;