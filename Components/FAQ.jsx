import React from 'react';
import H2 from './H2';
import P from './P';

import { faqs } from '../lib/contants';
import FaqCard from './FaqCard';
import Image from 'next/image';

const FAQ = () => {
  return (
    <div className="lg:py-[80px] py-[40px] relative">
      <div className=" absolute left-0 top-[30%]">
        <Image
          src={'./faq/zigzag.svg'}
          width={75}
          height={17.98}
          className="hidden lg:block"
          alt="zigzag"
        />
        <Image
          src={'./faq/zigzag.svg'}
          width={24}
          height={4.87}
          className="block lg:hidden"
          alt="zigzag"
        />
      </div>

      <div className="absolute top-[5%] right-[5%] lg:top-[12%] lg:right-[15%]">
        <Image
          src={'/faq/circle.svg'}
          width={26}
          height={23.71}
          className="lg:block hidden"
          alt="circle"
        />
        <Image
          src={'/faq/circle.svg'}
          width={9.87}
          height={7.82}
          className="lg:hidden block"
          alt="circle"
        />
      </div>

      <div className="container mx-auto px-5 flex flex-col items-center">
        <H2
          title={'frequently asked questions'}
          className="capitalize lg:text-center"
        />
        <P
          text={
            'high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image'
          }
          className="lg:w-[743px] lg:text-center"
        />

        <div className="w-full max-w-[1037px] mt-[24px] lg:mt-[82px]">
          {faqs.map((faq, id) => (
            <FaqCard faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
