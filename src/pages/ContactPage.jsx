import React, { useState } from 'react'
import Sky from '../components/Sky'
import Navbar from '../components/Navbar'

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number,setnumber] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    await fetch("https://script.google.com/macros/s/AKfycbyb5jNiJVy8TZ9xFLZmTuAUEP2ItOkPb6n7AnHZcmi4cPQ9t2EzFN3fcGIbSkWe4OF9/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        number,
        message
      })
    });

    alert("Message sent!");

    
    setName("");
    setEmail("");
    setMessage("");
  };
  
  return (
    <div>
        <div className='fixed'>
          <Sky/>
        </div>
        <Navbar/>

        <div className='flex  justify-center flex-col items-center mx-10 lg:mx-0 '>

          

          <div className='flex flex-col  w-full lg:w-180 h-145 lg:h-full items-center justify-center bg-white/6 backdrop-blur-xl mt-40 lg:mt-50 rounded-4xl p-10 gap-6'>
                <h1 className='text-gray-400 jersey text-5xl lg:text-7xl mb-5'>Contact Me</h1>

                
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  onChange={(e)=>{setName(e.target.value)}}
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50'
                />

                
                <input 
                  type="email" 
                  placeholder="Your Email" 
                   onChange={(e)=>{setEmail(e.target.value)}}
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50'
                />

                <input 
                  type="text" 
                  placeholder="Your Mobile"
                   onChange={(e)=>{setnumber(e.target.value)}} 
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50'
                />

                
                <textarea 
                  placeholder="Your Message" 
                  rows="5" 
                   onChange={(e)=>{setMessage(e.target.value)}}
                  className='w-72 lg:w-120 p-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:border-white/50 resize-none'
                ></textarea>

                
                <button 
                  className='mt-4 px-8 py-3 text-lg font-bold text-white bg-black rounded-xl shadow-lg border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer'
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>

        </div>
      
    </div>
  )
}

export default ContactPage
