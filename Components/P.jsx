import React from 'react';

const P = ({ text, className }) => {
  return (
    <p
      className={`capitalize font-[500] text-[8px] lg:text-[16px] 
        text-center lg:text-left leading-[15.39px] lg:leading-[28px] mt-[16px] text-[#A1A1A1] ${className}`}
    >
      {text}
    </p>
  );
};

export default P;
