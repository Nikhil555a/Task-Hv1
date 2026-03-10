import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="  bg-[#121212] text-white min-h-screen flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Header with Lines */}
      <div className="flex items-center max-w-xl w-full  mb-10">
        <div className="flex-grow h-[1px] bg-gray-600"></div>
        <span className="px-4 text-gray-300 text-[30px] font-light tracking-wide">Contact us</span>
        <div className="flex-grow h-[1px] bg-gray-600"></div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mb-8">
        {/* Instagram Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] cursor-pointer hover:scale-110 transition-transform">
          <Instagram size={28} />
        </div>

        {/* Facebook Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1877F2] cursor-pointer hover:scale-110 transition-transform">
          <Facebook size={28} fill="white" />
        </div>

        {/* Threads Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full border-[1.5px] border-white cursor-pointer hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M12 21.6C10.3 21.6 8.8 21.2 7.4 20.3C6.1 19.5 5 18.3 4.2 16.9C3.4 15.5 3 13.9 3 12C3 10.1 3.4 8.5 4.2 7.1C5 5.7 6.1 4.5 7.4 3.7C8.8 2.8 10.3 2.4 12 2.4C13.7 2.4 15.2 2.8 16.6 3.7C17.9 4.5 19 5.7 19.8 7.1C20.6 8.5 21 10.1 21 12C21 12.3 20.9 12.6 20.7 12.8C20.5 13 20.2 13.1 19.9 13.1C19.6 13.1 19.3 13 19.1 12.8C18.9 12.6 18.8 12.3 18.8 12C18.8 10.5 18.5 9.1 17.8 8C17.1 6.9 16.2 6.1 15.1 5.5C14.1 4.9 13.1 4.6 12 4.6C10.9 4.6 9.9 4.9 8.9 5.5C7.8 6.1 6.9 6.9 6.2 8C5.5 9.1 5.2 10.5 5.2 12C5.2 13.5 5.5 14.9 6.2 16C6.9 17.1 7.8 17.9 8.9 18.5C9.9 19.1 10.9 19.4 12 19.4C13.6 19.4 14.9 18.9 15.9 17.9C16.9 16.9 17.4 15.6 17.4 14.1V12.1C17.4 11.5 17.2 11.1 16.8 10.7C16.4 10.3 15.9 10.1 15.4 10.1C14.8 10.1 14.4 10.3 14 10.7C13.6 11.1 13.4 11.5 13.4 12.1V14.1H11.2V12.1C11.2 11.5 11 11.1 10.6 10.7C10.2 10.3 9.7 10.1 9.2 10.1C8.6 10.1 8.2 10.3 7.8 10.7C7.4 11.1 7.2 11.5 7.2 12.1C7.2 13.6 7.7 14.9 8.7 15.9C9.7 16.9 11 17.4 12.5 17.4C13.5 17.4 14.4 17.1 15.2 16.5C16 15.9 16.6 15.1 17 14.1C17.4 13.4 17.6 12.7 17.6 12V12.1C17.6 13.8 18.2 15.2 19.4 16.4C20.6 17.6 22 18.2 23.7 18.2V20.4C22.3 20.4 21 20 19.9 19.1C18.8 18.2 18 17.1 17.5 15.8C16.8 16.9 15.9 17.8 14.8 18.4C13.7 19.1 12.4 19.4 11 19.4" />
          </svg>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-[70px] font-medium mb-4 mt-[20px] text-center">
        Short message
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-center w-[1200px] leading-relaxed mb-10 text-[25px] px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus 
        condimentum sed diam sem. Maecenas fermentum ac aliquet felis.
      </p>

      {/* Button */}
      <button className="bg-[#333333] hover:bg-[#444444] text-white font-medium py-4 px-24 rounded-full text-[32px] transition-all duration-300 shadow-lg active:scale-95">
        Download visiting card
      </button>

    </div>
  );
};

export default Contact;

