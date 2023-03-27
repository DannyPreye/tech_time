import React from 'react';

const H2 = ({ title, className }) => {
  return (
    <h2
      className={`text-center lg:text-left font-[700] text-[24px] leading-[36px] lg:text-[56px] lg:leading-[70px] ${className}`}
    >
      {title}
    </h2>
  );
};

export default H2;
