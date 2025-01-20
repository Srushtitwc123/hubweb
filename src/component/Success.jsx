import React from 'react'
import grop from  '../assets/group.png'
import cloud from '../assets/cloud.png'
import iot from '../assets/iot.png'
import block from '../assets/block.png'

const Success = () => {
  return (
    <div className=''>
       <h1 className='font-bold text-3xl text-center pt-11'>Succesful Tech Implements</h1>
       <p className='text-center'>Hubnex invest offer a comprehensive suite of technology enablement services <br /> tailored to meet the specific requirements of each startup we work with.</p>
    
    <div className=''> 
    
     <div className='pl-[300px] pt-20 flex flex-wrap'>
     <div className='w-[450px] h-[410px] bg-white  justify-evenly'>
      <img src={grop} className='justify-center pl-28 pb-3' />
      <p className='text-center pt-3 font-semibold'>AI-Powered <br />
      Analytics Platform</p>
      <p className='text-center pt-3'>We partner with a data analytics startup to develop an AI-powered platform using machine learning and big data technologies, delivering real-time insights and predictive analytics for businesses.</p>
      
      </div>


      <div className='w-[450px] h-[410px] bg-white  justify-evenly'>
      <img src={cloud} className='justify-center pl-28 pb-3' />
      <p className='text-center pt-3 font-semibold'>Cloud-Native 
      Application   Development <br />
      Analytics Platform</p>
      <p className='text-center pt-3'>We help a SaaS startup build a cloud-native subscription platform with expertise in cloud architecture, containerization, and microservices for scalable, cost-effective deployment.</p>
      
      </div>
      <div className='w-[450px] h-[410px] bg-white  justify-evenly pt-36'>
      <img src={block} className='justify-center pl-28 pb-3' />
      <p className='text-center pt-3 font-semibold'>Blockchain-Based 
      Supply Chain Solution <br />
      Analytics Platform</p>
      <p className='text-center pt-3'>We assist a startup in revolutionizing the supply chain industry by creating a blockchain-based solution for transparent, secure transactions, ensuring end-to-end visibility and traceability of goods.</p>
      
      </div>
      <div className='w-[450px] h-[410px] bg-white  justify-evenly pt-36'>
      <img src={iot} className='justify-center pl-28 pb-3' />
      <p className='text-center pt-3 font-semibold'>IoT-Enabled 
      Smart Home Solution <br />
      Analytics Platform</p>
      <p className='text-center pt-3'>We collaborate with a startup to improve their IoT-enabled smart home devices by integrating sensors, wireless communication, and cloud analytics for innovative, convenient, secure, and energy-efficient solutions.</p>
      
      </div>



      </div>
      
      </div>


</div>

    
  )
}

export default Success