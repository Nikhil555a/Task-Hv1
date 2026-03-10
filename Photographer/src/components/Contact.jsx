
import React from "react";
import { Instagram, Facebook, Camera } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#0b0b0b] text-white py-[30px] lg:py-[40px] text-center">

      <div className="max-w-[900px] mx-auto px-6">

        {/* Logo */}
        <div className="flex flex-col items-center mb-[40px] lg:mb-[50px]">

          <Camera size={45} className="text-gray-200 mb-1 lg:w-[65px] lg:h-[65px]" />

          <h2 className="text-[20px] lg:text-[26px] tracking-[2px] font-medium">
            PHOTOGRAPHY
          </h2>

          <div className="w-[160px] lg:w-[240px] h-[1px] bg-gray-400 my-1"></div>

          <p className="text-gray-400 tracking-[2px] lg:tracking-[3px] font-semibold text-[12px] lg:text-[14px]">
            A L E X &nbsp; V O L K A V
          </p>

        </div>

        {/* Contact Heading */}
        <div className="flex items-center justify-center gap-3 lg:gap-6 mb-[40px] lg:mb-[60px]">

          <div className="w-[80px] lg:w-[200px] h-[1px] bg-gray-500"></div>

          <h3 className="text-[22px] lg:text-[32px] text-gray-300 font-light">
            Contact us
          </h3>

          <div className="w-[80px] lg:w-[200px] h-[1px] bg-gray-500"></div>

        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 lg:gap-10 mb-6 lg:mb-8">

          {/* Instagram */}
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] cursor-pointer hover:scale-110 transition-transform">
            <Instagram size={22} className="lg:w-[28px] lg:h-[28px]" />
          </div>

          {/* Facebook */}
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-[#1877F2] cursor-pointer hover:scale-110 transition-transform">
            <Facebook size={22} fill="white" className="lg:w-[28px] lg:h-[28px]" />
          </div>

          {/* Threads */}
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border-[1.5px] border-white cursor-pointer hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-5 h-5 lg:w-7 lg:h-7 fill-white">
              <path d="M12 21.6C10.3 21.6 8.8 21.2 7.4 20.3C6.1 19.5 5 18.3 4.2 16.9C3.4 15.5 3 13.9 3 12C3 10.1 3.4 8.5 4.2 7.1C5 5.7 6.1 4.5 7.4 3.7C8.8 2.8 10.3 2.4 12 2.4C13.7 2.4 15.2 2.8 16.6 3.7C17.9 4.5 19 5.7 19.8 7.1C20.6 8.5 21 10.1 21 12" />
            </svg>
          </div>

        </div>

        {/* Short Message */}
        <h1 className="text-[36px] lg:text-[70px] font-light mb-[20px] lg:mb-[40px]">
          Short message
        </h1>

        {/* Paragraph */}
        <p className="text-gray-400 text-[15px] lg:text-[20px] leading-[28px] lg:leading-[36px] max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc, tincidunt sed purus phasellus condimentum sed diam sem.
          Maecenas fermentum ac aliquet felis.
        </p>

      </div>

    </section>
  );
}
