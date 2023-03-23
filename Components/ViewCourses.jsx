import Image from 'next/image';
import React from 'react';
import { view_course } from '../lib/contants';

const ViewCourses = () => {
  return (
    <div className="bg-[#F8F9FC]">
      <div className="flex items-center py-[40px] gap-[99px] container mx-auto px-5  flex-wrap lg:flex-nowrap">
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
          <p
            className="capitalize font-[500] text-[8px] lg:text-[16px] 
        text-center lg:text-left leading-[15.39px] lg:leading-[28px] mt-[16px]"
          >
            high-defination video is video of higher resolution and quality than
            standard definition. while there&apos;s no standard meaning for high
            definition, generally any standard video image
          </p>

          <button
            className=" w-[83px] lg:w-[166px] h-[27px] lg:h-[54px] bg-[#004DB3] rounded-[4px]
         mt-[32px] font-[700] text-white text-[8px]  lg:text-[16px] leading-[10.8px]
          lg:leading-[22px]"
          >
            View Course
          </button>
          <div className="flex  gap-[13.19px] mt-[24px] flex-wrap w-[80%]">
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
        <section className="lg:w-[60%] relative">
          <Image src={'/view_course/guy_pics.svg'} width={805} height={622} />
        </section>
      </div>
    </div>
  );
};

export default ViewCourses;
