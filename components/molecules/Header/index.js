/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const Header = ({ type }) => {
  const [onChangeScroll, setOnChangeScroll] = useState(false);

  useEffect(() => {
    const handleOnChangeScroll = () => {
      window.scrollY >= 600
        ? setOnChangeScroll(true)
        : setOnChangeScroll(false);
    };
    window.addEventListener("scroll", handleOnChangeScroll);
  }, []);

  return type === "mobile-menu" ? (
    <div className="flex flex-row justify-between items-center">
      <img src="/assets/logo/logo.svg" alt="Logo" />
      <div className="flex flex-row items-center">
        <img
          src="/assets/icon/ic-search-black.svg"
          alt="Icon"
          className="mr-[20px] w-[28px] h-[28px]"
        />
        <p className="text-[16px] font-poppins">Search</p>
      </div>
    </div>
  ) : (
    <div
      className={`fixed z-50 left-0 top-0 right-0 py-[54px] lg:py-[16px] px-[30px] 2xl:px-[120px] ${
        onChangeScroll && "bg-white bg-opacity-95"
      }`}
    >
      <div className="hidden lg:flex flex-row justify-end items-center space-x-[36px] pr-[78px] mb-[16px]">
        <p
          className={`font-poppins text-[20px] italic font-extralight uppercase cursor-pointer ${
            onChangeScroll ? "text-gray2" : "text-white"
          }`}
        >
          Laporan
        </p>
        <p
          className={`font-poppins text-[20px] italic font-extralight uppercase cursor-pointer ${
            onChangeScroll ? "text-gray2" : "text-white"
          }`}
        >
          Berita •
        </p>
        <p
          className={`font-poppins text-[20px] italic font-extralight uppercase cursor-pointer ${
            onChangeScroll ? "text-gray2" : "text-white"
          }`}
        >
          SDM •
        </p>
        <div className="flex flex-row w-[16px] h-[16px] space-x-[10px]">
          <img
            className="cursor-pointer"
            src={`/assets/icon/ic-facebook-${
              onChangeScroll ? "black" : "white"
            }.svg`}
            alt="Facebook"
          />
          <img
            className="cursor-pointer"
            src={`/assets/icon/ic-instagram-${
              onChangeScroll ? "black" : "white"
            }.svg`}
            alt="Instagram"
          />
          <img
            className="cursor-pointer"
            src={`/assets/icon/ic-twitter-${
              onChangeScroll ? "black" : "white"
            }.svg`}
            alt="Twitter"
          />
          <img
            className="cursor-pointer"
            src={`/assets/icon/ic-linkedin-${
              onChangeScroll ? "black" : "white"
            }.svg`}
            alt="LinkedIn"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <img
            src={
              onChangeScroll
                ? "/assets/logo/logo.svg"
                : "/assets/logo/logo-white.svg"
            }
            alt="Logo"
            className="mr-[30px] lg:mr-[60px] cursor-pointer"
          />
          <div className="flex flex-row">
            <div className="border-b border-yellow1 mr-[16px] cursor-pointer">
              <p className="font-poppins text-[16px] text-yellow1 lg:text-gray1 font-bold">
                EN
              </p>
            </div>
            <p className="font-poppins text-[16px] font-bold text-gray1 cursor-pointer">
              ID
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center lg:space-x-[32px]">
          <p className="text-yellow1 font-poppins text-[20px] font-normal uppercase cursor-pointer">
            Beranda
          </p>
          <p
            className={`font-poppins text-[20px] font-normal uppercase cursor-pointer ${
              onChangeScroll ? "text-gray2" : "text-white"
            }`}
          >
            Tentang •
          </p>
          <p
            className={`font-poppins text-[20px] font-normal uppercase cursor-pointer ${
              onChangeScroll ? "text-gray2" : "text-white"
            }`}
          >
            Bisnis Kami •
          </p>
          <p
            className={`font-poppins text-[20px] font-normal uppercase cursor-pointer ${
              onChangeScroll ? "text-gray2" : "text-white"
            }`}
          >
            ESG •
          </p>
          <p
            className={`font-poppins text-[20px] font-normal uppercase cursor-pointer ${
              onChangeScroll ? "text-gray2" : "text-white"
            }`}
          >
            Hubungi Investor •
          </p>
          <div
            className={`w-[40px] h-[40px] rounded-[20px] hidden lg:flex items-center justify-center cursor-pointer ${
              onChangeScroll ? "bg-gray3" : "bg-white"
            }`}
          >
            <img
              src={`/assets/icon/ic-search-${
                onChangeScroll ? "white" : "black"
              }.svg`}
              alt="Search"
            />
          </div>
        </div>
        <img
          src={`/assets/icon/ic-search-${
            onChangeScroll ? "black" : "white"
          }.svg`}
          alt="Search"
          className="cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
};

export default Header;
