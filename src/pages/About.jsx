import React from 'react'
import Sky from '../components/Sky'
import Navbar from '../components/Navbar'
import profile from '../assets/profile2.jpg'

const About = () => {
  return (
    <div className='fixed'>
        <Sky />
        <Navbar/>
       
        <div className='flex h-screen fixed'>

            <div className='flex flex-col '>
                <img src={profile} alt="" srcset="" className='w-100 ms-60 mt-35 border-5 border-white' />
            </div>

            <div className='flex flex-col ms-25  '>
                <h1 className='relative text-7xl jersey text-gray-400 text-center mt-25  '>ABOUT ME</h1>
                <p className='w-250 text-5xl text-center text-gray-100 mt-15 jersey  '>I'm an undergraduate at the University of Sri Jayewardenepura, currently pursuing a Full Stack Web Development course at ICET Institute. Passionate about building end-to-end web solutions, I specialize in both frontend and backend technologies. My tech stack includes Java, JavaScript, Spring Boot, Node.js, React, MySQL, and MongoDB. I enjoy transforming complex problems into user-friendly applications that are scalable, secure, and efficient.</p>
            </div>

        </div>
        
      
    </div>
  )
}

export default About
