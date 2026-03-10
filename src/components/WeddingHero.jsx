
import React from "react";
import image1 from "../assets/wed_image1.jpg";
import image2 from "../assets/wed_image2.png";
import image3 from "../assets/wed_image3.png";
import image4 from "../assets/wed_image4.png";

const WeddingHero = () => {
  return (
    <div className="bg-[#6e6e6e] text-white w-full">

      {/* ================= SECTION 1 ================= */}
      <section className="relative min-h-screen w-full flex items-center">

        {/* vertical lines */}
        <div className="absolute right-14 top-0 h-full w-1/2 flex justify-around px-20 opacity-40">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-[4px] bg-white h-full"></div>
          ))}
        </div>

        {/* images */}
        <div className="absolute left-40 top-10">
          <img
            src={image1}
            className="w-[500px] h-[240px] object-cover shadow-xl"
            alt=""
          />
        </div>

        <div className="absolute left-0">
          <img
            src={image2}
            className="w-[600px] h-[350px] object-cover scale-110 relative shadow-xl top-[70px]"
            alt=""
          />
        </div>

        {/* text */}
        <div className="ml-auto mr-32 max-w-xl relative z-10">
          <h1 className="text-[112px] ml-2 font-serif whitespace-nowrap leading-none">
            JOIE ADAMS
          </h1>

          <p className="tracking-[12px] ml-2 mt-6 text-[30px] whitespace-nowrap">
            EVENT PLANNER
          </p>

          <p className="mt-6 ml-2 text-gray-200 text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc tincidunt sed purus phasellus Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

      </section>


      {/* ================= SECTION 2 ================= */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
     

        {/* vertical lines */}
        <div className="absolute right-14 top-0 h-full w-1/2 flex justify-around px-20 opacity-40">
        
        

        

          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-[4px] bg-white h-full"></div>
          ))}
        </div>

        {/* CENTER BIG IMAGE */}
        {/* <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-20 w-[660px]">
          <img
            src={image3}
            className="w-full h-[400px] object-cover grayscale shadow-2xl"
            alt=""
          />
        </div> */}

        {/* CENTER BIG IMAGE */}
<div className="absolute -top-32 left-1/2 -translate-x-1/2 z-30 w-[660px]">
  <img
    src={image3}
    className="w-full h-[400px] object-cover grayscale shadow-2xl"
    alt=""
  />
</div>


        {/* RIGHT SMALL IMAGES */}
        {/* <div className="absolute right-16 top-[150px]  flex items-end gap-3 z-30">

          <div className="w-[500px] h-[180px]  shadow-2xl translate-y-8 ">
            <img
              src={image3}
              className="w-full h-full object-cover grayscale"
              alt=""
            />
          </div>

          <div className="w-36 h-48 shadow-2xl">
            <img
              src={image3}
              className="w-full h-full object-cover grayscale"
              alt=""
            />
          </div>

        </div> */}
        {/* RIGHT SMALL IMAGES */}
<div className="absolute right-16 top-[150px] flex items-end gap-3 z-10">





  <div className="w-[500px] h-[180px] shadow-2xl translate-y-8">
    <img
      src={image3}
      className="w-full h-full object-cover grayscale"
      alt=""
    />
  </div>

  <div className="w-36 h-48 shadow-2xl">
    <img
      src={image3}
      className="w-full h-full object-cover grayscale"
      alt=""
    />
  </div>

</div>


        {/* LEFT BACKGROUND IMAGE */}
        <div className="absolute left-0 w-[600px] top-[170px] ">
       

      

          <img
            src={image4}
            className="w-full h-[200px] object-cover"
            alt=""
          />
        </div>

      </section>

    </div>
  );
};

export default WeddingHero;





























































// import React from "react";
// import image1 from "../assets/wed_image1.jpg";
// import image2 from "../assets/wed_image2.png";
// import image3 from "../assets/wed_image3.png";
// import image4 from "../assets/wed_image4.png";

// const WeddingHero = () => {
//   return (
//     <div className="bg-[#6e6e6e] text-white w-full">

//       {/* ================= SECTION 1 ================= */}
//       <section className="relative min-h-screen w-full flex items-center">

//         {/* vertical lines */}
//         <div className="absolute right-14 top-0 h-[380px] w-1/2 flex justify-around px-20 opacity-40">
//           {[...Array(7)].map((_, i) => (
//             <div key={i} className="w-[4px] bg-white h-full"></div>
//           ))}
//         </div>

//         {/* images */}
//         <div className="absolute left-40 top-10">
//           <img
//             src={image1}
//             className="w-[500px] h-[240px] object-cover shadow-xl"
//             alt=""
//           />
//         </div>

//         <div className="absolute left-0">
//           <img
//             src={image2}
//             className="w-[600px] h-[350px] object-cover scale-110 relative shadow-xl top-[70px]"
//             alt=""
//           />
//         </div>

//         {/* text */}
//         <div className="ml-auto mr-32 max-w-xl relative z-10">
//           <h1 className="text-[112px] ml-2 font-serif whitespace-nowrap leading-none">
//             JOIE ADAMS
//           </h1>

//           <p className="tracking-[12px] ml-2 mt-6 text-[30px] whitespace-nowrap">
//             EVENT PLANNER
//           </p>

//           <p className="mt-6 ml-2 text-gray-200 text-[20px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Nunc tincidunt sed purus phasellus Lorem ipsum dolor sit amet.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>

//       </section>


//       {/* ================= SECTION 2 ================= */}
//       <section className="relative min-h-screen w-full flex items-center justify-center">

//         {/* vertical lines */}
//         <div className="absolute right-14 top-0 h-[380px] w-1/2 flex justify-around px-20 opacity-40">
//           {[...Array(7)].map((_, i) => (
//             <div key={i} className="w-[4px] bg-white h-full"></div>
//           ))}
//         </div>

//         {/* CENTER BIG IMAGE */}
//         <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-30 w-[660px]">
//           <img
//             src={image3}
//             className="w-full h-[400px] object-cover grayscale shadow-2xl"
//             alt=""
//           />
//         </div>

//         {/* RIGHT SMALL IMAGES */}
//         <div className="absolute right-16 top-[150px] flex items-end gap-3 z-10">

//           <div className="w-[500px] h-[180px] shadow-2xl translate-y-8">
//             <img
//               src={image3}
//               className="w-full h-full object-cover grayscale"
//               alt=""
//             />
//           </div>

//           <div className="w-36 h-48 shadow-2xl">
//             <img
//               src={image3}
//               className="w-full h-full object-cover grayscale"
//               alt=""
//             />
//           </div>

//         </div>

//         {/* LEFT BACKGROUND IMAGE */}
//         <div className="absolute left-0 w-[600px] top-[170px] ">
//           <img
//             src={image4}
//             className="w-full h-[200px] object-cover"
//             alt=""
//           />
//         </div>

//       </section>

//     </div>
//   );
// };

// export default WeddingHero;




// import React from "react";
// import image1 from "../assets/wed_image1.jpg";
// import image2 from "../assets/wed_image2.png";
// import image3 from "../assets/wed_image3.png";
// import image4 from "../assets/wed_image4.png";

// const WeddingHero = () => {
//   return (
//     <div className="bg-[#6e6e6e] text-white w-full">

//       {/* ================= SECTION 1 ================= */}
//       <section className="relative w-full flex items-center h-auto py-32">

//         {/* vertical lines */}
//         <div className="absolute right-14 top-0 h-full w-1/2 flex justify-around px-20 opacity-40">
//           {[...Array(7)].map((_, i) => (
//             <div key={i} className="w-[4px] bg-white h-full"></div>
//           ))}
//         </div>

//         {/* images */}
//         <div className="absolute left-40 top-10">
//           <img
//             src={image1}
//             className="w-[500px] h-[240px] object-cover shadow-xl"
//             alt=""
//           />
//         </div>

//         <div className="absolute left-0">
//           <img
//             src={image2}
//             className="w-[600px] h-[350px] object-cover scale-110 relative shadow-xl top-[70px]"
//             alt=""
//           />
//         </div>

//         {/* text */}
//         <div className="ml-auto mr-32 max-w-xl relative z-10">
//           <h1 className="text-[112px] ml-2 font-serif whitespace-nowrap leading-none">
//             JOIE ADAMS
//           </h1>

//           <p className="tracking-[12px] ml-2 mt-6 text-[30px] whitespace-nowrap">
//             EVENT PLANNER
//           </p>

//           <p className="mt-6 ml-2 text-gray-200 text-[20px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Nunc tincidunt sed purus phasellus Lorem ipsum dolor sit amet.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>

//       </section>


//       {/* ================= SECTION 2 ================= */}
//       <section className="relative w-full flex items-center justify-center h-auto py-32">

//         {/* vertical lines */}
//         <div className="absolute right-14 top-0 h-full w-1/2 flex justify-around px-20 opacity-40">
//           {[...Array(7)].map((_, i) => (
//             <div key={i} className="w-[4px] bg-white h-full"></div>
//           ))}
//         </div>

//         {/* CENTER BIG IMAGE */}
//         <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-30 w-[660px]">
//           <img
//             src={image3}
//             className="w-full h-[400px] object-cover grayscale shadow-2xl"
//             alt=""
//           />
//         </div>

//         {/* RIGHT SMALL IMAGES */}
//         <div className="absolute right-16 top-[150px] flex items-end gap-3 z-10">

//           <div className="w-[500px] h-[180px] shadow-2xl translate-y-8">
//             <img
//               src={image3}
//               className="w-full h-full object-cover grayscale"
//               alt=""
//             />
//           </div>

//           <div className="w-36 h-48 shadow-2xl">
//             <img
//               src={image3}
//               className="w-full h-full object-cover grayscale"
//               alt=""
//             />
//           </div>

//         </div>

//         {/* LEFT BACKGROUND IMAGE */}
//         <div className="absolute left-0 w-[600px] top-[170px]">
//           <img
//             src={image4}
//             className="w-full h-[200px] object-cover"
//             alt=""
//           />
//         </div>

//       </section>

//     </div>
//   );
// };

// export default WeddingHero;
