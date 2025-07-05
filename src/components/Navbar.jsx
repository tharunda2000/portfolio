import React from 'react'
import profile from '../assets/profilePic.jpg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between relative  w-full h-30  bg-white/6 backdrop-blur-2xs z-51 text-white top-0 left-0  '>

        <div className='flex items-center'>

            <img src={profile} alt=""  className='w-20 ms-10 rounded-full border-3'/>
            <h1 className='jersey ms-10 text-6xl '>Tharunda De Silva</h1>
            
        </div>

        <div className='hidden lg:flex me-30 gap-25 jersey text-4xl text-gray-200 '>
            <h1 className='cursor-pointer '>Home</h1>
            <h1 className='cursor-pointer'>About</h1>
            <h1 className='cursor-pointer'>Projects</h1>
            <h1 className='cursor-pointer'>contact</h1>
            
            
        </div>
      
    </div>
  )
}

export default Navbar
