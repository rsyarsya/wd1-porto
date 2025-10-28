'use client'

import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('') // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size-[90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
      Connect with me</h4>
      <h2 className='text-center text-5xl font-ovo '>
      Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
      I`d love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.</p>
      
      <form onSubmit={handleSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-auto gap-6 mt-10 mb-8'>
          <input 
            type="text" 
            name="name"
            placeholder='Enter your name' 
            required
            value={formData.name}
            onChange={handleChange}
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white'
          />
          <input 
            type="email" 
            name="email"
            placeholder='Enter your email' 
            required
            value={formData.email}
            onChange={handleChange}
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white'
          />
        </div>
        <textarea 
          rows='6' 
          name="message"
          placeholder='Enter your message' 
          required
          value={formData.message}
          onChange={handleChange}
          className='w-full p-4 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white mb-6'
        ></textarea>

        <button 
          type='submit'
          disabled={status === 'sending'}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 disabled:opacity-50'
        >
          {status === 'sending' ? 'Sending...' : 'Submit now'}
          <Image src={assets.right_arrow_white} alt='right arrow' className='w-4'/>
        </button>

        {status === 'sending' && <p className='mt-4 text-center'>Thank you for your message!</p>}
        {status === 'success' && <p className='mt-4 text-center text-green-600'>Message sent successfully! ✓</p>}
        {status === 'error' && <p className='mt-4 text-center text-red-600'>Failed to send message. Please try again.</p>}
      </form>
    </div>
  )
}

export default Contact