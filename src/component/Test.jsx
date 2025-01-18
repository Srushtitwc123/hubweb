import React from 'react'
import hid from '../assets/hide.png'
import lad from '../assets/lady.png'
import star from '../assets/star.png'
import men from '../assets/men.png'
import { Carousel } from 'react-responsive-carousel';
import { IoMdCheckmark } from "react-icons/io";


const Test = () => {
    return (
       <div className='mt-96 '>
        <h1 className='text-3xl sm:font-bold lg:text-center'>Testimonials with Success stories</h1>
         <h2 className='sm:text-center text-xl pt-7'>Hubnex TechFund  stories highlight the transformative impact of our initiative on startup’s growth and success.</h2>


    <div className='flex flex-wrap  '>
     <img src={hid} alt="" className='pl-[110px] '/>

     
     <div className='bg-white h-[400px] w-[450px] rounded-md shadow-md relative bottom-80 left-48  '>
        <img src={lad} alt="" className='pt-5 absolute mx-5 ' /> 
       
        <h1 className=' text-center pt-9 pl-20 sm:font-bold'>Samantha Payne <br /> @Sam.Payne90</h1>
       
        
        <img src={star} alt="" className='pl-52'/>
        <button className='bg-green-100 rounded-lg mt-24 mx-7 w-[190px] h-[35px] flex justify-evenly font-medium pt-1'><IoMdCheckmark className='mt-2'/>verifed purchese </button>
      <p className='pt-4 text pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
       <h2 className='pl-6 pt-4 text-gray-300'>23 Nov 2021</h2>
     </div>
   <div className='bg-white h-[400px] w-[450px] rounded-md shadow-md relative bottom-80 left-40 mx-96'>
        <img src={men} alt="" className='pt-5 absolute mx-5 ' /> 
       
        <h1 className=' text-center pt-9 pl-20 font-bold'>John D <br />@John.d90</h1>
        <img src={star} alt="" className='pl-52'/>
        <button className='bg-green-100 rounded-lg mt-24 mx-7 w-[190px] h-[35px] flex justify-evenly font-medium pt-1'><IoMdCheckmark className='mt-2'/>verifed purchese </button>
      <p className='pt-4 text pl-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
      <h2 className='pl-6 pt-4 text-gray-300'>12  Apr 2022</h2>
     </div>
    
    </div>


    

    </div>
  )
}

export default Test