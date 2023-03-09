import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section class="bg-whiteRakamin text-black">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="font-sans bg-gradient-to-r text-black text-3xl font-extrabold  sm:text-5xl">
            Mulai Karir Digitalmu dalam Hitungan Bulan atau Dapatkan Refund 100%
          </h1>
          <p class="mx-auto mt-3 max-w-xl sm:text-lg sm:leading-relaxed">
            Kamu dapat belajar langsung bersama para ahli, menambah portfolio
            melalui real-project, dan dibimbing hingga mendapatkan kerja!
          </p>
          <div class="mt-8 flex flex-col justify-center items-center gap-4">
            <Link
              class="block px-16 py-4 rounded-xl border border-yellowRakamin bg-yellowRakamin  text-lg  text-Black  hover:text-white focus:outline-none focus:ring active:text-opacity-75 font-bold"
              to="/get-started">
              Lihat Kelas
            </Link>
            <h1 className="font-medium text-xl">Atau</h1>
            <Link
              class="block px-5 sm:px-16 py-3 sm:py-4 rounded-xl border border-lightGreen bg-lightGreen text-md  text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto font-bold"
              to="/about">
              Temukan karier Yang cocok dengan saya
            </Link>
            <p className="text-gray-500 font-medium font-sans text-md">
              Kami merancang kurikulum bersama para ahli, <br />
              Senior hingga VP Level yang bekerja di
            </p>
            <div className="flex flex-wrap sm:flex-row md:flex-row lg:flex-row justify-between items-center gap-8">
              <img
                src="https://rakamin-app.s3.ap-southeast-1.amazonaws.com/files/bukalapaklogogreyscale-904d26f9-7321-484c-b105-ee5c88d9ce45.png"
                alt=""
                width={80}
              />
              <img
                src="https://rakamin-app.s3.ap-southeast-1.amazonaws.com/files/travelokalogogreyscale-c63bdfbb-489b-4f90-8207-bf958a9f9c7b.png"
                alt=""
                width={80}
              />
              <img
                src="https://rakamin-app.s3.ap-southeast-1.amazonaws.com/files/gojeklogogreyscale-b605a172-2d00-40b0-9dd2-17addc31a154.png"
                alt=""
                width={80}
              />
              <img
                src="https://rakamin-app.s3.ap-southeast-1.amazonaws.com/files/xenditlogogreyscale-bfc9bf19-db8a-4557-951d-3c77d6e7f989.png"
                alt=""
                width={80}
              />
              <img
                src="https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/images/logoGrab_az-cbac041b-23f2-4e57-944b-cbc849eea590.png"
                alt=""
                width={80}
              />
              <img
                src="https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/images/logoNestleaz-e8fa2227-b599-4f3d-b8e2-019917991853.png"
                alt=""
                width={80}
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row">
          <img
            src="https://www.rakamin.com/assets/bg-picture-left.06232d70.webp"
            alt="photo1"
            className="absolute  sm:hidden top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="https://www.rakamin.com/assets/bg-picture-right.d4279510.webp"
            alt="photo2"
            className="absolute  sm:hidden top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Section;
