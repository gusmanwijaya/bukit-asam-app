/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Header from "../../molecules/Header";
import ListMenu from "../../molecules/ListMenu";

const SectionHero = ({ backgroundImage }) => {
  const [indexBackgroundImage, setIndexBackgroundImage] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIndexBackgroundImage(
        indexBackgroundImage + 1 > 2 ? 0 : indexBackgroundImage + 1
      );
    }, 10000);
  }, [indexBackgroundImage]);

  const handleNextBackgroundImage = () =>
    setIndexBackgroundImage(
      indexBackgroundImage + 1 > 2 ? 0 : indexBackgroundImage + 1
    );

  const handlePreviousBackgroundImage = () =>
    setIndexBackgroundImage(
      indexBackgroundImage - 1 < 0 ? 0 : indexBackgroundImage - 1
    );

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage[indexBackgroundImage]?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
        transitionDuration: "500ms",
      }}
      className="h-screen w-screen flex flex-col justify-between px-[30px] lg:px-[120px]"
    >
      <div className="pt-[157px] lg:pt-[415px] lg:flex lg:justify-between lg:items-center">
        <HiOutlineChevronLeft
          className="hidden lg:block w-[38px] h-[38px] text-white opacity-20 cursor-pointer"
          onClick={handlePreviousBackgroundImage}
        />
        <div>
          <h1 className="text-[46px] font-poppins text-white leading-tight font-light mb-[23px] lg:max-w-[1218px]">
            {backgroundImage[indexBackgroundImage]?.text}
          </h1>
          <div className="w-[184px] h-[54px] bg-transparent border border-white rounded-[80px] flex justify-center items-center">
            <p className="text-white font-poppins text-[16px] font-light">
              Learn More
            </p>
          </div>
        </div>
        <HiOutlineChevronRight
          className="hidden lg:block w-[38px] h-[38px] text-white opacity-20 cursor-pointer"
          onClick={handleNextBackgroundImage}
        />
      </div>
      <div className="flex lg:hidden flex-row items-center">
        <img
          src="/assets/illustration/ptba-mobile.png"
          alt="PTBA"
          className="w-[276px] h-[193px] mr-[41px]"
        />
        <div
          className="w-[51px] h-[51px] rounded-[25px] bg-yellow1 flex justify-center items-center cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <img src="/assets/icon/ic-menu-burger.svg" alt="Burger" />
        </div>
      </div>
      <div
        className={
          mobileMenu
            ? "lg:hidden fixed left-0 top-0 w-screen h-screen bg-white px-[30px] pt-[54px] pb-[68px] ease-in duration-500"
            : "lg:hidden fixed left-[-100%] top-0 px-[30px] pt-[54px] pb-[68px] ease-in duration-500"
        }
      >
        <Header type="mobile-menu" />
        <div className="h-[32px]" />
        <ListMenu isActive={true} text="Home" />
        <div className="h-[20px]" />
        <ListMenu text="Tentang" />
        <div className="h-[20px]" />
        <ListMenu text="Bisnis Kami" />
        <div className="h-[20px]" />
        <ListMenu text="Tata Kelola" />
        <div className="h-[20px]" />
        <ListMenu text="ESG" />
        <div className="h-[20px]" />
        <ListMenu text="Hubungan Investor" />
        <div className="h-[20px]" />
        <ListMenu text="Laporan" />
        <div className="h-[20px]" />
        <ListMenu text="Berita" />
        <div className="h-[20px]" />
        <ListMenu text="SDM" />
        <div className="h-[67px]" />
        <div className="max-w-[241px] mb-[8px]">
          <p className="text-[14px] text-gray2 font-poppins font-bold">
            Alamat
          </p>
          <p className="text-[14px] font-lato font-normal text-gray2">
            Jl. Parigi No.1, Tanjung Enim 31716 Sumatera Selatan
          </p>
        </div>
        <div className="max-w-[241px] mb-[8px]">
          <p className="text-[14px] text-gray2 font-poppins font-bold">
            Telepon
          </p>
          <p className="text-[14px] font-lato font-normal text-gray2">
            (021) 734 451 096
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="max-w-[241px] mb-[8px]">
            <p className="text-[14px] text-gray2 font-poppins font-bold">
              Email
            </p>
            <p className="text-[14px] font-lato font-normal text-gray2">
              Email: corsec@ptba.co.id
            </p>
          </div>
          <p className="uppercase text-[16px] font-poppins font-medium text-gray2 rotate-90">
            Close
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mt-[20px]">
          <div className="flex flex-row items-center space-x-[18px]">
            <img src="/assets/icon/ic-facebook-black.svg" alt="Icon" />
            <img src="/assets/icon/ic-instagram-black.svg" alt="Icon" />
            <img src="/assets/icon/ic-twitter-black.svg" alt="Icon" />
            <img src="/assets/icon/ic-linkedin-black.svg" alt="Icon" />
          </div>
          <img
            src="/assets/icon/ic-menu-close.svg"
            alt="Icon"
            className="mr-[10px]"
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <img
            src="/assets/illustration/menu-illustration.svg"
            alt="Menu Illustration"
          />
        </div>
      </div>

      <div className="hidden lg:flex justify-end">
        <img
          src="/assets/illustration/ptba-desktop.png"
          alt="PTBA"
          className="w-[615px] h-[174px]"
        />
      </div>
    </div>
  );
};

export default SectionHero;
