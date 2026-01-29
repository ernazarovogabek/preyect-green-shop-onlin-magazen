// import { Button, Carousel } from "antd";
// import { useState } from "react";
// import FL1 from "../../../assets/img/FL1.png";
// import FL2 from "../../../assets/img/FL2.png";
// import FL3 from "../../../assets/img/FL3.png";

// const Slideer = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const contentStyle: React.CSSProperties = {
//     height: "450px",
//     color: "#fff",
//     lineHeight: "160px",
//     textAlign: "center",
//     background: "#F5F5F5",
//   };

//   const slides = [
//     {
//       id: 1,
//       subTitle: "WELCOME TO GREENSHOP",
//       title: "LET'S MAKE A BETTER",
//       highlight: "PLANET",
//       description:
//         "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
//       buttonText: "SHOP NOW",
//       image: FL1,
//     },
//     {
//       id: 2,
//       subTitle: "WELCOME TO GREENSHOP",
//       title: "LET'S LIVE IN A BETTER",
//       highlight: "PLANET",
//       description:
//         "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
//       buttonText: "LET'S START",
//       image: FL2,
//     },
//     {
//       id: 3,
//       subTitle: "WELCOME TO GREENSHOP",
//       title: "LET'S OBSERVE A BETTER",
//       highlight: "PLANET",
//       description:
//         "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
//       buttonText: "GET CREDITS",
//       image: FL3,
//     },
//   ];

//   return (
//     <div className="w-[95%]  md:w-[90%] m-auto mt-4 rounded-2xl md:rounded-3xl overflow-hidden relative bg-[#F5F5F5]">
//       <Carousel
//         dots={false}
//         autoplay
//         pauseOnHover={true}
//         dotPlacement="bottom"
//         afterChange={(current) => setActiveSlide(current)}
//         swipeToSlide={true}
//         draggable={true}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id}>
//             <div
//               style={contentStyle}
//               className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-16 !h-auto min-h-[450px] md:!h-[450px] py-6 md:py-0"
//             >
//               <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left w-full md:max-w-[60%] z-10">
//                 <p className="font-family font-medium text-[11px] sm:text-[14px] leading-[114%] tracking-widest uppercase text-[#3d3d3d] mb-1">
//                   {slide.subTitle}
//                 </p>

//                 <h1 className="font-family text-[#3d3d3d] font-black text-[28px] sm:text-[50px] xl:text-[70px] leading-[110%] uppercase">
//                   {slide.title}{" "}
//                   <span className="text-[#46A358]">{slide.highlight}</span>
//                 </h1>
//                 <p className="text-[#727272] text-[12px] sm:text-[14px] w-[95%] md:w-[80%] mb-4 md:mb-6 leading-5 sm:leading-6">
//                   {slide.description}
//                 </p>
//                 <Button
//                   type="primary"
//                   className="bg-[#46a358]! md:mb-0! mb-3! hover:bg-[#357a40]! w-35! h-10! rounded-md! font-family! font-bold! text-[14px]! md:text-[16px]! leading-[125%]! uppercase! text-[#fff]!"
//                 >
//                   {slide.buttonText}
//                 </Button>
//               </div>

//               <div className="flex md:flex items-center justify-center w-full md:w-[40%] relative mt-6 md:mt-0 order-first md:order-last">
//                 <div className="absolute w-[80%] h-[80%] rounded-full blur-2xl z-0"></div>
//                 <img
//                   src={slide.image}
//                   alt="Flower"
//                   className="relative z-10 w-full max-h-[180px] sm:max-h-[300px]  md:max-h-[400px] object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>

//       <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`w-[10px] h-[10px] rounded-full transition-all duration-300
//               ${
//                 activeSlide === index
//                   ? "bg-[#46A358]"
//                   : "bg-[#3d3d3d] opacity-30"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slideer;

















































































// import { Button, Carousel } from "antd";
// import { useState } from "react";
// import FL1 from "../../../assets/img/FL1.png";
// import FL2 from "../../../assets/img/FL2.png";
// import FL3 from "../../../assets/img/FL3.png";

// const Slideer = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const contentStyle: React.CSSProperties = {
//     background: "#F5F5F5",
//   };

//   const slides = [
//     {
//       id: 1,
//       subTitle: "WELCOME TO GREENSHOP",
//       title: "LET'S MAKE A BETTER",
//       highlight: "PLANET",
//       description:
//         "We are an online plant shop offering a wide range of cheap and trendy plants.",
//       buttonText: "SHOP NOW",
//       image: FL1,
//     },
//     {
//       id: 2,
//       subTitle: "WELCOME TO GREENSHOP",
//       title: "LET'S LIVE IN A BETTER",
//       highlight: "PLANET",
//       description:
//         "We are an online plant shop offering a wide range of cheap and trendy plants.",
//       buttonText: "LET'S START",
//       image: FL2,
//     },
//     {
//       id: 3,
//       subTitle: "WELCOME TO GREENSHOP",
//       title: "LET'S OBSERVE A BETTER",
//       highlight: "PLANET",
//       description:
//         "We are an online plant shop offering a wide range of cheap and trendy plants.",
//       buttonText: "GET CREDITS",
//       image: FL3,
//     },
//   ];

//   return (
//     <div className="p-2">
//     <div className="w-[98%] xs:w-[95%] md:w-[90%] mx-auto mt-3 rounded-xl md:rounded-3xl overflow-hidden relative bg-[#F5F5F5]">
//       <Carousel
//         autoplay
//         dots={false}
//         swipeToSlide
//         draggable
//         afterChange={(current) => setActiveSlide(current)}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id}>
//             <div
//               style={contentStyle}
//               className="flex flex-col md:flex-row items-center justify-between
//               px-2 xs:px-4 sm:px-10 md:px-16
//               min-h-[320px] xs:min-h-[380px] md:min-h-[450px]"
//             >
//               {/* TEXT */}
//               <div
//                 className="flex flex-col gap-1 xs:gap-2 items-center md:items-start
//                 text-center md:text-left w-full md:max-w-[60%]"
//               >
//                 <p
//                   className="font-medium text-[9px] xs:text-[11px] sm:text-[14px]
//                   tracking-widest uppercase text-[#3d3d3d]"
//                 >
//                   {slide.subTitle}
//                 </p>

//                 <h1
//                   className="font-black text-[#3d3d3d]
//                   text-[20px] xs:text-[26px] sm:text-[40px] xl:text-[70px]
//                   leading-[110%] uppercase"
//                 >
//                   {slide.title}{" "}
//                   <span className="text-[#46A358]">
//                     {slide.highlight}
//                   </span>
//                 </h1>

//                 <p
//                   className="text-[#727272]
//                   text-[10px] xs:text-[12px] sm:text-[14px]
//                   w-full xs:w-[95%] md:w-[80%]
//                   leading-4 xs:leading-5"
//                 >
//                   {slide.description}
//                 </p>

//                 <Button
//                   type="primary"
//                   className="bg-main 
//                   w-[120px] xs:w-[140px] h-8 xs:h-10
//                   text-[12px] xs:text-[14px]
//                   font-bold uppercase mt-2"
//                 >
//                   {slide.buttonText}
//                 </Button>
//               </div>

//               {/* IMAGE */}
//               <div className="flex justify-center items-center w-full md:w-[40%] mt-4 md:mt-0">
//                 <img
//                   src={slide.image}
//                   alt="Flower"
//                   className="w-full
//                   max-h-[120px] xs:max-h-[160px]
//                   sm:max-h-[280px] md:max-h-[400px]
//                   object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>

//       {/* CUSTOM DOTS */}
//       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`w-[8px] h-[8px] rounded-full transition-all
//               ${
//                 activeSlide === index
//                   ? "bg-[#46A358]"
//                   : "bg-[#3d3d3d] opacity-30"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Slideer;






























































import { Button, Carousel } from "antd";
import { useState } from "react";
import FL1 from "../../../assets/img/FL1.png";
import FL2 from "../../../assets/img/FL2.png";
import FL3 from "../../../assets/img/FL3.png";

const Slideer = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subTitle: "WELCOME TO GREENSHOP",
      title: "LET'S MAKE A BETTER",
      highlight: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      buttonText: "SHOP NOW",
      image: FL1,
    },
    {
      id: 2,
      subTitle: "WELCOME TO GREENSHOP",
      title: "LET'S LIVE IN A BETTER",
      highlight: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      buttonText: "LET'S START",
      image: FL2,
    },
    {
      id: 3,
      subTitle: "WELCOME TO GREENSHOP",
      title: "LET'S OBSERVE A BETTER",
      highlight: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
      buttonText: "GET CREDITS",
      image: FL3,
    },
  ];

  return (
    <div className="p-2">
      <div className="w-[98%] xs:w-[95%] md:w-[90%] mx-auto mt-3 rounded-xl md:rounded-3xl overflow-hidden relative bg-[#F5F5F5]">
        <Carousel
          autoplay
          dots={false}
          swipeToSlide
          draggable
          afterChange={(current) => setActiveSlide(current)}
        >
          {slides.map((slide) => (
            <div key={slide.id}>
              <div
                className="flex flex-col md:flex-row items-center justify-between
                px-2 xs:px-4 sm:px-10 md:px-16
                min-h-[320px] xs:min-h-[380px] md:min-h-[450px]"
              >
                {/* TEXT */}
                <div
                  className="flex flex-col gap-1 xs:gap-2 items-center md:items-start
                  text-center md:text-left w-full md:max-w-[60%]"
                >
                  <p
                    className="font-medium text-[9px] xs:text-[11px] sm:text-[14px]
                    tracking-widest uppercase text-[#3d3d3d]"
                  >
                    {slide.subTitle}
                  </p>

                  <h1
                    className="font-black text-[#3d3d3d]
                    text-[20px] xs:text-[26px] sm:text-[40px] xl:text-[70px]
                    leading-[110%] uppercase"
                  >
                    {slide.title}{" "}
                    <span className="text-main">{slide.highlight}</span>
                  </h1>

                  <p
                    className="text-[#727272]
                    text-[10px] xs:text-[12px] sm:text-[14px]
                    w-full xs:w-[95%] md:w-[80%]
                    leading-4 xs:leading-5"
                  >
                    {slide.description}
                  </p>

                  {/* BUTTON */}
                  <Button
                    type="primary"
                    className="!bg-main hover:!bg-main
                    w-[120px] xs:w-[140px]
                    h-8 xs:h-10
                    text-[12px] xs:text-[14px]
                    font-bold uppercase mt-2
                    border-none"
                  >
                    {slide.buttonText}
                  </Button>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center items-center w-full md:w-[40%] mt-4 md:mt-0">
                  <img
                    src={slide.image}
                    alt="Flower"
                    className="w-full
                    max-h-[120px] xs:max-h-[160px]
                    sm:max-h-[280px] md:max-h-[400px]
                    object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* CUSTOM DOTS */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-[8px] h-[8px] rounded-full transition-all
                ${
                  activeSlide === index
                    ? "bg-main"
                    : "bg-[#3d3d3d] opacity-30"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideer;
