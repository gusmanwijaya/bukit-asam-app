import React from "react";
import Button from "../../atoms/Button";
import { BsPlayFill } from "react-icons/bs";

const SectionTentangKami = () => {
  return (
    <div className="w-[428px] h-[658px] bg-gray6 px-[27px] pt-[46px] lg:w-screen lg:h-[502px] lg:flex lg:flex-row-reverse lg:items-center 2xl:justify-center">
      <div
        style={{
          backgroundImage: `url("/assets/illustration/illustration-9.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[365px] h-[230px] rounded-2xl overflow-hidden lg:w-[676px] lg:h-[428px] flex justify-center items-center cursor-pointer lg:-mt-[500px]"
      >
        <div className="w-[44px] h-[44px] rounded-[22px] bg-black flex justify-center items-center">
          <BsPlayFill className="text-white w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="lg:mr-[73px] 2xl:mr-[280px]">
        <h6 className="text-white text-[48px] font-poppins font-normal uppercase hidden lg:block lg:-mt-[400px]">
          Tentang Kami
        </h6>
        <div className="h-[27px] lg:h-[76px] 2xl:h-[100px]" />
        <p className="text-black text-[18px] font-poppins font-normal lg:max-w-[644px]">
          Inovasi dan transformasi bagi kami adalah suatu keniscayaan, karena
          kami ingin meraih masa depan. Dari perusahaan pertambangan batu bara,
          kami ingin menjadi perusahaan energi kelas dunia,yang peduli
          lingkungan. Itulah visi kami.
        </p>
        <div className="h-[26px]" />
        <Button text="Selengkapnya" />
      </div>
    </div>
  );
};

export default SectionTentangKami;
