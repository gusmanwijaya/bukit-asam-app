import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../components/molecules/Header";
import SectionHero from "../components/organisms/SectionHero";
import SectionPengembanganBisnis from "../components/organisms/SectionPengembangBisnis";
import SectionESG from "../components/organisms/SectionESG";
import SectionBerita from "../components/organisms/SectionBerita";

export default function Home() {
  const backgroundImage = [
    {
      url: "/assets/illustration/carousel-1.png",
      text: "Untuk Ketahanan Energi Nasional dan Kesejahteraan Masyarakat",
    },
    {
      url: "/assets/illustration/carousel-2.png",
      text: "Mendukung Net Zero Emission Menuju Energy Bersih Masa Depan",
    },
    {
      url: "/assets/illustration/carousel-3.png",
      text: "Pembangunan Berkelanjutan Dilandasi Filosofi Tumbuh Bersama Lingkungan",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Home - Bukit Asam</title>
      </Head>
      <Header />
      <SectionHero backgroundImage={backgroundImage} />
      <SectionPengembanganBisnis />
      <SectionESG />
      <SectionBerita />
      <div className="h-[100px]" />
    </>
  );
}
