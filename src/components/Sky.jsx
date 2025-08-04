import React from 'react'
import ShootingStar from './ShootingStar';


const Sky = () => {

    

    const stars= Array.from({length:150}).map((_, index)=> {
        const top = Math.random()*100;
        const left = Math.random()*100;

        return (
            <div 
              key={index} 
              className='size-0.5 bg-white rounded-full absolute  '
              style={{
                  top: `${top}%`,
                  left: `${left}%`,
              }}
            ></div>)
    })

    const pulseStars= Array.from({length:250}).map((_, index)=> {
        const top = Math.random()*100;
        const left = Math.random()*100;

        return (
            <div 
              key={index} 
              className='size-px bg-white rounded-full fixed animate-pulse '
              style={{
                  top: `${top}%`,
                  left: `${left}%`,
              }}
            ></div>)
    })
  return (
    
      <div className='absolute w-screen  h-screen bg-neutral-950 '>
        {stars}{pulseStars}
        <ShootingStar/>
        
      </div>
      
    
  )
}

export default Sky
