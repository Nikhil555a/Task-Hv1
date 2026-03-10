// import React from "react";
// import bg from "../assets/nail1.png";
// import img1 from "../assets/nail1.png";
// import img2 from "../assets/nail1.png";
// import img3 from "../assets/nail1.png";

// const Testimonial = () => {
//   return (
//     <section className="bg-[#0e0e0e] py-28 text-white relative overflow-hidden">

//       {/* Heading */}
//       <div className="flex items-center justify-center gap-6 mb-20">
//         <div className="h-[1px] w-[220px] bg-gray-500"></div>

//         <h2 className="text-3xl font-light tracking-wide">
//           Client testimonies
//         </h2>

//         <div className="h-[1px] w-[220px] bg-gray-500"></div>
//       </div>

//       {/* Background Image */}
//       <div className="relative flex justify-center items-center">

//         <img
//           src={bg}
//           alt=""
//           className="absolute w-full h-[420px] object-cover blur-md opacity-60"
//         />

//         {/* Testimonial Box */}
//         <div className="relative z-10 max-w-3xl bg-white/10 backdrop-blur-xl rounded-2xl px-16 py-12 text-center shadow-2xl">
//           <p className="text-lg leading-relaxed text-gray-200">
//             “Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc,
//             tincidunt sed purus phasellus condimentum sed diam sem.
//             <br /><br />
//             Maecenas fermentum ac aliquet felis.”
//           </p>
//         </div>

//       </div>

//       {/* Client Images */}
//       <div className="flex justify-center items-center gap-8 mt-12">

//         <img
//           src={img1}
//           className="w-16 h-16 rounded-full object-cover"
//           alt=""
//         />

//         <img
//           src={img2}
//           className="w-20 h-20 rounded-full object-cover"
//           alt=""
//         />

//         <img
//           src={img3}
//           className="w-16 h-16 rounded-full object-cover"
//           alt=""
//         />

//       </div>

//     </section>
//   );
// };

// export default Testimonial;

import React from "react";
import bg from "../assets/nail1.png";

import img1 from "../assets/Testimonial1.png";
import img2 from "../assets/Testimonial2.png";
import img3 from "../assets/Testimonial3.png";

const Testimonial = () => {
  return (
    <section className="bg-[#121212] pt-[50px] text-white">

      {/* Heading */}
      <div className="flex items-center justify-center gap-6 mb-16">
        {/* <div className="h-[1px] w-[220px] bg-gray-500"></div> */}
          <div className="w-40 h-px bg-white/40" />
        <h2 className="text-3xl font-light tracking-wide">
          Client testimonies
        </h2>

        <div className="h-[1px] w-[220px] bg-gray-500"></div>
      </div>


       {/* <div className="relative flex items-center justify-center gap-2 mb-24 top-[50px]">
          <div className="w-40 h-px bg-white/40" />
          <h1 className="text-3xl font-medium tracking-wide">
            About me
          </h1>
          <div className="w-40 h-px bg-white/40" />
        </div> */}

      {/* Background Section */}
      <div className="relative h-[600px] flex flex-col justify-center items-center">

        {/* Background Image */}
        <img
          src={bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-80"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Testimonial Box */}
        <div className="relative z-10 w-[1000px] h-[250px] bg-white/20 backdrop-blur-md rounded-2xl px-16 py-10 text-center shadow-2xl">
          <p className="text-[30px]  text-gray-200">
            “Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
            
            Maecenas fermentum ac aliquet felis.”
          </p>
        </div>

        {/* Client Images */}
        {/* <div className="relative z-10 flex justify-center gap-8 mt-10">

          <img
            src={img1}
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
            alt=""
          />

          <img
            src={img2}
            className="w-20 h-20 rounded-full object-cover border-4 border-white"
            alt=""
          />

          <img
            src={img3}
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
            alt=""
          />

        </div> */}


        {/* Client Images */}
<div className="relative z-10 flex justify-center items-center gap-8 mt-10">

  <img
    src={img1}
    className="w-24 h-24 rounded-full object-cover border-2 border-white opacity-70"
    alt=""
  />

  <img
    src={img2}
    className="w-24 h-24 rounded-full object-cover border-2 border-white scale-110"
    alt=""
  />

  <img
    src={img3}
    className="w-24 h-24 rounded-full object-cover border-2 border-white opacity-70"
    alt=""
  />

</div>


      </div>

    </section>
  );
};

export default Testimonial;

