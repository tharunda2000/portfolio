import React from 'react'
import { useNavigate } from 'react-router-dom'


const MainBanner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col relative items-center justify-center  top-40  '>
        <h1 className='text-5xl mt-10 lg:text-9xl jersey text-gray-400 lg:mt-30'>HEY, I'M THARUNDA</h1>
        <p className=' w-screen px-10 text-3xl lg:w-screen lg:px-90 lg:text-5xl text-center text-gray-100 mt-5 jersey lg '>A Full Stack Web Developer crafting dynamic, responsive, and scalable web applications from intuitive frontends to robust backends ensuring performance, usability, and long-term success.</p>
        <div className='flex gap-5 lg:gap-10 mt-5 lg:mt-0'>

          <input type="button" value="PROJECTS" onClick={()=>{navigate('/projects')}} className='bg-gray-50 mt-5 lg:mt-20 relative p-4 rounded-xl w-35 lg:w-60 text-xl lg:text-3xl changa-one-regular font-bold cursor-pointer hover:bg-black hover:text-white shadow-sm shadow-white h-15 lg:h-18' />
          <a
            href="/Tharunda_resume.pdf"
            download="Tharunda_CV.pdf"
            className="bg-gray-50 mt-5 text-center lg:mt-20 relative p-4 rounded-xl w-35 h-15 lg:h-18 lg:w-60 text-xl lg:text-3xl changa-one-regular font-bold cursor-pointer hover:bg-black hover:text-white shadow-sm shadow-white "
          >
            MY CV
          </a>

        </div>
        
    </div>
  )
}

export default MainBanner
