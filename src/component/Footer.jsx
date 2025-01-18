import React from "react";
import img from "../assets/logo.png";
import link from "../assets/in.png";
import instagram from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import phonee from "../assets/phone.png";
import mail from "../assets/mail.png";


const Footer = () => {
  return (
    <>
      <div className="flex px-2 border-b-2 border-black  mx-7 justify-between ">
        <ul>
          <img src={img} className="h-20 w-52 " />
          <li className="w-[170px] h-[239px] flex flex-col gap-11 pt-7 ">      
            <p>
              Let us help you with all-in-one startup program and navigate the
              journey from concept to market success.
            </p>
            
            <button className="bg-black text-white w-[113px] h-[44px]   rounded-md ">
              Apply Now
            </button>
            
          </li>
          <br />
        </ul>

        <ul className=" pr-20 align-text-top pl-[400px]">
          <li className="font-bold text-xl">Learn More</li>
          <li className="pt-4">Career</li>
          <li className="pt-4">Browse</li>
          <li className="pt-4">Service</li>
          <li className="pt-4"> Events</li>
        </ul>

        <ul>
          <li className="sm:font-bold sm:text-xl">Privacy and Legal</li>
          <li className="pt-4">Privacy Policy</li>
          <li className="pt-4">Governace</li>
          <li className="pt-4"> Cookie Notice</li>
        </ul>
        

        {/* get in touch  */}
        <ul className="justify-items-center ">
          <li className="pl-[160px] sm:font-bold sm:text-xl">
            Connect with Us
          </li>
      
          <li className="flex pl-44 gap-[10px] pt-4">
            <img src={link} alt="  " className="h-[30px] w-[30px]" />
            <img src={instagram} alt="" className="h-[30px] w-[30px]" />
            <img src={facebook} alt="" className="h-[30px] w-[30px]" />
            <img src={twitter} alt=" " className="h-[30px] w-[30px]" />
          </li>
          
          <ul className="px-[160x] pt-6">
            <li className="sm:font-bold pl-36 sm:text-xl">Get in Touch</li>
          </ul>
          <li className="pl-48 flex pt-4">
            <img src={phonee} alt="" className="h-7 w-7 " />
            <p>+916392750561</p>
          </li>
          <ul className="pl-48 flex pt-2">
            <img src={mail} alt="" className="h-7 w-7 " />
            <p>info@hubnex.in</p>
          </ul>
        </ul>
      </div>
    
      <div>
        <p className="pl-[700px] pt-5">
          Copyright 2024 Hubnex All rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
