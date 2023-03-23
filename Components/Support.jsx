import Image from 'next/image';
import React from 'react';
import { supportIcons } from '../lib/contants';

const Support = () => {
  return (
    <div className=" bg-[#CCDBF0] py-[25px] flex items-center justify-center space-x-[21px] lg:space-x-[73px]">
      {supportIcons.map(icon => (
        <div>
          <Image
            src={icon.src}
            width={icon.lg_w}
            height={icon.lg_h}
            className="hidden lg:block"
          />
          <Image
            src={icon.src}
            width={icon.sm_w}
            height={icon.sm_h}
            className="block lg:hidden"
          />
        </div>
      ))}
    </div>
  );
};

export default Support;
