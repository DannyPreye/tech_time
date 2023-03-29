import Image from 'next/image';
import React from 'react';
import { Hero } from '..';
import Footer from '../Footer';
import Nav from '../Nav';

const HomePage = ({ children }) => {
  return (
    <div className="font-satoshi">
      <div className="bg-[#004db4]  relative ">
        <Image src="/desktop/hero_design.svg" fill alt="hero " priority />
        <div className="container mx-auto relative px-5">
          <Nav />
          <Hero />
        </div>
      </div>
      <div className="bg-[#F8F9FC]">{children}</div>

      <Footer />
    </div>
  );
};

export default HomePage;
