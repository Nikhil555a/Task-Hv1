
import React from "react";
import { User, Image, Heart, Tv } from "lucide-react";

export default function MySkills() {
  return (
    <section className="bg-[#0c0c0c] text-white py-[40px] lg:py-[50px]">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-4 lg:gap-6 mb-[30px] lg:mb-[50px]">
          <div className="w-[80px] lg:w-[120px] h-[1px] bg-white"></div>

          <h2 className="text-[22px] lg:text-[28px] text-gray-300 font-light tracking-wide">
            My skills
          </h2>
        </div>

        {/* Skills */}
        <div
          className="
          flex lg:grid
          flex-row
          lg:grid-cols-4
          gap-[24px] lg:gap-[60px]
          overflow-x-auto lg:overflow-visible
        "
        >

          {/* Skill 1 */}
          <div className="flex flex-col items-center text-center min-w-[220px]">
            <User size={50} className="text-gray-200 mb-4 lg:mb-5 lg:w-[60px] lg:h-[60px]" />

            <h3 className="text-[24px] lg:text-[34px] font-medium mb-1">
              Lorem ipsum
            </h3>

            <p className="text-gray-400 text-[14px] lg:text-[16px] leading-6 lg:leading-7 w-[200px] lg:w-[240px]">
              Lorem ipsum dolor sit amet
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col items-center text-center min-w-[220px]">
            <Image size={50} className="text-gray-200 mb-4 lg:mb-5 lg:w-[60px] lg:h-[60px]" />

            <h3 className="text-[24px] lg:text-[34px] font-medium mb-1">
              Lorem ipsum
            </h3>

            <p className="text-gray-400 text-[14px] lg:text-[16px] leading-6 lg:leading-7 w-[200px] lg:w-[240px]">
              Lorem ipsum dolor sit amet
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center text-center min-w-[220px]">
            <Heart size={50} className="text-gray-200 mb-4 lg:mb-5 lg:w-[60px] lg:h-[60px]" />

            <h3 className="text-[24px] lg:text-[34px] font-medium mb-1">
              Lorem ipsum
            </h3>

            <p className="text-gray-400 text-[14px] lg:text-[16px] leading-6 lg:leading-7 w-[200px] lg:w-[240px]">
              Lorem ipsum dolor sit amet
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col items-center text-center min-w-[220px]">
            <Tv size={50} className="text-gray-200 mb-4 lg:mb-5 lg:w-[60px] lg:h-[60px]" />

            <h3 className="text-[24px] lg:text-[34px] font-medium mb-1">
              Lorem ipsum
            </h3>

            <p className="text-gray-400 text-[14px] lg:text-[16px] leading-6 lg:leading-7 w-[200px] lg:w-[240px]">
              Lorem ipsum dolor sit amet
              consectetur adipiscing elit.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
