import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import H2 from './H2';
import P from './P';
import { testimonials } from '../lib/contants';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className=" mt-[70px] lg:mt-[119px] container mx-auto px-5 pb-12">
      <div className="flex flex-col items-center">
        <H2 title={'what our clients are saying'} className="capitalize" />
        <P
          text={
            'high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image'
          }
          className="lg:w-[743px] lg:text-center mb-[43px] "
        />
      </div>

      <div className="w-full overflow-hidden relative">
        <Swiper
          modules={[Pagination]}
          className="py-4 h-[300px] lg:h-[440px]"
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            875: {
              slidesPerView: 2
            },
            1220: {
              slidesPerView: 3
            }
          }}
          effect={'coverflow'}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimony, id) => (
            <SwiperSlide className="w-[603px] flex-shrink-0 " key={id}>
              <div
                className=" rounded-[24px] bg-white py-[24px] px-[16px] lg:py-[40px] 
              ml-[24px] lg:px-[24px] flex-shrink-0"
              >
                <p className="font-[500] text-[10px] leading-[13.5px] lg:text-[14px] lg:leading-[26px] capitalize text-[#a1a1a1]">
                  {testimony.testimony}
                </p>
                <div className=" mt-[16.98px] lg:mt-[20px] flex items-center space-x-[8px]">
                  <div className="flex items-center w-[24px]  h-[24px] lg:w-[48px] lg:h-[48px] rounded-full relative">
                    <Image src={testimony.user.src} fill />
                  </div>
                  <div>
                    <p className="text-[10px] leading-[13.5px] lg:text-[14px] lg:leading-[18.9px] font-[700]">
                      {testimony.user.name}
                    </p>
                    <p className=" text-[8px] leading-[10.8px] lg:text-[12px] lg:leading-[16.2px] font-[400] text-[#a1a1a1]">
                      {testimony.user.occupation}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
