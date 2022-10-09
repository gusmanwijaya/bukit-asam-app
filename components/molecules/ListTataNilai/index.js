import React from "react";

const ListTataNilai = ({ number, title, desc, unorderList }) => {
  return (
    <div>
      <h6 className="text-[12px] lg:text-[14px] 2xl:text-[24px] font-poppins font-medium">
        {number}
      </h6>
      <div className="h-[10px] lg:h-[20px]" />
      <h3 className="uppercase text-[16px] lg:text-[18px] 2xl:text-[32px] font-poppins font-medium">
        {title}
      </h3>
      <div className="h-[10px]" />
      <hr className="border/2 border-white w-full" />
      <div className="h-[10px]" />
      <div>
        <p className="text-[12px] lg:text-[14px] 2xl:text-[16px] text-white font-poppins font-normal">
          {desc}
        </p>
        <ul className="list-disc pl-[22px] text-[12px] lg:text-[14px] 2xl:text-[16px] text-white font-poppins font-normal">
          {unorderList?.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListTataNilai;
