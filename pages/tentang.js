/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";
import Header from "../components/molecules/Header";
import ListTataNilai from "../components/molecules/ListTataNilai";
import ListTimeline from "../components/molecules/ListTimeline";
import ListBudayaKerja from "../components/molecules/ListBudayaKerja";
import SectionFooter from "../components/organisms/SectionFooter";
import ListAnakPerusahaan from "../components/molecules/ListAnakPerusahaan";

const Tentang = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Tentang - Bukit Asam</title>
      </Head>
      <Header />

      <section>
        <div
          style={{
            backgroundImage: `url("/assets/illustration/illustration-10.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="h-screen w-screen px-[30px] 2xl:px-[120px]"
        >
          {/* START: Breadcrumbs */}
          <div className="pt-[873px] -ml-[30px] lg:pt-[668px] 2xl:pt-[908px] 2xl:-ml-[120px]">
            <div className="flex justify-center items-center bg-white lg:w-[398px] lg:h-[53px] 2xl:w-[598px] 2xl:h-[93px] py-[26px] lg:px-[65px] w-[320px] h-[33px]">
              <p className="text-[14px] 2xl:text-[24px] font-poppins font-normal text-black">
                Home / Tentang /{" "}
                <span className="text-blue1 font-semibold">
                  Profile Perusahaan
                </span>
              </p>
            </div>
          </div>
          {/* END: Breadcrumbs */}
        </div>
      </section>

      <section>
        <div className="w-screen h-full bg-gray6 px-[30px] lg:px-[225px] py-[23px] lg:py-[50px]">
          <p className="text-[14px] lg:text-[18px] 2xl:text-[32px] font-poppins font-normal text-gray2">
            Kami terus transparan untuk membangun energi bersih untuk{" "}
            <span className="italic text-blue1 font-semibold">
              Peradaban, Kemakmuran,
            </span>{" "}
            dan{" "}
            <span className="italic text-blue1 font-semibold">
              Masa Depan yang Lebih Cerah
            </span>{" "}
            melalui inovasi, kualitas, dan keberlanjutan.
          </p>
          <div className="h-[23px]" />
          <p className="text-[12px] lg:text-[14px] 2xl:text-[24px] font-poppins font-normal text-gray1">
            Inovasi dan transformasi adalah kunci kami untuk merangkul masa
            depan. Bukit Asam semakin memperkuat fondasi untuk mencapai visinya
            menjadi perusahaan energi kelas dunia yang peduli lingkungan.
          </p>
          <div className="h-[23px] lg:h-[67px]" />
          <div
            className="overflow-hidden rounded-lg w-[360px] h-[220px] lg:w-[830px] lg:h-[383px] 2xl:w-[1430px] 2xl:h-[683px] flex justify-center items-center"
            style={{
              backgroundImage: `url("/assets/illustration/illustration-9.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[44px] h-[44px] lg:w-[54px] lg:h-[54px] 2xl:w-[70px] 2xl:h-[70px] 2xl:rounded-[70px] rounded-[22px] lg:rounded-[32px] bg-black bg-opacity-50 flex justify-center items-center">
              <BsPlayFill className="text-white w-[20px] h-[20px] 2xl:w-[35px] 2xl:h-[35px]" />
            </div>
          </div>
          <div className="h-[23px] lg:h-[38px]" />
          <div className="flex flex-row items-center">
            <div className="h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] mr-[25px] lg:mr-[50px]">
              <img src="/assets/icon/ic-visi.svg" alt="Icon" />
            </div>
            <div>
              <h6 className="text-[14px] lg:text-[16px] 2xl:text-[32px] font-poppins font-bold text-black">
                Visi
              </h6>
              <p className="text-[12px] lg:text-[14px] 2xl:text-[24px] font-poppins font-normal text-black">
                Perusahaan energi kelas dunia yang peduli lingkungan
              </p>
            </div>
          </div>
          <div className="h-[23px] lg:h-[48px]" />
          <div className="flex flex-row items-center">
            <div className="h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] mr-[25px] lg:mr-[50px]">
              <img src="/assets/icon/ic-misi.svg" alt="Icon" />
            </div>
            <div>
              <h6 className="text-[14px] lg:text-[16px] 2xl:text-[32px] font-poppins font-bold text-black">
                Misi
              </h6>
              <p className="text-[12px] lg:text-[14px] 2xl:text-[24px] font-poppins font-normal text-black max-w-[320px] lg:max-w-[670px] 2xl:max-w-[1300px]">
                Mengelola sumber energi dengan mengembangkan kompetensi
                perusahaan dan keunggulan manusia untuk memberikan nilai tambah
                yang maksimal bagi pemangku kepentingan dan lingkungan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-screen h-full bg-white px-[30px] lg:px-[225px] py-[23px] lg:py-[50px]">
          <h6 className="text-[16px] lg:text-[18px] 2xl:text-[32px] text-black font-poppins font-bold">
            Sejarah
          </h6>
          <div className="h-[23px]" />
          <ol className="items-center sm:flex 2xl:justify-center">
            <ListTimeline date="1923 to 1940" />
            <ListTimeline date="1950" />
            <ListTimeline date="1 Mar 1981" />
            <ListTimeline date="23 Dec 2002" />
            <ListTimeline date="29 Nov 2017" />
            <ListTimeline date="14 Dec 2017" />
            <ListTimeline date="2018" />
            <ListTimeline date="2019" isActive={true} />
            <ListTimeline date="2020" />
          </ol>
          <div className="h-[23px] 2xl:h-[56px]" />
          <div>
            <h6 className="text-[16px] lg:text-[18px] 2xl:text-[32px] font-poppins text-black font-bold">
              Ombilin Coal Mining Heritage
            </h6>
            <div className="h-[23px]" />
            <p className="text-[14px] lg:text-[16px] 2xl:text-[24px] font-poppins font-normal text-black">
              PTBA menerima Sertifikat Warisan Budaya Dunia Ombilin Coal Mining
              Heritage of Sawahlunto dari UNESCO.
            </p>
          </div>
          <div className="h-[23px]" />
          <div className="w-screen h-full -ml-[30px] -mb-[23px] lg:-ml-[225px] lg:-mb-[50px]">
            <img
              src="/assets/illustration/illustration-11.png"
              alt="Illustration"
            />
          </div>
        </div>
      </section>

      <section>
        <div
          className="w-screen h-full px-[30px] lg:px-[225px] py-[23px] lg:py-[50px] text-white"
          style={{
            backgroundImage: `url("/assets/illustration/illustration-12.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h6 className="text-[16px] lg:text-[18px] 2xl:text-[32px] font-poppins font-bold">
            Tata Nilai
          </h6>
          <div className="h-[23px]" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 2xl:gap-20">
            <ListTataNilai
              number="01"
              title="Amanah"
              desc="Memegang teguh kepercayaan yang diberikan"
              unorderList={[
                "Memenuhi janji dan komitmen",
                "Bertanggung jawab atas tugas, keputusan, dan tindakan yang dilakukan",
                "Berpegang teguh kepada nilai moral dan etika",
              ]}
            />
            <ListTataNilai
              number="02"
              title="Kompeten"
              desc="Terus belajar dan mengembangkan kapabilitas"
              unorderList={[
                "Meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah",
                "Membantu orang lain belajar",
                "Menyelesaikan tugas dengan kualitas terbaik",
              ]}
            />
            <ListTataNilai
              number="03"
              title="Amanah"
              desc="Memegang teguh kepercayaan yang diberikan"
              unorderList={[
                "Memenuhi janji dan komitmen",
                "Bertanggung jawab atas tugas, keputusan, dan tindakan yang dilakukan",
                "Berpegang teguh kepada nilai moral dan etika",
              ]}
            />
            <ListTataNilai
              number="04"
              title="Kompeten"
              desc="Terus belajar dan mengembangkan kapabilitas"
              unorderList={[
                "Meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah",
                "Membantu orang lain belajar",
                "Menyelesaikan tugas dengan kualitas terbaik",
              ]}
            />
            <ListTataNilai
              number="05"
              title="Amanah"
              desc="Memegang teguh kepercayaan yang diberikan"
              unorderList={[
                "Memenuhi janji dan komitmen",
                "Bertanggung jawab atas tugas, keputusan, dan tindakan yang dilakukan",
                "Berpegang teguh kepada nilai moral dan etika",
              ]}
            />
            <ListTataNilai
              number="06"
              title="Kompeten"
              desc="Terus belajar dan mengembangkan kapabilitas"
              unorderList={[
                "Meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah",
                "Membantu orang lain belajar",
                "Menyelesaikan tugas dengan kualitas terbaik",
              ]}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-screen h-full px-[30px] lg:px-[225px] py-[23px] lg:py-[50px] bg-gray6">
          <h6 className="text-[16px] lg:text-[18px] 2xl:text-[32px] text-black font-poppins font-bold">
            Budaya Kerja
          </h6>
          <div className="h-[23px] lg:h-[41px] 2xl:h-[91px]" />
          <div className="flex flex-row justify-between items-center">
            <ListBudayaKerja
              src="/assets/icon/ic-kerja-cerdas.svg"
              title="Kerja Cerdas"
            />
            <ListBudayaKerja
              src="/assets/icon/ic-kerja-keras.svg"
              title="Kerja Keras"
            />
            <ListBudayaKerja
              src="/assets/icon/ic-kerja-ikhlas.svg"
              title="Kerja Ikhlas"
            />
            <ListBudayaKerja
              src="/assets/icon/ic-kerja-tuntas.svg"
              title="Kerja Tuntas"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-screen h-full px-[30px] lg:px-[225px] py-[23px] lg:py-[50px] bg-white">
          <h6 className="text-[16px] lg:text-[18px] 2xl:text-[32px] text-black font-poppins font-bold">
            Anak Perusahaan
          </h6>
          <div className="h-[23px] lg:h-[41px]" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ListAnakPerusahaan
              isLangsung={true}
              number="01"
              src="/assets/illustration/anak-perusahaan-1.png"
              title="PT Bukit Pembangkit"
            />
            <ListAnakPerusahaan
              isLangsung={true}
              number="02"
              src="/assets/illustration/anak-perusahaan-2.png"
              title="PT Bukit Asam Prima"
            />
            <ListAnakPerusahaan
              isLangsung={true}
              number="03"
              src="/assets/illustration/anak-perusahaan-3.png"
              title="PT Bukit Asam Banko"
            />
            <ListAnakPerusahaan
              isLangsung={true}
              number="04"
              src="/assets/illustration/anak-perusahaan-4.png"
              title="PT Bukit Asam Transpacific"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-screen h-full px-[30px] lg:px-[225px] py-[23px] lg:py-[50px] bg-gray6">
          <h6 className="text-[16px] lg:text-[18px] 2xl:text-[32px] text-black font-poppins font-bold">
            Anak Perusahaan Tidak Langsung
          </h6>
          <div className="h-[23px] lg:h-[41px]" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ListAnakPerusahaan
              src="/assets/illustration/anak-perusahaan-tidak-1.png"
              title="PT Bukit Asam Prima"
            />
            <ListAnakPerusahaan
              src="/assets/illustration/anak-perusahaan-tidak-2.png"
              title="International Prima"
            />
            <ListAnakPerusahaan
              src="/assets/illustration/anak-perusahaan-tidak-3.png"
              title="Bukit Energi"
            />
            <ListAnakPerusahaan
              src="/assets/illustration/anak-perusahaan-tidak-4.png"
              title="PT Bukit Multi"
            />
          </div>
        </div>
      </section>

      <section>
        <SectionFooter />
      </section>
    </>
  );
};

export default Tentang;
