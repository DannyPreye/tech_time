import Image from 'next/image';
import React from 'react';
import { view_course } from '../lib/contants';
import P from './P';

const ViewCourses = () => {
  return (
    <div className=" relative">
      <div>
        {/* Other design images */}
        <div>
          {/* Desktop Screen */}
          <Image
            src={'/view_course/zigzag.svg'}
            width={102}
            height={15.09}
            alt="zigzag"
            className="absolute right-0 top-[5%] hidden lg:block"
          />
          <Image
            src={'/view_course/zigzag.svg'}
            width={44.71}
            height={4.13}
            alt="zigzag"
            className="absolute right-0 top-[30%] block lg:hidden"
          />
        </div>
        <div>
          <Image
            src={'/view_course/rounded.svg'}
            width={164}
            height={136.7}
            alt="rounded circle"
            className="absolute right-0 bottom-0 hidden lg:block "
          />
          <Image
            src={'/view_course/rounded.svg'}
            width={45}
            height={47.3}
            alt="rounded circle"
            className="absolute right-0 bottom-[10%] block lg:hidden"
          />
        </div>
        <span
          className="border-[0.12px] block border-[#c8a1fd] w-[12px] h-[12px] 
      rounded-full absolute bottom-0 right-[15%]"
        />
      </div>

      <div
        className="flex items-center py-[40px] gap-[99px] container 
      mx-auto px-5  flex-wrap lg:flex-nowrap"
      >
        {/* Left Section */}
        <section className="flex flex-col items-center lg:items-start ">
          <h2
            className={`font-[700] text-[24px] leading-[36px] 
          lg:text-[56px] lg:leading-[70px] text-center lg:text-left  relative`}
          >
            High quality video, audio & live classes
            <span className="absolute top-[-20%] left-[-2.7%] lg:block hidden">
              <Image
                src={'/view_course/Vector.png '}
                width={43.86}
                height={65.51}
                alt="vector"
                className=""
              />
            </span>
            <span className="absolute top-[-3%] left-[-1%] lg:hidden block">
              <Image
                src={'/view_course/Vector.png '}
                width={24.11}
                height={36.01}
                alt="vector"
                className=""
              />
            </span>
          </h2>
          <P
            text={`     high-defination video is video of higher resolution and quality than
            standard definition. while there&apos;s no standard meaning for high
            definition, generally any standard video image`}
          />

          <button
            className=" w-[83px] lg:w-[166px] h-[27px] lg:h-[54px] bg-[#004DB3] rounded-[4px]
         mt-[32px] font-[700] text-white text-[8px]  lg:text-[16px] leading-[10.8px]
          lg:leading-[22px]"
          >
            View Course
          </button>
          <div className="flex  gap-[13.19px] mt-[24px] flex-wrap w-[277.38px] lg:w-[492px]">
            {view_course.map((button, id) => (
              <div
                className={`w-[${button.sm_container_w}px] lg:w-[${button.lg_container_w}px] flex items-center gap-[8px]
                 bg-white rounded-[4px] py-[8px] font-[700] text-[8px] lg:text-[16px] leading-[10.8px]
                pr-[32px] pl-[16px] lg:py-[20px] lg:pr-[56px] lg:pl-[24px] `}
              >
                <span>
                  <Image
                    src={button.src}
                    width={button.sm_w}
                    height={button.sm_h}
                    className="lg:hidden block"
                  />
                  <Image
                    src={button.src}
                    width={button.lg_w}
                    height={button.lg_h}
                    className="hidden lg:block"
                  />
                </span>

                <span> {button.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <section className=" relative lg:flex-shrink-0 lg:h-[622px] grid place-items-center mx-auto">
          <div className="absolute bottom-[-4%] right-[-10%] lg:bottom-0 lg:right-[-5%]">
            {/* Mobile view */}
            <Image
              src={'/view_course/design.svg'}
              width={91}
              height={125}
              className="lg:hidden block relative "
              alt="design"
            />
            {/* Desktop View */}
            <Image
              src={'/view_course/design.svg'}
              width={198.92}
              height={236.43}
              className="hidden lg:block"
              alt="design"
            />
          </div>

          <div className="relative">
            {/* Desktop View */}
            <Image
              src={'/view_course/guy_pics.svg'}
              width={606}
              height={612}
              className="lg:block hidden"
            />
            <Image
              src={'/view_course/guy_pics.svg'}
              width={265}
              height={224}
              className="lg:hidden block"
            />
          </div>
          <div className="absolute lg:left-[-30%] left-[-22%] lg:bottom-0 bottom-[-15%]">
            <Image
              src={'/view_course/tech_lady.svg'}
              width={397.3}
              height={265}
              className="lg:block hidden"
            />
            <Image
              src={'/view_course/tech_lady.svg'}
              width={174}
              height={116}
              className="lg:hidden block"
            />
          </div>
          <div className="absolute top-[15%] left-[-20%]">
            <Image
              src={'/view_course/follower.svg'}
              width={205}
              height={81}
              className="hidden lg:block"
            />
            <Image
              src={'/view_course/follower.svg'}
              width={90}
              height={36}
              className="block lg:hidden"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewCourses;
