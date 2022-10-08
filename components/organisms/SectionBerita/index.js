import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import CardHorizontalScroll from "../../molecules/CardHorizontalScroll";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Button from "../../atoms/Button";

const SectionBerita = () => {
  return (
    <div className="bg-white pb-[44px]">
      <div className="flex flex-row justify-between items-center px-[27px] lg:px-[105px] pt-[53px] mb-[43px]">
        <h1 className="text-[32px] font-poppins font-normal text-gray2">
          Berita
        </h1>
        <div className="flex flex-row items-center lg:hidden">
          <div className="w-[36px] h-[36px] rounded-[18px] flex justify-center items-center border border-gray2">
            <HiOutlineChevronLeft />
          </div>
          <div className="w-[5px]" />
          <div className="w-[36px] h-[36px] rounded-[18px] flex justify-center items-center border border-gray2">
            <HiOutlineChevronRight />
          </div>
        </div>
        <div className="hidden lg:block">
          <Button text="Selengkapnya" />
        </div>
      </div>
      <div className="pl-[27px] lg:pl-[105px]">
        <ScrollMenu transitionBehavior="smooth">
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-1.png"
            title="PTBA Contributed Rp 9 Trillion for State Revenue Per Semester I 2022"
            date="September 20, 2022"
          />
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-2.png"
            title="Penjualan Batu Bara PTBA Meningkat Signifikan"
            date="September 15, 2022"
          />
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-3.png"
            title="Tiga Penghargaan Diraih PTBA di Ajang TOP GRC Awards 2022"
            date="September 15, 2022"
          />
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-4.png"
            title="Berkat Elektrifikasi dan Digitalisasi, PTBA Berhasil Meraih Kesuksesan"
            date="September 15, 2022"
          />
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-1.png"
            title="PTBA Contributed Rp 9 Trillion for State Revenue Per Semester I 2022"
            date="September 20, 2022"
          />
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-2.png"
            title="Penjualan Batu Bara PTBA Meningkat Signifikan"
            date="September 15, 2022"
          />
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-3.png"
            title="Tiga Penghargaan Diraih PTBA di Ajang TOP GRC Awards 2022"
            date="September 15, 2022"
          />
          <CardHorizontalScroll
            isNews={true}
            src="/assets/illustration/news-4.png"
            title="Berkat Elektrifikasi dan Digitalisasi, PTBA Berhasil Meraih Kesuksesan"
            date="September 15, 2022"
          />
        </ScrollMenu>
      </div>
    </div>
  );
};

export default SectionBerita;
