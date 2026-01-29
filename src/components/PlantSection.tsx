
import type { FC } from "react";

import GU from "../assets/img/GU.png";
import DA from "../assets/img/DA.png";

const PlantSection: FC = () => {
  return (
    <div className="w-[90%] mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* CARD 1 */}
        <div
          className="flex flex-col md:flex-row items-center justify-between
          bg-[#F5F5F5] p-6 rounded-xl relative overflow-hidden text-center md:text-right"
        >
          {/* IMAGE */}
          <img
            src={GU}
            alt="Summer cactus"
            className="w-[140px] sm:w-[160px] md:w-[180px] object-contain mb-4 md:mb-0"
          />

          {/* TEXT */}
          <div className="md:max-w-[55%]">
            <h3 className="text-[#3D3D3D] font-bold text-sm sm:text-base uppercase">
              Summer cactus
            </h3>
            <h3 className="text-[#3D3D3D] font-bold text-sm sm:text-base uppercase mb-2">
              & succulents
            </h3>

            <p className="text-[#727272] text-xs sm:text-sm mb-4">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>

            <button
              className="bg-main text-white px-4 py-2 rounded-md
              text-sm font-medium hover:bg-green-700 transition"
            >
              Find More →
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="flex flex-col md:flex-row items-center justify-between
          bg-[#F5F5F5] p-6 rounded-xl relative overflow-hidden text-center md:text-right"
        >
          {/* IMAGE */}
          <img
            src={DA}
            alt="Styling trends"
            className="w-[140px] sm:w-[160px] md:w-[180px] object-contain mb-4 md:mb-0"
          />

          {/* TEXT */}
          <div className="md:max-w-[55%]">
            <h3 className="text-[#3D3D3D] font-bold text-sm sm:text-base uppercase">
              Styling trends
            </h3>
            <h3 className="text-[#3D3D3D] font-bold text-sm sm:text-base uppercase mb-2">
              & much more
            </h3>

            <p className="text-[#727272] text-xs sm:text-sm mb-4">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>

            <button
              className="bg-main text-white px-4 py-2 rounded-md
              text-sm font-medium hover:bg-green-700 transition"
            >
              Find More →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlantSection;
