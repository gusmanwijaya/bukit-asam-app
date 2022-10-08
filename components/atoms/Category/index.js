/* eslint-disable @next/next/no-img-element */
import React from "react";

const Category = ({ src, text }) => {
  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:mb-[38px]">
      <img src={src} alt="Icon" className="lg:mr-[48px]" />
      <p className="text-[16px] font-poppins font-bold text-blue1 mt-[18px] lg:mt-0 lg:whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};

export default Category;
