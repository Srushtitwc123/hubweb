import React, { useState } from 'react';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Hubnex Tech Fund ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'How does Hubnex Tech Fund support Startup ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Does Hubnex Invest provide financial investment  ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'What is the application process for Hubnex Invest  ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className='bg-white  flex-col justify-center  '>
     <h1 className="text-4xl font-bold text-center pt-6 text-black  ">
        Frequently Asked Questions
      </h1>
    <div className="md:max-w-2xl md:mx-56 p-4 md:mb-96">
     
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" border-black border-2 md:rounded-lg right-14 md:shadow-lg w-[170%] h-40 ">
            <button
              onClick={() => handleToggle(index)}
              className="w-full md:h-20  text-3xl font-semibold text-black  hover:text-blue-800 focus:outline-none  text-center"
            >
              {faq.question } 
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">
                {faq.answer} 
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default FAQ;
