import Image from 'next/image';
import React from 'react';
import { Hero } from '..';
import Nav from '../Nav';

const HomePage = ({ children }) => {
  return (
    <div className="">
      <div className="bg-[#004db4]  relative h-fit">
        <Image src="/desktop/hero_design.svg" fill alt="hero " priority />
        <div className="container mx-auto relative px-5">
          <Nav />
          <Hero />
        </div>
      </div>
      <div className="bg-[#F8F9FC]">{children}</div>
    </div>
  );
};

export default HomePage;
