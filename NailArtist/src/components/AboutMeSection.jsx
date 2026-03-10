import React from 'react';
import girlnail from '../assets/girl_nails.png';

const AboutMeSection = () => {
  return (
    <div className="relative bg-[#121212] min-h-screen text-white font-sans">
      
      {/* Content Padding */}
      <div className="p-4 pt-16">
        
        {/* Header with Short Lines */}
        <div className="relative flex items-center justify-center gap-2 mb-24 top-[50px]">
          <div className="w-40 h-px bg-white/40" />
          <h1 className="text-3xl font-medium tracking-wide">
            About me
          </h1>
          <div className="w-40 h-px bg-white/40" />
        </div>

        {/* Main content area - Image and Text */}
        <div className="border border-white grid grid-cols-2 max-w-[1300px] mx-auto overflow-hidden">
          
          {/* Left Side Image */}
          <div className="w-full h-full relative aspect-[5/6]">
            <img 
              src={girlnail} 
              alt="Portrait" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center p-8 space-y-8 bg-[#121212]">
            
            <h2 className="text-[60px] font-serif text-white leading-tight">
              Lorem ipsum dolor sit 
              amet, consectetur 
              adipiscing elit.
            </h2>

            <div className="text-lg text-white/60 font-sans font-light leading-relaxed space-y-6 max-w-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, 
                tincidunt sed purus phasellus condimentum sed diam sem. 
                Maecenas fermentum ac aliquet felis. Eu sagittis, purus auctor 
                curabitur. Pellentesque in quis rhoncus vel sed n
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem 
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt 
                sed purus phasellus Lorem ipsum dolor sit amet, consectetur 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, 
                tincidunt sed purus phasellus condimentum sed diam sem.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMeSection;





