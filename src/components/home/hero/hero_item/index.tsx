
import type { FC } from "react";
import { HeroCarouselType } from "../../../../@types";

const HeroItem: FC<HeroCarouselType> = (props) => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col md:flex-row items-start md:items-center px-4 md:px-10 py-8 md:py-0 h-auto md:h-[450px]">
      {/* Text Content - Mobil: tepada, Desktop: chapda */}
      <div className="w-full md:w-auto mb-6 md:mb-0">
        <h3 className="text-[#3D3D3D] text-base font-medium">
          {props.subTitle}
        </h3>
        <h2 className="font-black text-[#3D3D3D] text-4xl md:text-8xl uppercase leading-[1.2] md:leading-[90px] pt-[7px] pb-[5px]">
          {props.title} <span className="text-[#46A358]">Planet</span>
        </h2>
        <p className="w-full md:w-3/5 text-[#727272] text-[14px] leading-6 mb-5">
          {props.description}
        </p>
        <button className="w-full md:w-[135px] h-[40px] rounded-[6px] bg-[#46A358] text-white text-[16px] font-bold uppercase">
          {props.buttonText}
        </button>
      </div>

      {/* Images - Mobil: pastda, Desktop: o'ngda */}
      <div className="relative w-full md:w-auto mt-4 md:mt-0 md:ml-auto">
        <img 
          src={props.big_img_url} 
          alt="big" 
          className=""
        />
        <img
          className="absolute bottom-[20px]"
          src={props.small_img_url}
          alt="small"
        />
      </div>
    </div>
  );
};

export default HeroItem;