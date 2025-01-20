import React from 'react'
import img from '../assets/logo.png'

const Home = () => {
  return (
    <div className='bg-white sm:text-xl flex flex-wrap justify-between pt-5 h-24 shadow-xl'>
   <div>
    <img src={img} className='h-14 w-40'/>
   </div> 
    <ul className=' flex pl-24 gap-5  '> 
     <li className='sm:font-bold'>Home</li>
     <li>Whate we offer?</li>
     <li>Events</li>
     <li>HubnexxLabs</li>
     <li>Get in Touch</li>
     <li>About us</li>
    </ul>
    <p>
    <button class="bg-black hover:bg-black-700 text-white font-bold py-2 px-5 border  rounded-md mx-7">
  Apply
</button>
</p>
    </div>

  )
}

export default Home
