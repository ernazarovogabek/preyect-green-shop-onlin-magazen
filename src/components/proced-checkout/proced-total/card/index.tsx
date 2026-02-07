



import { FC } from "react";
import { CartTypeData } from "../../../../@types";
import { DeleteOutlined } from "@ant-design/icons";

const Card: FC<CartTypeData> = ({
  main_image,
  title,
  _id,
  counter,
  userPrice,
}) => {
  return (
    <div className="bg-[#eee] p-4 md:p-2 rounded-lg">
      {/* Desktop View - horizontal */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4 w-[40%]">
          <img className="w-[70px] h-[70px] object-cover rounded" src={main_image} alt={title} />
          <div>
            <h3 className="text-[16px] font-medium">{title}</h3>
            <p className="text-[14px] font-normal pt-[10px] text-[#A5A5A5]">
              SKU: {_id}
            </p>
          </div>
        </div>
        <div className="text-[#727272] text-[16px] font-medium w-[20%] text-center">
          (X{counter})
        </div>
        <div className="text-[#727272] text-[16px] font-medium w-[20%] text-center">
          ${Number(userPrice).toFixed(2)}
        </div>
        <div className="w-[80px] flex justify-center">
          <DeleteOutlined className="text-[20px] text-red-500 cursor-pointer hover:text-red-700 transition-colors" />
        </div>
      </div>

      {/* Mobile View - vertical */}
      <div className="md:hidden space-y-3">
        <div className="flex items-start justify-between gap-3">
          <img className="w-[60px] h-[60px] object-cover rounded" src={main_image} alt={title} />
          <div className="flex-1">
            <h3 className="text-[14px] md:text-[16px] font-medium">{title}</h3>
            <p className="text-[12px] font-normal pt-1 text-[#A5A5A5]">
              SKU: {_id}
            </p>
          </div>
          <div className="flex-shrink-0">
            <DeleteOutlined className="text-[18px] text-red-500 cursor-pointer hover:text-red-700 transition-colors" />
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-300">
          <div className="text-[#727272] text-[14px] font-medium">
            Quantity: <span className="font-bold">(X{counter})</span>
          </div>
          <div className="text-[#46A358] text-[16px] font-bold">
            ${Number(userPrice).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;