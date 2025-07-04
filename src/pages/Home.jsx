import React from 'react'
import Sky from '../components/Sky'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='h-screen bg-neutral-950'>
      <Sky/>
      <Navbar/>
      <SideBar/>
    </div>
  )
}

export default Home
