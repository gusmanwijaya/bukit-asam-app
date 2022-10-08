/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiCalendar } from "react-icons/bi";

const CardHorizontalScroll = ({ src, title, desc, isNews, date }) => {
  return !isNews ? (
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
  ) : (
    <div className="w-[260px] h-[250px] mr-[14px]">
      <img
        src={src}
        alt="Illustration"
        className="w-[260px] h-[146px] object-cover mb-[16px]"
      />
      <div className="lg:flex lg:flex-row lg:items-center">
        <div className="hidden lg:block lg:mr-[10px]">
          <BiCalendar />
        </div>
        <p className="text-[7px] lg:text-[14px] text-blue1 font-poppins font-normal mb-[2px] lg:mb-0">
          {date}
        </p>
      </div>
      <p className="text-[10px] lg:text-[16px] text-gray2 font-poppins font-normal max-w-[238px] lg:max-w-[379px]">
        {title}
      </p>
    </div>
  );
};

export default CardHorizontalScroll;
