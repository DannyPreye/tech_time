import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { community, socialIcons, usefulLinks } from '../lib/contants';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-[#000F24] py-[40px] lg:py-[166px] text-white">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-between gap-[32px]">
        {/* logo and social icons */}
        <div className="flex flex-col">
          <div className="relative w-[101px] h-[36px] lg:w-[130px] lg:h-[47px]">
            <Image src={'/logo.svg'} fill />
          </div>
          <p className="text-[16px] leading-[21.6px]  font-[400] w-[281px] mt-[26px]">
            Reach out to us on any of our social media networks
          </p>
          <div className="flex space-x-[30.38px] mt-[24px] ">
            {socialIcons.map((icon, id) => (
              <Link href={'#'}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  key={icon.alt}
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* useful links */}
        <FooterLinks links={usefulLinks} title="Useful Links" />
        {/* Community links */}
        <FooterLinks links={community} title="Community" />

        <div>
          <h3 className="text-[24px] leading-[30px] lg:text-[32px] lg:leading-[39px] font-[600] ">
            Subscribe Us
          </h3>
          <div className="flex  h-[46px] mt-[24px] lg:mt-[32px] ">
            <input
              type="text"
              placeholder="nft123@gmail.com"
              className="focus:outline-none border-[#054FB3] placeholder:text-[#424141] 
              border-[1px] rounded-[2px]
               bg-[#2A2A2B] py-[13.5px] px-[16px]"
            />
            <button
              className="bg-[#054FB3]  w-[123px] h-full font-[500]
             text-[14px] leading-[18.9px] text-white "
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
