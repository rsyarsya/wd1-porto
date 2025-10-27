import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";

const Focus = () => {
  return (
    <div id="Focus" className="w-full px-[12%] py-10
    scroll-mt-20">
        <h4 className='text-center mb-2 text-lg font-Ovo'>
        What I do</h4>
        <h2 className='text-center text-5xl font-ovo '>
        Current Focus & Projects</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I`m currently exploring the intersection of sustainability, IoT, and renewable energy — integrating clean technology with social impact.
        I enjoy working on projects that combine engineering, data, and design thinking to create something that matters.</p>
    
        <div className="grid-auto my-10">
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index}
                className="border border-gray-400 rounded-lg px-8 py-12 
                hover:shadow-[4px_4px_0_#000] cursor-pointer 
                hover:bg-(--color-light-hover)
                hover:-translate-y-1 duration-500">
                    <Image src={icon} alt={title} className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5">
                        {description}
                    </p>
                    <a href={link}>
                        Read more <Image src={assets.right_arrow} alt="Right Arrow" className="w-4" />
                    </a>
                </div>
            ))}
        </div>
    
    </div>
  );
};  

export default Focus;