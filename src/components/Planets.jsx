import React from 'react'
import saturn from '../assets/saturn.png'
import moon from '../assets/moon.png'

const Planets = () => {
  return (
    <div className='e'> 
      <img src={moon} alt="" srcset="" className='absolute   bottom-100 z-100 w-40  left-40 top-50 opacity-30 bg-blur' />
      <img src={saturn} alt="" srcset="" className='absolute right-5 bottom-1 w-150 opacity-30 z-100 ' />
    </div>
  )
}

export default Planets
