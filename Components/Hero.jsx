import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center relative space-x-[80px] flex-wrap lg:flex-nowrap">
      {/* Left Section */}
      <section className="flex flex-col items-center lg:items-start relative">
        <h1 className="text-center lg:text-left text-[32px] lg:text-[64px] leading-[47.78px] lg:leading-[82px] font-[700] text-white">
          Grow your skills to advance your career path
        </h1>
        <p
          className="font-[500] text-center lg:text-left text-[8px]  lg:text-[16px] leading-[14.52px]
         lg:leading-[26px] mt-[16px] text-[#E7E7E7]"
        >
          build your future with our quality education. the best and largest
          all-in-one online tutoring platform in the world
        </p>
        <div className="flex mt-[32px] items-center space-x-[24px]">
          <button
            className="w-[110px] lg:w-[216px] h-[28px] lg:h-[54px] rounded-[4px] px-[16px] lg:px-[32px]
          py-[8px] lg:py-[16px] border-[1px] border-white flex items-center justify-between
            text-white text-[8px] lg:text-[16px] font-[700] leading-[10-8px] lg:leading-[22px]"
          >
            <span>Get Started Now</span>
            <span className="relative  w-[10px] h-[10px]">
              <Image src={'/desktop/arrow_outward.svg'} alt="arrow" fill />
            </span>
          </button>
          <button
            className="lg:w-[145px] w-[73px] h-[27px] lg:h-[54px] bg-white text-[#004DB3]
          text-[8px] lg:text-[16px] font-[700] rounded-[4px]"
          >
            Enroll Now
          </button>
        </div>
        <div className="mt-[24px] flex space-x-[8px] items-center">
          <Image
            src={'/desktop/preview.svg'}
            width={224}
            height={64}
            className="hidden lg:block"
          />
          <Image
            src={'/desktop/preview_mobile.svg'}
            width={121}
            height={32}
            className="block lg:hidden"
          />
          <p className="flex flex-col items-center text-white">
            <span className="font-[700] text-[13.4px] lg:text-[24px] leading-[16.8px] lg:leading-[29.52px]">
              225k+
            </span>
            <span className="text-[500] text-[8px] lg:text[16px] lg:leading-[21.6px]">
              Previews
            </span>
          </p>
        </div>
        <Image
          src={'/desktop/zigzag.svg'}
          width={63.26}
          height={19.15}
          className="absolute my-auto top-0 bottom-0 left-[-15%] hidden lg:block"
        />

        {/* circles on Destop screen */}
        <span className=" hidden lg:block w-[9.01px] h-[9.42px] bg-[#FFBE4E] rounded-full absolute top-0 right-0" />
        <span className="hidden lg:block w-[16px] h-[16.72px] border-[2px] border-[#00c040] rounded-full absolute top-[-1rem] left-0" />
      </section>

      {/* Right Section */}
      <section className=" relative lg:flex-shrink-0 re ">
        {/* Image of the girl  */}
        <Image src="/desktop/tech_girl.svg" height={886} width={705} />

        {/* Image that look like infinite with arrow head. */}
        <Image
          src={'/desktop/Vector.svg'}
          width={111.08}
          height={222.87}
          className="absolute  bottom-[165.36px] mx-auto left-[-4rem] hidden lg:block"
        />
        {/* Mobile View */}
        <Image
          src={'/desktop/zigzag_mobile.svg'}
          width={54.41}
          height={109.17}
          className="absolute my-auto top-[-30%] right-0 block lg:hidden"
        />
      </section>
    </div>
  );
};

export default Hero;
