import React from 'react'

const SideBar = () => {
  return (
    <div>

      {/* desktop */}
        <div className='flex items-center justify-center mx-5 gap-2 h-20 w-90 lg:flex lg:items-center lg:justify-evenly absolute lg:flex-col lg:w-20 lg:h-100 bg-white/6 backdrop-blur-2xs lg:mx-0  border border-white/30  z-51 text-white top-65 lg:left-8 rounded-xl shadow-white shadow-sm'>

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
                <a href="https://www.linkedin.com/in/tharunda">
                    <i class="text-5xl ri-linkedin-box-fill cursor-pointer animate-pulse hover:animate-bounce"></i>
                </a>
           </div>

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
                <a href="https://github.com/tharunda2000">
                    < i class="ri-github-fill text-5xl cursor-pointer  animate-pulse hover:animate-bounce"></i>
                </a>
           </div>

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
               <a href="https://www.youtube.com/@DevForgeAcademy">
                    < i class="ri-youtube-fill text-5xl cursor-pointer animate-pulse hover:animate-bounce"></i>
               </a>
           </div> 

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm '>
               <a href="https://www.instagram.com/tharunda_d_silva">
                    < i class="ri-instagram-fill text-5xl cursor-pointer animate-pulse hover:animate-bounce"></i>
               </a>
           </div> 

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
                < i class="ri-twitter-x-line text-5xl cursor-pointer animate-pulse hover:animate-bounce"></i>
           </div>  
           
        </div>

        {/* mobile */}
      
    </div>
  )
}

export default SideBar
