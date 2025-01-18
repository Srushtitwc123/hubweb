import React from "react";
import ract from "../assets/ract.png";
import girl from "../assets/girl.png"
import invest from "../assets/invest.png"
import eco from "../assets/eco.png"

const Cardvertical = () => {
  return (
    <>
    <h1 className="font-bold text-4xl text-center pt-9">
        What We guide you with
      </h1>
    <div className="flex justify-evenly px-14 pt-9">
    <div className="ml-8">
      
      <div className="w-[298px] h-482px shadow-xl rounded-md bg-white">
        <p className="font-bold text-xl pb-4 pl-3 mx-3">
          Strategic <br /> Guidance
        </p>
        <img src={ract} alt="" className="w-[280px] h-[225px] pr-2 mx-3" />
        <p className="text-xl mx-3 pt-5">
          Hubnex defines their vision, strategy, and roadmap for success.
        </p>

            <p className="pt-5 pb-4 mx-2">
            <button className="bg-black text-white h-[24px] w-[100px] rounded-lg ">
              Know more 
            </button>
            </p>
      </div>
    </div>


    <div className="ml-8">
     
      <div className="w-[298px] h-482px shadow-xl rounded-md bg-white">
        <p className="font-bold text-xl pb-4 pl-3 mx-3">
          Strategic <br /> Guidance
        </p>
        <img src={girl} alt="" className="w-[280px] h-[225px] pr-2 mx-3" />
        <p className="text-xl mx-3 pt-5">
          Hubnex defines their vision, strategy, and roadmap for success.
        </p>

            <p className="pt-5 pb-4 mx-2">
            <button className="bg-black text-white h-[24px] w-[100px] rounded-lg ">
              Know more 
            </button>
            </p>
      </div>
    </div>

    <div className="ml-8">
     
      <div className="w-[298px] h-482px shadow-xl rounded-md bg-white">
        <p className="font-bold text-xl pb-4 pl-3 mx-3">
          Strategic <br /> Guidance
        </p>
        <img src={invest} alt="" className="w-[280px] h-[225px] pr-2 mx-3" />
        <p className="text-xl mx-3 pt-5">
          Hubnex defines their vision, strategy, and roadmap for success.
        </p>

            <p className="pt-5 pb-4 mx-2">
            <button className="bg-black text-white h-[24px] w-[100px] rounded-lg ">
              Know more 
            </button>
            </p>
      </div>
    </div>

    <div className="ml-8">
      
      <div className="w-[298px] h-482px shadow-xl rounded-md bg-white">
        <p className="font-bold text-xl pb-4 pl-3 mx-3">
          Strategic <br /> Guidance
        </p>
        <img src={eco} alt="" className="w-[280px] h-[225px] pr-2 mx-3" />
        <p className="text-xl mx-3 pt-5">
          Hubnex defines their vision, strategy, and roadmap for success.
        </p>

            <p className="pt-5 pb-4 mx-2">
            <button className="bg-black text-white h-[24px] w-[100px] rounded-lg ">
              Know more 
            </button>
            </p>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default Cardvertical;
