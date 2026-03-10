// import React from "react";
// import plan1 from "../assets/plan1.png";
// import plan2 from "../assets/plan2.png";

// const OurPlans = () => {
//   return (
//     <section className="relative py-32 bg-gray-200 overflow-hidden">

//       {/* DIAGONAL BACKGROUND */}
//       <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gray-800 clip-diagonal"></div>

//       {/* TITLE */}
//       <div className="text-center mb-20 relative z-10">
//         <h2 className="tracking-[20px] text-3xl text-gray-700 font-serif">
//           OUR PLANS
//         </h2>
//       </div>

//       {/* CARDS */}
//       <div className="flex justify-center gap-20 relative z-10">

//         {/* CARD 1 */}
//         <div className="bg-gray-300 w-[600px] rounded-lg shadow-2xl p-10 flex items-center justify-between">

//           <div>
//             <p className="text-gray-700 text-lg mb-6 w-[260px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
//             </p>

//             <button className="bg-gray-400 text-white px-8 py-2 rounded">
//               Lorem
//             </button>
//           </div>

//           <img
//             src={plan1}
//             className="w-[180px] h-[220px] object-cover"
//             alt=""
//           />
//         </div>


//         {/* CARD 2 */}
//         <div className="bg-gray-300 w-[600px] rounded-lg shadow-2xl p-10 flex items-center justify-between">

//           <div>
//             <p className="text-gray-700 text-lg mb-6 w-[260px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
//             </p>

//             <button className="bg-gray-400 text-white px-8 py-2 rounded">
//               Lorem
//             </button>
//           </div>

//           <img
//             src={plan2}
//             className="w-[180px] h-[220px] object-cover"
//             alt=""
//           />
//         </div>

//       </div>

//     </section>
//   );
// };

// export default OurPlans;





// import React from "react";
// import plan1 from "../assets/plan1.png";
// import plan2 from "../assets/plan2.png";

// const OurPlans = () => {
//     return (
//         <section className="relative py-32 bg-gray-200 overflow-hidden">

//             {/* DIAGONAL BACKGROUND */}
//             <div className="absolute top-0 left-0 w-full h-full clip-diagonal"></div>

//             {/* TITLE */}
//             <div className="text-center mb-20 relative z-10">
//                 <h2 className="tracking-[20px] text-3xl text-gray-700 font-serif">
//                     OUR PLANS
//                 </h2>
//             </div>

//             {/* CARDS */}
//             <div className="flex justify-center gap-20 relative z-10">

//                 {/* CARD 1 */}
//                 <div className="bg-gray-300 w-[600px] rounded-lg shadow-2xl p-10 flex items-center justify-between">

//                     <div>
//                         <p className="text-gray-700 text-lg mb-6 w-[260px]">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
//                         </p>

//                         <button className="bg-gray-400 text-white px-8 py-2 rounded">
//                             Lorem
//                         </button>
//                     </div>

//                     <img
//                         src={plan1}
//                         className="w-[180px] h-[220px] object-cover"
//                         alt=""
//                     />
//                 </div>

//                 {/* CARD 2 */}
//                 <div className="bg-gray-300 w-[600px] rounded-lg shadow-2xl p-10 flex items-center justify-between">

//                     <div>
//                         <p className="text-gray-700 text-lg mb-6 w-[260px]">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
//                         </p>

//                         <button className="bg-gray-400 text-white px-8 py-2 rounded">
//                             Lorem
//                         </button>
//                     </div>

//                     <img
//                         src={plan2}
//                         className="w-[180px] h-[220px] object-cover"
//                         alt=""
//                     />
//                 </div>





//             </div>

//         </section>
//     );
// };

// export default OurPlans;


// import React from "react";
// import plan1 from "../assets/plan1.png";
// import plan2 from "../assets/plan2.png";

// const OurPlans = () => {
//   return (
//     <section className="relative py-32 bg-gray-200 overflow-hidden">

//       {/* DIAGONAL BACKGROUND */}
//       <div className="absolute top-0 left-0 w-full h-full clip-diagonal"></div>

//       {/* TITLE */}
//       <div className="text-center mb-20 relative z-10">
//         <h2 className="tracking-[20px] text-3xl text-gray-700 font-serif">
//           OUR PLANS
//         </h2>
//       </div>

//       {/* CARDS GRID */}
//       <div className="grid grid-cols-2 gap-16 justify-items-center relative z-10">

//         {/* CARD */}
//         {[plan1, plan2, plan1, plan2].map((img, index) => (
//           <div
//             key={index}
//             className="bg-gray-300 w-[500px] rounded-lg shadow-2xl p-10 flex items-center justify-center"
//           >
//             <div>
//               <p className="text-gray-700 text-lg mb-6 w-[260px]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
//               </p>

//               <button className="bg-gray-400 text-white px-8 py-2 rounded">
//                 Lorem
//               </button>
//             </div>

//             <img
//               src={img}
//               className="w-[180px] h-[220px] object-cover"
//               alt=""
//             />
//           </div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default OurPlans;


import React from "react";
import plan1 from "../assets/plan1.png";
import plan2 from "../assets/plan2.png";

const OurPlans = () => {
  return (
    <section className="relative py-32 bg-gray-200 overflow-hidden">

      {/* DIAGONAL BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full clip-diagonal"></div>

      {/* TITLE */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="tracking-[20px] text-3xl text-gray-700 font-serif">
          OUR PLANS
        </h2>
      </div>

      {/* CENTER CONTAINER */}
      <div className="max-w-[1100px] mx-auto relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-2 gap-20">

          {[plan1, plan2, plan1, plan2].map((img, index) => (
            <div
              key={index}
              className="bg-gray-300 rounded-lg shadow-2xl p-10 flex items-center justify-between"
            >
              <div>
                <p className="text-gray-700 text-lg mb-6 w-[260px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
                </p>

                <button className="bg-gray-400 text-white px-8 py-2 rounded">
                  Lorem
                </button>
              </div>

              <img
                src={img}
                className="w-[180px] h-[220px] object-cover"
                alt=""
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default OurPlans;
