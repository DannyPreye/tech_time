import React from 'react';
import { useState } from 'react';

const FaqCard = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full border-b-[1px] border-[#EAEAEA] py-[12.16px] lg:py-[32px] ">
      <div className="flex items-center justify-between">
        <span
          className={`${
            isOpen ? 'text-[#004DB3]' : 'text-black'
          } font-[900] text-[14px] leading-[18.9px] lg:text-[24px] lg:leading-[32.4px]  `}
        >
          {faq.question.slice(0, 1).toUpperCase() + faq.question.slice(1)}
        </span>
        <span
          className=" text-[20px]  cursor-pointer "
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <p
        className={`${
          isOpen ? 'block' : 'hidden'
        } mt-[16px] text-[16px] leading-[26px] font-[500] text-[#a1a1a1] duration-300`}
      >
        {faq.answer}
      </p>
    </div>
  );
};

export default FaqCard;
