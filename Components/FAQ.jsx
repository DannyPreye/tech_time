import React from 'react';
import H2 from './H2';
import P from './P';

import { faqs } from '../lib/contants';
import FaqCard from './FaqCard';

const FAQ = () => {
  return (
    <div className="lg:py-[80px] py-[40px]">
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
