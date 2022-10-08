/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiCalendar } from "react-icons/bi";

const ListPengumuman = ({ src, date, text }) => {
  return (
    <div className="flex flex-row items-center mb-[40px] lg:mb-[31px]">
      <img src={src} alt="Icon" />
      <div className="w-[24px]" />
      <div>
        <div className="flex flex-row items-center">
          <BiCalendar className="text-white" />
          <div className="w-[10px]" />
          <p className="text-white">{date}</p>
        </div>
        <p className="text-white text-[16px] font-poppins font-normal max-w-[291px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ListPengumuman;
