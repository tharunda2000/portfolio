import React, { useState } from 'react'
import profile from '../assets/profilePic.jpg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const [menueVisible,setMenueVisible] = useState(false);

  return (
    <div className='flex items-center justify-between fixed  w-screen h-30  bg-white/6 backdrop-blur-2xs z-51 text-white top-0 left-0  '>

        <div className='flex items-center '>

            <img src={profile} alt=""  className='w-20 ms-10 rounded-full border-3'/>
            <h1 className='jersey text-2xl lg:text-7xl ms-10'>Tharunda De Silva</h1>
            
            
        </div>

        <i class="ri-menu-3-line lg:hidden text-2xl cursor-pointer me-10" onClick={()=>{setMenueVisible(!menueVisible)}}></i>


        <div className='hidden lg:flex me-30 gap-25 jersey text-4xl text-gray-200 '>
            <h1 className='cursor-pointer ' onClick={()=>{navigate('/')}}>Home</h1>
            <h1 className='cursor-pointer ' onClick={()=>{navigate('/about')}}>About</h1>
            <h1 className='cursor-pointer' onClick={()=>{navigate('/projects')}}>Projects</h1>
            <h1 className='cursor-pointer'>contact</h1>
            
            
        </div>

        {menueVisible && <div className='flex flex-col jersey me-5 items-center justify-center gap-5 text-3xl absolute w-70 align-center mt-5  h-70 top-30 right-0 bg-white/6 backdrop-blur-xl rounded-4xl  '>

            <h1 className='cursor-pointer ' onClick={()=>{navigate('/')}}>Home</h1>
            <h1 className='cursor-pointer ' onClick={()=>{navigate('/about')}}>About</h1>
            <h1 className='cursor-pointer' onClick={()=>{navigate('/projects')}}>Projects</h1>
            <h1 className='cursor-pointer'>contact</h1>

          

        </div>}
      
    </div>
  )
}

export default Navbar
