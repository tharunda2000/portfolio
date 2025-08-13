import React from 'react'
import Sky from '../components/Sky'
import Navbar from '../components/Navbar'

const ContactPage = () => {
  return (
    <div>
        <div className='fixed'>
          <Sky/>
        </div>
        <Navbar/>

        <div className='flex  justify-center flex-col items-center mx-10 lg:mx-0 '>

          

          <div className='flex flex-col  w-full lg:w-180 h-full items-center justify-center bg-white/6 backdrop-blur-xl mt-40 lg:mt-50 rounded-4xl p-10 gap-6'>
                <h1 className='text-gray-400 jersey text-5xl lg:text-7xl mb-5'>Contact Me</h1>

                
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50'
                />

                
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50'
                />

                <input 
                  type="text" 
                  placeholder="Your Mobile" 
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50'
                />

                
                <textarea 
                  placeholder="Your Message" 
                  rows="5" 
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50 resize-none'
                ></textarea>

                
                <button 
                  className='mt-4 px-8 py-3 text-lg font-bold text-white bg-black rounded-xl shadow-lg border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer'
                >
                  Send Message
                </button>
              </div>

        </div>
      
    </div>
  )
}

export default ContactPage
