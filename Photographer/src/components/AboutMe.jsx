
import React from "react";
import img1 from "../assets/studio.png";
import img2 from "../assets/camera.png";
import img3 from "../assets/canon.png";

export default function AboutMe() {
  return (
    <section className="bg-[#0c0c0c] text-white py-[20px] lg:py-[140px] relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between relative px-6">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[650px]">

          <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-12">
            <div className="w-[80px] lg:w-[120px] h-[1px] bg-white"></div>
            <p className="text-gray-400 text-[18px] lg:text-[25px] tracking-wide">
              About me
            </p>
          </div>

          <h2 className="text-[26px] lg:text-[38px] leading-[34px] lg:leading-[42px] font-medium mb-6 lg:mb-10">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </h2>

          <div className="w-full h-[2px] bg-white mb-6 lg:mb-10"></div>

          <p className="text-gray-400 leading-[28px] lg:leading-[32px] text-[15px] lg:text-[17px] mb-4 lg:mb-6">
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

          <p className="text-gray-400 leading-[28px] lg:leading-[32px] text-[15px] lg:text-[17px]">
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
          relative w-full lg:w-[700px] lg:h-[600px]
          mt-12 lg:mt-0
          flex flex-row lg:block
          gap-6
          overflow-x-auto lg:overflow-visible
        "
        >

          {/* image 1 */}
          <img
            src={img1}
            alt=""
            className="
            min-w-[260px] h-[220px] object-cover
            lg:absolute lg:top-0 lg:right-[60px] lg:w-[500px] lg:h-[370px]
            "
          />

          {/* image 2 */}
          <img
            src={img2}
            alt=""
            className="
            min-w-[260px] h-[220px] object-cover
            lg:absolute lg:top-[250px] lg:right-[0px] lg:w-[460px] lg:h-[400px]
            "
          />

          {/* image 3 */}
          <img
            src={img3}
            alt=""
            className="
            min-w-[260px] h-[220px] object-cover
            lg:absolute lg:bottom-[-160px] lg:left-[40px] lg:w-[480px] lg:h-[390px]
            "
          />

        </div>

      </div>

    </section>
  );
}
