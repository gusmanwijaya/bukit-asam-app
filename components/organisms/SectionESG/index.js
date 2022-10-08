/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Button from "../../atoms/Button";

const SectionESG = () => {
  return (
    <div className="bg-gray6 px-[30px] 2xl:px-[105px] py-[56px] lg:flex lg:flex-row 2xl:z-0">
      <div className="flex flex-row items-center justify-between lg:hidden">
        <h1 className="text-[48px] text-blue1 font-poppins font-normal uppercase">
          ESG
        </h1>
        <div className="flex flex-row items-center">
          <div className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center bg-white cursor-pointer">
            <HiOutlineChevronLeft className="w-[25px] h-[25px]" />
          </div>
          <div className="w-[12px]" />
          <div className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center bg-white cursor-pointer">
            <HiOutlineChevronRight className="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between 2xl:justify-between lg:items-center lg:space-x-[20px] 2xl:space-x-0 2xl:w-full">
        <div className="lg:flex lg:flex-row lg:items-center lg:space-x-[30px]">
          <div className="w-[50px] h-[50px] rounded-[25px] hidden lg:flex justify-center items-center bg-white cursor-pointer">
            <HiOutlineChevronLeft className="w-[25px] h-[25px]" />
          </div>
          <div>
            <h1 className="text-[48px] text-blue1 font-poppins font-normal uppercase hidden lg:block">
              ESG
            </h1>
            <div className="h-[38px] lg:h-[108px]" />
            <h6 className="capitalize text-[32px] font-poppins font-normal text-blue1">
              Kinerja Lingkungan
            </h6>
            <div className="h-[26px]" />
            <p className="capitalize text-[24px] font-poppins font-normal text-gray5">
              Kinerja Sosial
            </p>
            <div className="h-[8px]" />
            <p className="capitalize text-[24px] font-poppins font-normal text-gray5">
              Kinerja Ekonomi Tata Kelola
            </p>
          </div>
        </div>
        <div className="h-[38px]" />
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg lg:w-[206px] lg:h-[335px] 2xl:w-[506px] 2xl:h-[635px] 2xl:z-10 2xl:-mb-[90px] 2xl:shadow-xl">
          <img
            src="/assets/illustration/illustration-4.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[36px]" />
        <div className="lg:flex lg:flex-row lg:items-center lg:space-x-[20px]">
          <div>
            <p className="text-[18px] font-poppins font-normal text-gray2 lg:max-w-[446px]">
              Upaya pengelolaan lingkungan dilakukan sesuai dengan komitmen
              Perusahaan dalam dokumen Rencana Pengelolaan Lingkungan dan
              Rencana Pemantauan Lingkungan serta dokumen Upaya Pengelolaan
              Lingkungan dan Upaya Pemantauan Lingkungan yang dituangkan dalam
              Rencana Kerja Tahunan Teknis dan Lingkungan
            </p>
            <div className="h-[21px]" />
            <Button text="Selengkapnya" />
          </div>
          <div className="w-[50px] h-[50px] rounded-[25px] lg:flex justify-center items-center bg-white hidden cursor-pointer">
            <HiOutlineChevronRight className="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionESG;
