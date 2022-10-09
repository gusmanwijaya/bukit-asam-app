import React from "react";

const ModalMenuTentang = ({ title, desc, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white w-[281px] h-[295px] rounded-2xl py-[30px] px-[20px] cursor-pointer"
    >
      <div className="flex flex-col justify-between">
        <div className="h-[230px]">
          <p className="text-[14px] text-blue1 font-poppins font-semibold">
            {title}
          </p>
          <div className="h-[2px]" />
          <p className="text-[12px] text-gray1 font-poppins font-normal">
            {desc}
          </p>
        </div>
        <div>
          <p className="text-[14px] italic text-blue1 font-poppins font-normal">
            Selengkapnya
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMenuTentang;
