import React from "react";
import Button from "../../atoms/Button";

const SectionKarir = () => {
  return (
    <div className="px-[27px] lg:px-[105px] 2xl:px-[155px] py-[46px] bg-white lg:flex lg:flex-row lg:items-center lg:justify-between">
      <h1 className="text-[48px] text-gray3 font-poppins font-light max-w-[297px] mb-[21px] lg:mb-0">
        KARIR di <span className="font-bold">BUKIT ASAM</span>{" "}
      </h1>
      <div>
        <p className="text-[16px] font-poppins font-normal text-black lg:max-w-[500px] 2xl:max-w-[718px] lg:mb-[35px]">
          <span className="text-redMindID">Waspada penipuan</span>, Rekrutmen
          hanya akan diumumkan melalui situs resmi perusahaan & surat kabar
          nasional
        </p>
        <div className="hidden lg:block">
          <Button text="Klik Di Sini" />
        </div>
      </div>
    </div>
  );
};

export default SectionKarir;
