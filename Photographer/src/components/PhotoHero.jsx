
import React from "react";
import img1 from "../assets/photo1.png";
import img2 from "../assets/photo2.png";

export default function PhotoHero() {
  return (
    <section className="bg-[#0c0c0c] min-h-screen flex items-center justify-center text-white relative overflow-hidden">

      <div className="w-full lg:w-[1300px] flex flex-col lg:flex-row items-center justify-between relative px-8">

        {/* LEFT IMAGE */}
        <div className="
        w-full h-[240px] mb-6 mt-[10px] lg:mt-[0px]
        lg:absolute lg:bottom-[-140px] lg:left-[-60px] lg:w-[780px] lg:h-[500px]
        z-10
        ">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER IMAGE (Hidden on Mobile) */}
        <div className="
        hidden lg:block
        lg:absolute lg:left-[330px] lg:my-[40px] lg:w-[480px] lg:h-[650px]
        z-20
        ">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="
        w-full text-center
        lg:ml-[850px] lg:max-w-[500px] lg:text-left
        ">

          <p className="tracking-[4px] lg:tracking-[6px] text-white text-[16px] lg:text-[20px] mb-4 lg:mb-6">
            ALEX VOLKAV
          </p>

          <h1 className="text-[24px] lg:text-[30px] leading-[36px] lg:leading-[56px] font-semibold mb-4 lg:mb-6">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </h1>

          <div className="w-full h-[2px] lg:h-[3px] bg-white mb-6 lg:mb-8"></div>

          <p className="text-gray-400 text-[14px] lg:text-[16px] leading-6 lg:leading-7 mb-4 lg:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc, tincidunt sed purus phasellus condimentum sed diam sem.
            Maecenas fermentum ac aliquet felis.
          </p>

          <p className="text-gray-400 text-[14px] lg:text-[16px] leading-6 lg:leading-7 mb-8 lg:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc, tincidunt sed purus phasellus Lorem ipsum dolor sit amet.
          </p>

          <div className="flex gap-4 lg:gap-5 justify-center lg:justify-center">

            <button className="px-6 lg:px-10 py-2 bg-gray-700 rounded-full font-semibold text-[16px] lg:text-[20px] hover:bg-gray-600">
              About me
            </button>

            <button className="px-6 lg:px-10 py-2 bg-gray-700 rounded-full font-semibold text-[16px] lg:text-[20px] hover:bg-gray-600">
              Contact me
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
