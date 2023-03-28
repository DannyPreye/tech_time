import Link from 'next/link';
import React from 'react';

const FooterLinks = ({ links, title }) => {
  return (
    <div className="">
      <h3 className="text-[24px] leading-[30px] lg:text-[32px] lg:leading-[39px] font-[600] ">
        {title}
      </h3>
      <div className="flex flex-col gap-[16px] mt-[24px] lg:mt-[32px]">
        {links.map((link, id) => (
          <Link
            href={'#'}
            key={id}
            className="font-[400] text-[16px] leading-[22px] lg:text-[24px] lg:leading-[32px] capitalize"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
