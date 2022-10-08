/* eslint-disable @next/next/no-img-element */
import React from "react";

const SectionFooter = () => {
  return (
    <div className="bg-blue1 px-[30px] 2xl:px-[105px] pt-[69px] pb-[43px]">
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-start">
        <div className="w-full lg:w-[250px] 2xl:w-[428px] h-full">
          <img src="/assets/logo/logo-white.svg" alt="Logo" />
          <div className="h-[27px]" />
          <p className="text-white text-[14px] font-lato font-normal">
            Sejalan dengan visi menjadi perusahan energi kelas dunia yang peduli
            lingkungan, Bukit Asam terus melakukan inovasi dalam bisnis energi
            berbasis batu bara, renewable energy, dan proyek hilirisasi batu
            bara.{" "}
          </p>
        </div>
        <div className="h-[27px]" />
        <div className="flex flex-row justify-between items-center lg:items-start lg:space-x-[50px] 2xl:space-x-[145px] lg:pt-[55px]">
          <div className="space-y-[8px]">
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              TENTANG
            </p>
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              BISNIS KAMI
            </p>
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              TATA KELOLA
            </p>
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              ESG
            </p>
          </div>
          <div className="space-y-[8px]">
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              HUBUNGAN INVESTOR
            </p>
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              LAPORAN
            </p>
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              BERITA
            </p>
            <p className="text-white uppercase font-poppins text-[14px] font-normal">
              SDM
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-col">
            <div>
              <p className="text-white text-[14px] font-poppins font-normal mb-[14px]">
                CONTACT
              </p>
              <p className="text-white text-[14px] font-poppins font-normal max-w-[242px] mb-[2px]">
                Jl. Parigi No.1, Tanjung Enim 31716 Sumatera Selatan
              </p>
              <p className="text-white text-[14px] font-poppins font-normal mb-[2px]">
                (021) 734 451 096{" "}
              </p>
              <p className="text-white text-[14px] font-poppins font-normal">
                Email: corsec@ptba.co.id
              </p>
            </div>
            <div className="lg:flex flex-row items-center space-x-[10px] hidden lg:pt-[43px]">
              <img
                src="/assets/icon/ic-facebook-white.svg"
                alt="Social Media"
              />
              <img
                src="/assets/icon/ic-instagram-white.svg"
                alt="Social Media"
              />
              <img src="/assets/icon/ic-twitter-white.svg" alt="Social Media" />
              <img
                src="/assets/icon/ic-linkedin-white.svg"
                alt="Social Media"
              />
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-[16px]">
            <img
              src="/assets/illustration/footer-1-white.png"
              alt="Footer"
              className="w-[35px] h-[51px]"
            />
            <img
              src="/assets/illustration/footer-2-white.png"
              alt="Footer"
              className="w-[110px] h-[37px]"
            />
            <img
              src="/assets/illustration/footer-3-white.png"
              alt="Footer"
              className="w-[85px] h-[37px]"
            />
          </div>
        </div>
      </div>
      <div className="h-[27px] lg:hidden" />
      <div className="flex flex-row items-center space-x-[16px] lg:hidden">
        <img
          src="/assets/illustration/footer-1.png"
          alt="Footer"
          className="w-[35px] h-[51px]"
        />
        <img
          src="/assets/illustration/footer-2.png"
          alt="Footer"
          className="w-[110px] h-[37px]"
        />
        <img
          src="/assets/illustration/footer-3.png"
          alt="Footer"
          className="w-[85px] h-[37px]"
        />
      </div>
      <div className="h-[27px] lg:hidden" />
      <div className="lg:hidden">
        <p className="text-white text-[14px] font-poppins font-normal mb-[14px]">
          CONTACT
        </p>
        <p className="text-white text-[14px] font-poppins font-normal max-w-[242px] mb-[2px]">
          Jl. Parigi No.1, Tanjung Enim 31716 Sumatera Selatan
        </p>
        <p className="text-white text-[14px] font-poppins font-normal mb-[2px]">
          (021) 734 451 096{" "}
        </p>
        <p className="text-white text-[14px] font-poppins font-normal">
          Email: corsec@ptba.co.id
        </p>
      </div>
      <div className="h-[27px] lg:hidden" />
      <div className="flex flex-row items-center space-x-[10px] lg:hidden">
        <img src="/assets/icon/ic-facebook-white.svg" alt="Social Media" />
        <img src="/assets/icon/ic-instagram-white.svg" alt="Social Media" />
        <img src="/assets/icon/ic-twitter-white.svg" alt="Social Media" />
        <img src="/assets/icon/ic-linkedin-white.svg" alt="Social Media" />
      </div>
      <div className="h-[27px]" />
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
        <p className="text-white text-[14px] font-poppins font-normal max-w-[250px] lg:max-w-[428px] mb-[9px]">
          ©Copyright 2022 PT Bukit Asam Tbk All Rights Reserved
        </p>
        <p className="text-white text-[14px] font-poppins font-normal">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SectionFooter;
