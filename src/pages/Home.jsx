import React from 'react'
import Sky from '../components/Sky'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'

const Home = () => {
  return (
    <div className='h-screen bg-neutral-950'>
      <Sky/>
      <Navbar/>
      <MainBanner/>
      <SideBar/>
    </div>
  )
}

export default Home
