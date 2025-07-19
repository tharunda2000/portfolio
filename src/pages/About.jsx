import React from 'react'
import Sky from '../components/Sky'
import Navbar from '../components/Navbar'
import profile from '../assets/profile2.jpg'

const About = () => {
  return (
    <div>
        <Sky/>
        <Navbar/>
        <h1 className='relative text-7xl jersey text-gray-400 text-center mt-20 '>ABOUT ME</h1>
        <div className='flex relative'>

            <div className='flex flex-col '>
                <img src={profile} alt="" srcset="" className='w-100' />
            </div>

            <div className='flex flex-col'>

            </div>

        </div>
        
      
    </div>
  )
}

export default About
