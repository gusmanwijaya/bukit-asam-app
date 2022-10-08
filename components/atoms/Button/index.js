import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-[175px] h-[56px] bg-blue1 p-[14px]">
      <p className="text-center text-white font-poppins text-[18px] font-normal">
        {text}
      </p>
    </div>
  );
};

export default Button;
