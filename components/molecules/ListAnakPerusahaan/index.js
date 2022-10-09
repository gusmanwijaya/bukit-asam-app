/* eslint-disable @next/next/no-img-element */
import React from "react";

const ListAnakPerusahaan = ({ number, src, title, isLangsung }) => {
  return isLangsung ? (
    <div className="flex flex-col justify-between px-[14px] py-[30px] 2xl:px-[100px] 2xl:py-[100px] border-[1px] border-gray1/2">
      <div>
        <p className="text-[10px] lg:text-[12px] 2xl:text-[14px] text-gray1 font-poppins font-normal">
          {number}
        </p>
      </div>
      <div className="w-[150px] h-[90px]">
        <img src={src} alt="Anak Perusahaan" />
      </div>
      <div>
        <p className="text-[10px] lg:text-[12px] 2xl:text-[14px] text-gray1 font-poppins font-normal">
          {title}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-between px-[14px] py-[30px] 2xl:px-[100px] 2xl:py-[100px]">
      <div className="w-[150px] h-[90px]">
        <img src={src} alt="Anak Perusahaan" />
      </div>
      <div>
        <p className="text-[10px] lg:text-[12px] 2xl:text-[14px] text-gray1 font-poppins font-normal">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ListAnakPerusahaan;
