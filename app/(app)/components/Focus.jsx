import React from "react";
import Image from "next/image";
import { motion } from "motion/react"
import { assets, serviceData } from "@/assets/assets";

const Focus = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="Focus" className="w-full px-[12%] py-10
    scroll-mt-20">

        <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5, delay:0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>
        What I do</motion.h4>

        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5, delay:0.5 }}
        className='text-center text-5xl font-ovo '>
        Current Focus & Projects</motion.h2>

        <motion.p
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay:0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I`m currently exploring the intersection of sustainability, IoT, and renewable energy — integrating clean technology with social impact.
        I enjoy working on projects that combine engineering, data, and design thinking to create something that matters.</motion.p>
    
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay:0.6 }}
        className="grid-auto my-10">
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border border-gray-400 rounded-lg px-8 py-12 
                hover:shadow-[4px_4px_0_#000] cursor-pointer 
                hover:bg-(--color-light-hover)
                hover:-translate-y-1 duration-500 dark:hover:bg-(--color-dark-hover)
                dark:hover:shadow-[4px_4px_0_#fff]">
                    <Image src={icon} alt={title} className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                        {description}
                    </p>
                    <a href={link}>
                        Read more <Image src={assets.right_arrow} alt="Right Arrow" className="w-4" />
                    </a>
                </motion.div>
            ))}
        </motion.div>
    
    </motion.div>
  );
};  

export default Focus;