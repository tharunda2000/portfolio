import React from 'react'

const SideBar = () => {
  return (
    <div>

        <div className='flex items-center justify-evenly relative flex-col w-20 h-100 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
                <i class="text-5xl ri-linkedin-box-fill cursor-pointer animate-pulse hover:animate-bounce"></i>
           </div>

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
                < i class="ri-github-fill text-5xl cursor-pointer  animate-pulse hover:animate-bounce"></i>
           </div>

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
                < i class="ri-youtube-fill text-5xl cursor-pointer animate-pulse hover:animate-bounce"></i>
           </div> 

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm '>
                < i class="ri-instagram-fill text-5xl cursor-pointer animate-pulse hover:animate-bounce"></i>
           </div> 

           <div className='flex justify-center items-center w-15 h-15 my-2 bg-white/6 backdrop-blur-2xs  border border-white/30  z-51 text-white top-60 left-8 rounded-xl shadow-white shadow-sm'>
                < i class="ri-twitter-x-line text-5xl cursor-pointer animate-pulse hover:animate-bounce"></i>
           </div>  
           
        </div>
      
    </div>
  )
}

export default SideBar
