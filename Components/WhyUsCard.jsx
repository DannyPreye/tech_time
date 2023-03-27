import Image from 'next/image';

const WhyUsCard = ({ data }) => {
  return (
    <div
      className="w-[194px] h-[189px] lg:w-[307px] lg:h-[302px]  bg-white rounded-[8px] 
            flex-shrink-0 py-[24px] lg:py-[32px] px-[16px] lg:px-[24px]"
    >
      <Image
        src={data.src}
        width={48}
        height={48}
        className="hidden lg:block"
      />
      <Image
        src={data.src}
        width={32}
        height={32}
        className="block lg:hidden"
      />
      <p className="capitalize text-[12px] lg:text-[16px] leading-[16.2px] lg:leading-[21.6px] font-[700] mt-[24px]">
        {data.title}
      </p>
      <p className="text-[8px] leading-[16px] lg:text-[12px] font-[500] lg:leading-[28px] text-[#A1A1A1]">
        {data.text}
      </p>
    </div>
  );
};

export default WhyUsCard;
