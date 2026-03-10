import React from 'react';
import nail from "../assets/nail.png";

const NailHero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-visible font-serif">
      
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-100 aspect-[16/9] opacity-50"
        style={{ backgroundImage: `url(${nail})` }}
      />

      {/* Central Image Card */}
      <div className="relative top-[5px] z-10 w-[90%] max-w-3xl aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
        <img 
          src={nail} 
          alt="Bridal Nails" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Marry Text */}
      <div className="absolute bottom-0 left-0 w-full h-[130px] z-30 pointer-events-none">
        <h1 className="text-white text-[10rem] font-light text-center uppercase">
          Marry
        </h1>
      </div>

    </div>
  );
};

export default NailHero;




