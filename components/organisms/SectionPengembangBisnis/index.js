/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Marquee from "react-fast-marquee";
import Category from "../../atoms/Category";
import CardHorizontalScroll from "../../molecules/CardHorizontalScroll";
import Button from "../../atoms/Button";

const SectionPengembanganBisnis = () => {
  return (
    <>
      <div className="bg-white px-[45px] lg:px-0 pt-[59px] lg:pt-[80px] mb-[47px] lg:mb-0 lg:flex lg:flex-row lg:items-center">
        <div className="grid grid-cols-2 gap-6 lg:gap-0 lg:flex lg:flex-col lg:grid-cols-none lg:pl-[110px] 2xl:pl-[200px] lg:w-full 2xl:max-w-[710px]">
          <Category
            src="/assets/icon/ic-sistem-pengaduan.svg"
            text="Sistem Pengaduan"
          />
          <Category
            src="/assets/icon/ic-eprocurement.svg"
            text="E Procurement"
          />
          <Category
            src="/assets/icon/ic-laporan-tahunan.svg"
            text="Laporan Tahunan"
          />
          <Category src="/assets/icon/ic-siaran-pers.svg" text="Siaran Pers" />
        </div>
        <div className="overflow-hidden ml-[20px] z-0 hidden lg:block">
          <ScrollMenu transitionBehavior="smooth">
            <CardHorizontalScroll
              src="/assets/illustration/illustration-1.png"
              title="Hari Kesaktian Pancasila"
              desc="Hari Kesaktian Pancasila adalah hari nasional dan diperingati
                setelah Peristiwa Gerakan 30 September atau yang lebih dikenal
                sebagai G30S/PKI."
            />
            <CardHorizontalScroll
              src="/assets/illustration/illustration-2.png"
              title="Membangun Budaya Innovasi"
              desc="Beradaptasi terhadap setiap perubahan yang terjadi"
            />
            <CardHorizontalScroll
              src="/assets/illustration/illustration-1.png"
              title="GREENOVATOR Indonesia"
              desc="Daftarkan ide-ide terbaik dalam 'GREENOVATOR' Indonesia, untuk menjadi bagian dari inovator inspiratif Indonesia yang menghijaukan bumi"
            />
            <CardHorizontalScroll
              src="/assets/illustration/illustration-2.png"
              title="Coal to DME"
              desc="Batubara bisa ditingkatkan nilainya menjadi energi olahan lain yang lebih ramah lingkungan untuk masa depan, salah satunya dengan mengkonversinya menjadi DME."
            />
          </ScrollMenu>
        </div>
      </div>
      <div className="pl-[30px] z-0 lg:hidden">
        <ScrollMenu transitionBehavior="smooth">
          <CardHorizontalScroll
            src="/assets/illustration/illustration-1.png"
            title="Hari Kesaktian Pancasila"
            desc="Hari Kesaktian Pancasila adalah hari nasional dan diperingati
                setelah Peristiwa Gerakan 30 September atau yang lebih dikenal
                sebagai G30S/PKI."
          />
          <CardHorizontalScroll
            src="/assets/illustration/illustration-2.png"
            title="Membangun Budaya Innovasi"
            desc="Beradaptasi terhadap setiap perubahan yang terjadi"
          />
          <CardHorizontalScroll
            src="/assets/illustration/illustration-1.png"
            title="GREENOVATOR Indonesia"
            desc="Daftarkan ide-ide terbaik dalam 'GREENOVATOR' Indonesia, untuk menjadi bagian dari inovator inspiratif Indonesia yang menghijaukan bumi"
          />
          <CardHorizontalScroll
            src="/assets/illustration/illustration-2.png"
            title="Coal to DME"
            desc="Batubara bisa ditingkatkan nilainya menjadi energi olahan lain yang lebih ramah lingkungan untuk masa depan, salah satunya dengan mengkonversinya menjadi DME."
          />
        </ScrollMenu>
      </div>

      <div className="h-[64px]" />

      <div className="px-[30px] lg:px-[105px]">
        <h1 className="text-black font-poppins font-normal text-[32px] mb-[30px] uppercase">
          PENGEMBANGAN BISNIS
        </h1>
        <p className="font-lato text-[21px] text-gray2 font-normal max-w-[363px] lg:max-w-full">
          Pengembangan bisnis kami terdiri Generik (Tambang & Infrastruktur),
          pengembangan bisnis pembangkit, hilirisasi batubara dan bisnis
          pendukung
        </p>
      </div>

      <div className="h-[47px]" />

      <div className="lg:flex lg:flex-row px-[30px] lg:px-[105px]">
        <img
          src="/assets/illustration/pengembang-bisnis-illustration.svg"
          alt="Illustration"
          className="hidden lg:block lg:mr-[49px] lg:w-[602px] lg:h-[528px] lg:object-cover"
        />
        <div>
          <div className="flex flex-row justify-between items-center mb-[23px]">
            <h1 className="font-poppins text-[24px] text-black font-normal uppercase">
              BATU BARA
            </h1>
            <img src="/assets/icon/ic-plus-rounded.svg" alt="Icon" />
          </div>
          <div className="mb-[42px]">
            <div className="flex flex-row justify-between items-center mb-[23px]">
              <h1 className="font-poppins text-[24px] text-blue1 font-bold uppercase">
                PEMBANGKIT
              </h1>
              <img src="/assets/icon/ic-minus-rounded.svg" alt="Icon" />
            </div>
            <div>
              <img
                src="/assets/illustration/pengembang-bisnis-illustration.svg"
                alt="Illustration"
                className="mb-[23px] lg:hidden"
              />
              <p className="mb-[27px] font-poppins text-[18px] font-normal text-gray2 max-w-[338px] lg:max-w-full">
                Pengembangan bisnis pembangkit listrik (Investasi, Engineering,
                Procurement, Construction (EPC), Operation & Maintenance (O&M))
                dalam lingkup nasional & regional, serta pengembangan kompetensi
                perusahaan di bidang kelistrikan, melalui investasi dan kerja
                sama strategis untuk pengembangan pembangkit & usaha EPC dan
                O&M.
              </p>
              <Button text="Selengkapnya" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mb-[86px]">
            <h1 className="font-poppins text-[24px] text-black font-normal uppercase">
              BENEFISIASI
            </h1>
            <img src="/assets/icon/ic-plus-rounded.svg" alt="Icon" />
          </div>
        </div>
      </div>

      <div className="lg:h-[98px]" />

      <Marquee speed={50}>
        <p className="stroke-text">
          INOVASI, TRANSFORMASI MENUJU ENERGY BERSIH MASA DEPAN
        </p>
      </Marquee>

      <div className="h-[14px]" />
    </>
  );
};

export default SectionPengembanganBisnis;
