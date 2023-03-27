import Image from 'next/image';
import React from 'react';
import { whyUs } from '../lib/contants';
import H2 from './H2';
import P from './P';
import WhyUsCard from './WhyUsCard';

const WhyUs = () => {
  return (
    <div className="bg-[#F8F9FC] pt-12  relative py-[124px]">
      <div
        className="flex item-center justify-center relative  
      flex-wrap lg:flex-nowrap container mx-auto px-5 gap-[32px]"
      >
        <section className="flex flex-col items-center lg:items-start relative">
          <Image
            src={'/why_us/triangle.svg'}
            width={30.01}
            height={28.13}
            className="bottom-10 left-[-9%] absolute z-50 lg:hidden"
          />
          <H2 title={'This is Why We Are Best From Others'} />
          <P
            className={'mt-[16px] mb-[32px]'}
            text={`     high-defination video is video of higher resolution and quality than
            standard definition. while there&apos;s no standard meaning for high
            definition, generally any standard video image`}
          />
          <Image
            src="/why_us/tech_boy.svg"
            width={712.57}
            height={475}
            alt="tech boy"
          />
        </section>

        <section
          className="lg:w-[55%] lg:flex-shrink-0 grid grid-cols-2 lg:flex flex-wrap  
        lg:gap-[24px] gap-[8px] lg:justify-end place-items-center relative"
        >
          {/* Design Elements for the left section  */}
          <>
            <Image
              src={'./why_us/zigzag.svg'}
              width={75}
              height={19.72}
              alt="zigzag"
              className="absolute m-auto left-0 right-0 top-[-8%] hidden lg:block"
            />
            <span
              className="w-[8px] h-[8px] lg:w-[26px] lg:h-[26px] border-[0.26px] rounded-full
       border-[#9143FD] m-auto absolute top-[50%] translate-y-[-50%] lg:top-[110%]  lg:bottom-[-10%] lg:m-0.5 right-[-2%] lg:right-10"
            />
          </>

          {/* The main data */}
          {whyUs.map((data, id) => (
            <WhyUsCard data={data} key={id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
