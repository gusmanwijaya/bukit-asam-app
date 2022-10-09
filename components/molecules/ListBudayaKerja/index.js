/* eslint-disable @next/next/no-img-element */
import React from "react";

const ListBudayaKerja = ({ src, title }) => {
  return (
    <div className="space-y-2 lg:space-y-4">
      <div className="w-[28px] h-[28px] lg:w-[42px] lg:h-[42px]">
        <img src={src} alt="Icon" />
      </div>
      <p className="text-[12px] lg:text-[14px] 2xl:text-[16px] text-blue1 font-poppins font-normal">
        {title}
      </p>
    </div>
  );
};

export default ListBudayaKerja;
