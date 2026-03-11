
import React from "react";
import img1 from "../assets/studio.png";
import img2 from "../assets/camera.png";
import img3 from "../assets/canon.png";

export default function AboutMe() {
  return (
    <section className="bg-[#0c0c0c] text-white py-[20px] xl:py-[140px] relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between relative px-6">

        {/* LEFT CONTENT */}
        <div className="w-full xl:w-[650px]">

          <div className="flex items-center gap-4 xl:gap-6 mb-8 xl:mb-12">
            <div className="w-[80px] xl:w-[120px] h-[1px] bg-white"></div>
            <p className="text-gray-400 text-[18px] xl:text-[25px] tracking-wide">
              About me
            </p>
          </div>

          <h2 className="text-[26px] xl:text-[38px] leading-[34px] xl:leading-[42px] font-medium mb-6 xl:mb-10">
            Lorem ipsum dolor sit amet,
          
            consectetur adipiscing elit.
          </h2>

          <div className="w-full h-[2px] bg-white mb-6 xl:mb-10"></div>

          <p className="text-gray-400 leading-[28px] xl:leading-[32px] text-[15px] xl:text-[17px] mb-4 xl:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
          </p>

          <p className="text-gray-400 leading-[28px] xl:leading-[32px] text-[15px] xl:text-[17px]">
            Nunc, tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
          </p>

        </div>

        {/* RIGHT IMAGES */}
        <div
          className="
          relative w-full xl:w-[700px] xl:h-[600px]
          mt-12 xl:mt-0
          flex flex-row md:grid md:grid-cols-2
          xl:block
          gap-6
          overflow-x-auto  scrollbar-hide  md:overflow-visible
        "
        >

          {/* image 1 */}
          <img
            src={img1}
            alt=""
            className="
            min-w-[260px] h-[220px] object-cover
            md:w-full
            xl:absolute xl:top-0 xl:right-[60px] xl:w-[500px] xl:h-[370px]
            "
          />

          {/* image 2 */}
          <img
            src={img2}
            alt=""
            className="
            min-w-[260px] h-[220px] object-cover
            md:w-full
            xl:absolute xl:top-[250px] xl:right-[0px] xl:w-[460px] xl:h-[400px]
            "
          />

          {/* image 3 */}
          <img
            src={img3}
            alt=""
            className="
            min-w-[260px] h-[220px] object-cover
            md:col-span-2 md:w-full
            xl:absolute xl:bottom-[-160px] xl:left-[40px] xl:w-[480px] xl:h-[390px]
            "
          />

        </div>

      </div>

    </section>
  );
}

