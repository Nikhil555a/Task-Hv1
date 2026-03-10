
import React from "react";
import img1 from "../assets/Gallery1.png";
import img2 from "../assets/Gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/Gallery4.png";

export default function Gallery() {
  return (
    <section className="bg-[#0c0c0c] text-white py-[30px] lg:py-[80px]">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-4 lg:gap-6 mb-[30px] lg:mb-[60px]">
          <div className="w-[80px] lg:w-[120px] h-[1px] bg-gray-400"></div>

          <h2 className="text-[22px] lg:text-[30px] text-gray-300 font-light tracking-wide">
            My Gallary
          </h2>
        </div>

        {/* Mobile Text */}
        <p className="text-gray-400 text-[15px] leading-[26px] mb-[30px] lg:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed purus phasellus condimentum sed diam sem. Maecenas
          fermentum ac aliquet felis.
        </p>

        {/* Images */}
        <div
          className="
          flex lg:grid
          flex-row
          lg:grid-cols-4
          gap-[20px] lg:gap-[40px]
          overflow-x-auto lg:overflow-visible
          my-[30px] lg:my-[50px]
        "
        >

          <div className="min-w-[260px] h-[260px] lg:w-full lg:h-[420px] overflow-hidden">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="min-w-[260px] h-[260px] lg:w-full lg:h-[420px] overflow-hidden">
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="min-w-[260px] h-[260px] lg:w-full lg:h-[420px] overflow-hidden">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="min-w-[260px] h-[260px] lg:w-full lg:h-[420px] overflow-hidden">
            <img src={img4} alt="" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Bottom Text (Desktop Only) */}
        <p className="hidden lg:block text-gray-400 text-[18px] leading-[32px] text-center max-w-[850px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed purus phasellus condimentum sed diam sem. Maecenas
          fermentum ac aliquet felis.
        </p>

      </div>

    </section>
  );
}
