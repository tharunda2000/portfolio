import React from 'react'
import Sky from '../components/Sky'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'
import Planets from '../components/Planets'

const Home = () => {
  return (
    <div className=''>
      <Sky/>
      <Navbar/>
      <MainBanner/>
      
      <div className='relative mx-15 lg:mx-0 bottom-10 lg:bottom-120'>
        <SideBar/>
      </div>
    </div>
  )
}

export default Home
