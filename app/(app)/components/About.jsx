import React from "react";
import Image from "next/image";
import { motion } from 'motion/react'
import { assets, infoList, toolsData } from "@/assets/assets";



const About = (isDarkMode) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="about" className='w-full px-[12%] py-10 
    scroll-mt-20'>
      <motion.h4
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5, delay:0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5, delay:0.5 }}
      className='text-center text-5xl font-ovo '>
        About me</motion.h2>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center
        gap-20 my-20'>
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.kmtetot} alt="user" className='w-full
                rounded-3xl' />
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay:0.8 }}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>I`m an Information Technology student at Universitas Gadjah Mada, passionate about creating sustainable technologies that connect innovation, energy, and social impact.
                I`m currently a vice project director at HydroConnect — a hybrid clean-water management project integrating IoT, solar power, and PDAM systems for rural communities in Gunung Kidul.
                Beyond engineering, I`m interested in how sustainable energy and digital transformation can empower people and build a more resilient future.
                </p>

                <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay:1 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6
                max-w-2xl">
                    {infoList.map(({icon, iconDark, title, description}, 
                    index)=>(
                        <motion.li
                        whileHover={{ scale: 1.05 }}
                        className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                        hover:bg-(--color-light-hover)
                        hover:-translate-y-1 duration-500
                        hover:shadow-[4px_4px_0_#000] dark:border-white
                        dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-[#2a004a]/50"
                        key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7
                            mt-3"/>
                            <h3 className="my-4 font-semibold
                            text-gray-700 dark:text-white">{title}</h3>
                            <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1.3, delay:0.5 }}
                className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</motion.h4>

                <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay:0.6 }}
                className="flex items-center gap-3 sm:gap-5">
                    {toolsData.map((tool, index)=>(
                        <motion.li
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center
                        w-12 sm:w-14 aspect-square border border-gray-400
                        rounded-lg cursor-pointer
                        hover:-translate-y-1 duration-500"
                        key={index}>
                            <Image src={tool} alt="Tool" className="w-5
                            sm:w-7" />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  );
}

export default About;