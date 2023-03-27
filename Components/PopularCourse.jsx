import Image from 'next/image';
import { useState } from 'react';
import { categories, course, courses } from '../lib/contants';
import CourseCard from './CourseCard';
import H2 from './H2';
import P from './P';

const PopularCourse = () => {
  const [category, setCategory] = useState('All Categories');

  const handleButton = e => {
    setCategory(e.target.innerText);
  };

  return (
    <div className="container mx-auto px-5 flex flex-col items-center  lg:py-[80px]">
      <H2 title={'browse our popular courses'} className="capitalize" />
      <P
        text={
          'high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image'
        }
        className="lg:text-center lg:w-[743px]"
      />
      <div className="flex items-center space-x-[24px] lg:space-x-[92px] mt-[68px] ">
        {categories.map((cat, id) => (
          <button
            onClick={handleButton}
            className={`w-[69px] h-[19px] lg:w-[137px] lg:h-[46px] text-[8px]  lg:text-[16px] 
            rounded-[4px] leading-[10.8px] lg:leading-[21.6px] font-[700] ${
              cat == category ? 'text-[#004DB3] bg-white' : 'text-[#a1a1a1]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-[8px] lg:gap-[24px]  mt-[26.42px] ">
        {courses.map((course, id) => (
          <CourseCard course={course} key={id} />
        ))}
      </div>

      <div className="grid place-items-center">
        <button
          className=" grid place-items-center w-[83px] h-[27px] rounded-[2.2px] text-white bg-[#004DB3]
      text-[8px] leading-[10.8px] mt-[24px] lg:hidden font-[700] "
        >
          View Courses
        </button>
        <button
          className=" hidden w-[209px] h-[54px] rounded-[4px] text-white bg-[#004DB3]
      text-[16px] leading-[21.6px] mt-[40px] lg:block capitalize font-[700]"
        >
          explore all courses
        </button>
      </div>
    </div>
  );
};

export default PopularCourse;
