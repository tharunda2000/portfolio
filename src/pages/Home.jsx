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
      <Planets/>
      <SideBar/>
    </div>
  )
}

export default Home
