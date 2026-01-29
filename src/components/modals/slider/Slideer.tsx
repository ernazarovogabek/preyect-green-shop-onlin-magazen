
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
