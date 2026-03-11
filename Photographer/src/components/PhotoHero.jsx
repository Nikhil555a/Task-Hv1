
import React from "react";
import img1 from "../assets/photo1.png";
import img2 from "../assets/photo2.png";

export default function PhotoHero() {
  return (
    <section className="bg-[#0c0c0c] min-h-screen flex items-center justify-center text-white relative overflow-hidden">

      <div className="w-full xl:w-[1300px] flex flex-col xl:flex-row items-center justify-between relative px-8">

        {/* LEFT IMAGE */}
        <div
          className="
          w-full md:max-w-[1100px] h-[240px] mb-6 mt-[10px]

          xl:absolute xl:bottom-[-140px] xl:left-[-60px] xl:w-[780px] xl:h-[500px]

          z-10
        "
        >
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER IMAGE (Desktop only) */}
        <div
          className="
          hidden xl:block

          xl:absolute xl:left-[330px] xl:my-[40px] xl:w-[480px] xl:h-[650px]

          z-20
        "
        >
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
          w-full md:max-w-[1100px] text-center

          xl:ml-[850px] xl:max-w-[500px] xl:text-left
        "
        >

          <p className="tracking-[4px] xl:tracking-[6px] text-white text-[16px] xl:text-[20px] mb-4 xl:mb-6">
            ALEX VOLKAV
          </p>

          <h1 className="text-[24px] xl:text-[30px] leading-[36px] xl:leading-[56px] font-semibold mb-4 xl:mb-6">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </h1>

          <div className="w-full h-[2px] xl:h-[3px] bg-white mb-6 xl:mb-8"></div>

          <p className="text-gray-400 text-[14px] xl:text-[16px] leading-6 xl:leading-7 mb-4 xl:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc, tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
          </p>

          <p className="text-gray-400 text-[14px] xl:text-[16px] leading-6 xl:leading-7 mb-8 xl:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc, tincidunt sed purus phasellus Lorem ipsum dolor sit amet.
          </p>

          <div className="flex gap-4 xl:gap-5 justify-center xl:justify-center">

            <button className="px-6 xl:px-10 py-2 bg-gray-700 rounded-full font-semibold text-[16px] xl:text-[20px] hover:bg-gray-600">
              About me
            </button>

            <button className="px-6 xl:px-10 py-2 bg-gray-700 rounded-full font-semibold text-[16px] xl:text-[20px] hover:bg-gray-600">
              Contact me
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

