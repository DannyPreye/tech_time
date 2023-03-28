import Image from 'next/image';
import React from 'react';
import H2 from './H2';

const JoinCommunity = () => {
  return (
    <div className="bg-[#004DB3] py-[40px] lg:py-[86px] relative">
      <Image src={'/join_community/background.svg'} fill />
      <div className="container mx-auto px-5 flex flex-col items-center text-white">
        <>
          <p className="uppercase text-center text-[8px] leading-[11px] lg:text-[16px] lg:leading-[21.6px]">
            join our community
          </p>
          <H2
            title={
              'Are you  ready to connect with the future talent of the tech world'
            }
            className="lg:text-center  lg:w-[80%]"
          />
          <p
            className="capitalize text-center font-[500] text-[8px] 
          lg:text-[16px] leading-[11px] lg:leading-[21.6px] mt-[4px] lg:mt-[16px]"
          >
            meet up with other techstars and grow together
          </p>
        </>
        <div className=" mt-[23.9px] lg:mt-[34.74px]">
          <Image
            src={'/join_community/community.svg'}
            width={983}
            height={454.2}
          />
        </div>

        <button
          className="mx-auto w-[110px] h-[27px] lg:w-[220px] lg:h-[54px] rounded-[4px]
         bg-white mt-[26px] lg:mt-[46px] capitalize text-[#004DB3] text-[8px] leading-[11px] 
         lg:text-[16px] lg:leading-[22px] font-[700]"
        >
          join our community
        </button>
      </div>
    </div>
  );
};

export default JoinCommunity;
