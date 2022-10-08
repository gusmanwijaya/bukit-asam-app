/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../atoms/Button";
import ListPengumuman from "../../molecules/ListPengumuman";

const SectionPengumuman = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/illustration/illustration-8.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-[1540px] lg:h-[1052px] w-screen"
    >
      <div className="h-[1540px] lg:h-[1052px] w-screen bg-black bg-opacity-30">
        <div className="px-[27px] lg:px-[105px] pt-[77px]">
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-between">
            <div className="overflow-hidden w-[368px] h-[533px] lg:w-[497px] lg:h-[721px] rounded-lg hidden lg:flex lg:justify-center lg:items-center">
              <img
                src="/assets/illustration/illustration-5.png"
                alt="Illustration"
                className="object-cover"
              />
            </div>
            <div className="2xl:pr-[324px]">
              <h4 className="text-white text-[48px] font-poppins font-normal mb-[41px]">
                PENGUMUMAN
              </h4>
              <ListPengumuman
                src="/assets/icon/ic-pengumuman.svg"
                date="September 15, 2022"
                text="Pengumuman Permohonan Izin Lingkungan Kawasan Industri"
              />
              <ListPengumuman
                src="/assets/icon/ic-pengumuman.svg"
                date="September 15, 2022"
                text="Pengumuman Permohonan Izin Lingkungan Kawasan Industri"
              />
              <ListPengumuman
                src="/assets/icon/ic-pengumuman.svg"
                date="September 15, 2022"
                text="Pengumuman Permohonan Izin Lingkungan Kawasan Industri"
              />
              <ListPengumuman
                src="/assets/icon/ic-pengumuman.svg"
                date="September 15, 2022"
                text="Pengumuman Permohonan Izin Lingkungan Kawasan Industri"
              />
              <ListPengumuman
                src="/assets/icon/ic-pengumuman.svg"
                date="September 15, 2022"
                text="Pengumuman Permohonan Izin Lingkungan Kawasan Industri"
              />
              <Button text="Selengkapnya" />
            </div>
          </div>
          <div className="overflow-hidden w-[368px] h-[533px] rounded-lg mt-[31px] lg:hidden">
            <img
              src="/assets/illustration/illustration-5.png"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPengumuman;
