import React from 'react'
import { useNavigate } from 'react-router-dom'


const MainBanner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col relative items-center justify-center  top-40 '>
        <h1 className='text-9xl jersey text-gray-400'>HEY, I'M THARUNDA</h1>
        <p className='w-250 text-5xl text-center text-gray-100 mt-5 jersey '>A Full Stack Web Developer crafting dynamic, responsive, and scalable web applications from intuitive frontends to robust backends ensuring performance, usability, and long-term success.</p>
        <input type="button" value="PROJECTS" onClick={()=>{navigate('/projects')}} className='bg-gray-50 top-20 relative p-4 rounded-xl w-60 text-3xl changa-one-regular font-bold cursor-pointer hover:bg-black hover:text-white shadow-sm shadow-white ' />
        
    </div>
  )
}

export default MainBanner
