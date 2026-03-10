import React from "react";
import hero from "../assets/backround_image.png"; // background image
import person from "../assets/Women.png";   // woman image


const AboutHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-700 ">

      {/* BACKGROUND IMAGE */}
      <img
        src={hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale"
      />

      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute inset-0 flex  items-center justify-center text-[260px] font-serif text-white opacity-80  whitespace-nowrap  pointer-events-none">
        ABOUT ME
      </h1>

      {/* PERSON IMAGE */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 ">
        <img
          src={person}
          alt=""
          className="h-[800px] object-contain"
        />
      </div>

      {/* DESCRIPTION BOX */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] bg-gray-200 text-gray-700 p-10 rounded-t-lg z-30">
        <p className="text-lg leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nunc, tincidunt sed purus phasellus condimentum sed diam sem. 
          Maecenas fermentum, ac aliquet felis. Fusce sagittis purus 
          auctor curabitur. Pellentesque in quis posuere volutpat.
        </p>
      </div>

    </section>
  );
};

export default AboutHero;
