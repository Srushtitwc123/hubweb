import React from 'react'
import amazon from '../assets/amazon.png'
import zoom from '../assets/zoom.png'
import ideo from '../assets/ideo.png'
import bright from '../assets/brightwheel.png'
import shop from '../assets/export.png'
import slack from '../assets/slack.png'

const Brands = () => {
  return (
    <div className='w-[80%] px-64 mx-4 text-center'>
      
      <h1 className='text-center font-bold text-3xl pt-8 pl-[35%]'>Hubnex Tech Funds Trusted Brands</h1>
      
     
     <marquee behavior="scroll" direction="">
      
      <div className='flex gap-16 '>
      <img src={amazon} alt="" />
        <img src={zoom} alt="" />
        <img src={ideo} alt="" />
        <img src={bright} alt="" />
        <img src={shop} alt="" />
        <img src={slack} alt="" />
      
      
        
        <img src={amazon} alt="" />
        <img src={zoom} alt="" />
        <img src={ideo} alt="" />
        <img src={bright} alt="" />
        <img src={shop} alt="" />
        <img src={slack} alt="" />
      </div>
      

     </marquee>
      </div>
    
  )
}

export default Brands
