import Image from 'next/image';
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div
      className="w-[194px]  lg:w-[480px] lg:h-[576px]
           bg-white py-[16px] lg:px-[20px] px-[8px] rounded-[4px]"
    >
      <div className="relative lg:w-[439px] w-[176.82px] h-[117.88px] lg:h-[292.67px] rounded-[4px]">
        <Image src={course.src} fill alt={course.topic} />
      </div>

      <div className="flex justify-between mt-[15px] items-center">
        <span
          className="capitalize py-[4px] px-[20px] grid place-items-center 
              rounded-[16px] text-[#1E5DCE] bg-[rgba(30,93,206,0.2)] text-[8px]
               lg:text-[12px] leading-[5.4px] lg:leading-[16px] font-[700]"
        >
          {course.category}
        </span>
        <p
          className="flex gap-[9.3px] text-[#a1a1a1] font-[700] leading-[5.4px]
         text-[4px] lg:leading-[16px] lg:text-[12px]"
        >
          <span className="flex items-center">
            <span>{course.rating}k</span>
            <Image
              src={'/popular_courses/star.svg'}
              width={13.33}
              height={12.67}
              className="hidden lg:block"
            />
            <Image
              src={'/popular_courses/star.svg'}
              width={3.33}
              height={3.17}
              className="block lg:hidden"
            />
          </span>
          <span>({course.likes}k)</span>
        </p>
      </div>

      <h3
        className="font-[600] text-[8px] leading-[9.84px] lg:text-[24px] lg:leading-[32.4px]
       pt-[10px] pb-[5.5px] lg:pt-[28px]  lg:pb-[18px] capitalize"
      >
        {course.topic}
      </h3>

      <div
        className="flex justify-between items-center text-[#a1a1a1] lg:text-[16px] 
      lg:leading-[21.6px] text-[4px] leading-[5.4px]"
      >
        <p className="flex items-center gap-[10px] ">
          <span className="relative w-[6.67px] h-[6.67px] lg:w-[20px] lg:h-[20px]">
            <Image src={'/popular_courses/schedule.svg'} fill alt="schedule" />
          </span>
          <span className="flex gap-2">
            <span>{course.duration.hrs}hrs</span>
            <span>{course.duration.min}mins</span>
          </span>
        </p>
        <p className="flex items-center gap-[10px]">
          <span className="relative lg:w-[22px] lg:h-[16px] w-[7.33px] h-[5.33px]">
            <Image src={'/popular_courses/book.svg'} fill alt="book" />
          </span>
          <span>{course.lessons} Lessons</span>
        </p>
      </div>

      <div className="flex justify-between mt-[32px] items-center ">
        <div className="flex items-center gap-[8px] font-[700] text-[6px] leading-[8.1px] lg:text-[16px] lg:leading-[21.6px] capitalize">
          <div className="relative lg:w-[40px] lg:h-[40px] w-[16px] h-[16px] overflow-hidden rounded-full">
            <Image src={course.lecturer.src} fill alt={course.lecturer.name} />
          </div>
          <span className="">{course.lecturer.name}</span>
        </div>
        <p className=" text-[8px] leading-[9.84px] lg:text-[20px] font-[600] lg:leading-[24.6px] text-[#004DB3]">
          &#36;{course.price.toFixed(2)}{' '}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
