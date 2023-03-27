import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

import H2 from './H2';
import P from './P';
import { testimonials } from '../lib/contants';

const Testimonial = () => {
  return (
    <div className=" mt-[119px] container mx-auto px-5 pb-12">
      <div className="flex flex-col items-center">
        <H2 title={'what our clients are saying'} className="capitalize" />
        <P
          text={
            'high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image'
          }
          className="lg:w-[743px] lg:text-center mb-[43px] "
        />
      </div>

      <Swiper
        modules={[Pagination]}
        className="mt-8"
        freeMode={true}
        grabCursor={true}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          1220: {
            slidesPerView: 3
          }
        }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimony, id) => (
          <SwiperSlide key={id}>
            <div className="w-[603px] h-[294px] rounded-[24px] bg-white ">
              <p>{testimony.testimony}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
