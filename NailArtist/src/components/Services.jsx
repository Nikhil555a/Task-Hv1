import React from "react";
import nails from "../assets/nail1.png";

export default function Services() {
  return (
    <div className="bg-[#121212] text-white py-20 flex flex-col items-center">

      {/* Heading */}
      <div className="flex items-center justify-center gap-2 mb-16">
        <div className="w-40 h-px bg-white/40" />
        <h1 className="text-3xl font-medium tracking-wide">
          Services
        </h1>
        <div className="w-40 h-px bg-white/40" />
      </div>

      {/* Section Content */}
      <div className="relative w-full flex flex-col p-[20px] items-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute left-1/2 -translate-x-1/2  w-[1200px] h-full blur-[10px]"
          style={{
            backgroundImage: `url(${nails})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center">

          {/* Text */}
          <h1 className="text-center w-[1000px] text-[48px] leading-relaxed font-serif mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>

          {/* Image Card */}
          <div className="w-[1050px] rounded-[45px] overflow-hidden border-2 border-white mb-16">
            <img
              src={nails}
              alt="service"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Services Grid */}
          <div className="w-[1050px] grid grid-cols-3 gap-10">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h4 className="text-[45px] font-medium tracking-tight">
                  Lorem ipsum
                </h4>
              </div>
              <p className="text-[22px] font-light leading-relaxed pl-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h4 className="text-[45px] font-medium tracking-tight">
                  Lorem ipsum
                </h4>
              </div>
              <p className="text-[22px] font-light leading-relaxed pl-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h4 className="text-[45px] font-medium tracking-tight">
                  Lorem ipsum
                </h4>
              </div>
              <p className="text-[22px] font-light leading-relaxed pl-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}



// import React from "react";
// import nails from "../assets/nail1.png";

// export default function Services() {
//   return (
//     <div className="bg-[#121212] text-white py-14 md:py-16 lg:py-20 flex flex-col items-center">

//       {/* Heading */}
//       <div className="flex items-center justify-center gap-2 mb-10 md:mb-12 lg:mb-16">
//         <div className="w-16 md:w-24 lg:w-40 h-px bg-white/40" />
//         <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">
//           Services
//         </h1>
//         <div className="w-16 md:w-24 lg:w-40 h-px bg-white/40" />
//       </div>

//       {/* Section Content */}
//       <div className="relative w-full flex flex-col p-[16px] md:p-[20px] items-center overflow-hidden">

//         {/* Background Image */}
//         <div
//           className="absolute left-1/2 -translate-x-1/2 w-[90%] md:w-[1000px] lg:w-[1200px] h-full blur-[10px]"
//           style={{
//             backgroundImage: `url(${nails})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center"
//           }}
//         ></div>

//         <div className="relative z-10 flex flex-col items-center">

//           {/* Text */}
//           <h1 className="text-center w-full md:w-[80%] lg:w-[1000px] text-[24px] md:text-[34px] lg:text-[48px] leading-relaxed font-serif mb-8 md:mb-10 lg:mb-12">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </h1>

//           {/* Image Card */}
//           <div className="w-full md:w-[85%] lg:w-[1050px] rounded-[25px] md:rounded-[35px] lg:rounded-[45px] overflow-hidden border-2 border-white mb-10 md:mb-12 lg:mb-16">
//             <img
//               src={nails}
//               alt="service"
//               className="w-full h-[220px] md:h-[300px] lg:h-[380px] object-cover"
//             />
//           </div>

//           {/* Services Grid */}
//           <div className="w-full md:w-[90%] lg:w-[1050px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

//             <div>
//               <div className="flex items-center gap-3 mb-3 md:mb-4">
//                 <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
//                 <h4 className="text-[24px] md:text-[32px] lg:text-[45px] font-medium tracking-tight">
//                   Lorem ipsum
//                 </h4>
//               </div>
//               <p className="text-[16px] md:text-[18px] lg:text-[22px] font-light leading-relaxed pl-6">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-3 mb-3 md:mb-4">
//                 <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
//                 <h4 className="text-[24px] md:text-[32px] lg:text-[45px] font-medium tracking-tight">
//                   Lorem ipsum
//                 </h4>
//               </div>
//               <p className="text-[16px] md:text-[18px] lg:text-[22px] font-light leading-relaxed pl-6">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-3 mb-3 md:mb-4">
//                 <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
//                 <h4 className="text-[24px] md:text-[32px] lg:text-[45px] font-medium tracking-tight">
//                   Lorem ipsum
//                 </h4>
//               </div>
//               <p className="text-[16px] md:text-[18px] lg:text-[22px] font-light leading-relaxed pl-6">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }
