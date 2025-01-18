import React from 'react'
import animation from '../assets/animation.png'

const Inter = () => {
  return (
    <div className='sm:bg-black w-[1700px] h-[700px]   relative bottom-40 ' >
     <img src={animation} className='h-[700px] w-[550px] animate-pulse' />  
     <h1 className='text-4xl absolute top-[30%] text-white pl-[1100px] bottom-20 mx-3'>Are you ready to turn your entrepreneurial <br /> dreams into reality? 
     <br />
     <button className='bg-white text-black absolute h-12 w-[240px] text-sm font-bold mx-6 rounded-md mt-7  '>Apply</button>
     </h1>
    
      
       
      
    </div>
  )
}

export default Inter
