import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { menuContent } from '../lib/contants';

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center  lg:h-[200px] pt-[49px] pb-[52px] lg:pt-0">
      {/* Show this image on desktop view */}
      <Image
        src="/logo.svg"
        width={130}
        height={47}
        alt="tech time"
        className="hidden lg:block object-contain"
        priority
      />
      {/* Show this image on mobile view */}
      <Image
        src="/logo.svg"
        width={53}
        height={19}
        alt="tech time"
        priority
        className="block lg:hidden object-contain"
      />

      {/* Desktop View Menu */}
      <div className="lg:flex hidden items-center space-x-[40px]">
        <div className="flex items-center space-x-[24px]">
          {menuContent.map(item => (
            <Link
              href={'#'}
              className="text-[#AAC4E6]  focus:text-white text-[16px] font-[700]
             leading-[]"
            >
              {item}
            </Link>
          ))}
        </div>
        <button
          className="w-[145px] h-[54px] rounded-[4px]
               bg-white 
               text-[#004DB3] leading-[22px] font-[700] text-[16px]"
        >
          Enroll Now
        </button>
      </div>

      {/* Show Icon only on mobile view */}
      <div
        className="cursor-pointer"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {menuIsOpen ? (
          <span className="block cursor-pointer text-[20px] text-white h-[12px]">
            X
          </span>
        ) : (
          <Image
            src={'/menu_Icon.svg'}
            alt={'menu '}
            width={18}
            height={12}
            className="block lg:hidden"
            priority
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed h-screen w-[60%]  backdrop-blur-lg
       bg-[#004eb38f] flex flex-col items-center py-8  top-0  z-[4000] duration-700 ${
         menuIsOpen ? 'left-0' : '-left-full'
       }`}
      >
        <div>
          <Image
            src="/logo.svg"
            width={80}
            height={47}
            alt="tech time"
            className="object-contain"
            priority
          />

          <div className="flex flex-col  gap-[2rem] mt-8 ">
            {menuContent.map(item => (
              <Link
                href={'#'}
                className="text-[#AAC4E6]  focus:text-white text-[16px] font-[700]
             "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
