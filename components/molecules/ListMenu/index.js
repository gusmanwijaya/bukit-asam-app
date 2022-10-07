import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const ListMenu = ({ isActive, text }) => {
  return isActive ? (
    <p className="text-[22px] font-poppins font-bold text-gray2">{text}</p>
  ) : (
    <div className="flex flex-row items-center justify-between">
      <p className="text-[22px] text-gray2 font-poppins font-light">{text}</p>
      <HiOutlineChevronRight className="mr-[80px]" />
    </div>
  );
};

export default ListMenu;
