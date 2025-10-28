import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='Logo' className='w-36 mx-auto
            mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='mail' className='w-6' />
                rasyadwarsya93@gmail.com
            </div>
        </div>

<div className='text-center sm:flex items-center justify-between border-t
border-gray-400 mx-[10%] mt-12 py-6'>
    <p>© 2025 Rasyadwa Arsya. All rights reserved.</p>
    <ul>
        <li><a target="_blank" href="">Github</a></li>
        <li><a target="_blank" href="">LinkedIn</a></li>
        <li><a target="_blank" href="">Instagram</a></li>
    </ul>
</div>

    </div>
  )
}

export default Footer