import React from 'react'
import Sky from '../components/Sky'
import Navbar from '../components/Navbar'
import profile from '../assets/profile2.jpg'

const About = () => {
  return (
    <div className=''>
        <div className='fixed'>
          <Sky />
        </div>
        <Navbar/>
       
        <div className='flex flex-col lg:flex-row w-screen h-screen absolute'>

            <div className='flex lg:flex-col justify-center '>
                <img src={profile} alt="" srcset="" className='w-80 lg:w-100 lg:ms-60 mt-45 lg:mt-60 border-5 border-white' />
            </div>

            <div className='flex lg:  flex-col lg:ms-25 justify-center items-center  '>
                <h1 className='relative text-7xl jersey text-gray-400 text-center lg:mt-55  mt-10 '>ABOUT ME</h1>
                <p className='w-100 lg:w-250 text-2xl lg:text-5xl text-center text-gray-100 mt-15 jersey  '>I'm an undergraduate at the University of Sri Jayewardenepura, currently pursuing a Full Stack Web Development course at ICET Institute. Passionate about building end-to-end web solutions, I specialize in both frontend and backend technologies. My tech stack includes Java, JavaScript, Spring Boot, Node.js, React, MySQL, and MongoDB. I enjoy transforming complex problems into user-friendly applications that are scalable, secure, and efficient.</p>
            </div>

        </div>
        
      
    </div>
  )
}

export default About
