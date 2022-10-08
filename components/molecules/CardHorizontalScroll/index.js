/* eslint-disable @next/next/no-img-element */
import React from "react";

const CardHorizontalScroll = ({ src, title, desc }) => {
  return (
    <div className="bg-gray4 w-[335px] lg:w-[757px] h-[467px] lg:h-[331px] mr-[14px] lg:flex lg:flex-row">
      <div className="px-[18px] py-[26px] lg:py-[45px] lg:px-[0px] lg:pl-[37px]">
        <img
          src={src}
          alt="Illustration"
          className="w-full lg:w-[354px] h-full lg:h-[241px] object-cover"
        />
      </div>
      <div className="px-[18px] pb-[26px] lg:pt-[45px] lg:px-0 lg:mx-auto">
        <p className="text-[21px] font-poppins font-normal text-gray5">
          {title}
        </p>
        <hr className="border/2 w-[56px] h-[0px] border-blue1 mt-[6px] lg:mt-[14px] mb-[10px] lg:mb-[14px]" />
        <p className="text-[14px] font-poppins font-normal text-gray1 leading-relaxed max-w-[268px] mb-[12px] lg:mb-[33px]">
          {desc}
        </p>
        <p className="underline italic text-[14px] text-redPTBA font-poppins font-normal">
          Selengkapnya
        </p>
      </div>
    </div>
  );
};

export default CardHorizontalScroll;
