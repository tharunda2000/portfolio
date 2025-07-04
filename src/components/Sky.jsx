import React from 'react'
import ShootingStar from './ShootingStar';


const Sky = () => {

    

    const stars= Array.from({length:150}).map((_, index)=> {
        const top = Math.random()*100;
        const left = Math.random()*100;

        return (
            <div 
              key={index} 
              className='size-px bg-white rounded-full absolute  '
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
              className='size-px bg-white rounded-full absolute animate-pulse '
              style={{
                  top: `${top}%`,
                  left: `${left}%`,
              }}
            ></div>)
    })
  return (
    
      <div className='relative w-full h-full '>
        {stars}{pulseStars}
        <ShootingStar/>
        
      </div>
      
    
  )
}

export default Sky
