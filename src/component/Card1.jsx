import React from 'react'
import image from '../assets/image21.png'

const Card1 = () => {
  return (
    <div>
    <div className=''>
      <h1 className='font-semibold sm:text-2xl sm:text-center pt-5 '>Hubnex Process of Evaluation</h1>
   </div>
   <ul className='flex justify-center gap-7 pt-6  '>
    <li className=' hover:underline hover:font-bold'>Pitch Screening </li>
    <li className=' hover:underline hover:font-bold'>HR Meet </li>
    <li className=' hover:underline hover:font-bold'>Company Analysis </li>
    <li className=' hover:underline hover:font-bold'>Hubnex's Demo</li>
    <li className=' hover:underline hover:font-bold'>Panel Discussion</li>
   </ul>
 <div className='bg-white shadow-lg w-[1300px] h-[800px] pt-[2px]  top-[221px]  flex flex-col items-center justify-center ml-28  rounded-lg '>
     <p className=' font-bold text-4xl pt-32 text-center pl-[100px]'> Pitch Screening</p>
    <img src={image} alt="" className='pt-4 mx-56 h-[410px] w-[1200px] ' />
    <p className='  text-xl p-4 pl-[80px]  ' >Div deep into your bussiness model with dedicated mentors They'll help you indentify strengths,.<br/>  weakness, opportunities, and threats (SWOT analysis) to ensure your startup is on the right track. </p>
    <div className='flex  pl-[90px] gap-4 justify-center'>

    <button className='bg-black text-white h-9 w-44 rounded-lg  '>
       Innovation Solutions 
    </button>
    <button className='bg-black text-white h-9 w-56 rounded-lg'>
    Team Expertise & Capabilities
    </button>
    <button className='bg-black text-white h-9 w-44 rounded-lg'>
    Market Potential
    </button>

    
   </div>
      
   <p className='flex  pl-[90px] gap-4 justify-center pt-4 rounded-lg'>
   <button className='bg-black text-white h-9 w-52  rounded-lg'>
   Feasibility and Scalability 
    </button>
    <button className='bg-black text-white h-9 w-56 rounded-lg'>
    User-Centric Design
    </button>
    
   </p>
   </div>
   
</div>
  )
}

export default Card1
