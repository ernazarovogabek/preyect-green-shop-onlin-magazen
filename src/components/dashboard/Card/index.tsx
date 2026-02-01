

import type { FC } from "react";
import { useState } from "react";
import type { ProductType } from "../../../@types";

import {
  HeartOutlined, // HeartFilled o'rniga outline chiroyliroq turadi
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { getData } from "../../../redux/shopp/shop-slice";

import ProductPreview from "../Card/view/index";

const Card: FC<ProductType> = (props) => {
  const [openPreview, setOpenPreview] = useState(false);
  const dispatch = useReduxDispatch();
  const { data } = useReduxSelector((state) => state.shopSlice);

  // Savatchada borligini tekshirish (icon rangini o'zgartirish uchun)
  const isInCart = data.some((item) => item._id === props._id);

  // Iconlar uchun umumiy stil
  const iconStyle =
    "w-[35px] h-[35px] bg-white rounded-lg flex items-center justify-center text-[#3D3D3D] text-[20px] shadow-sm hover:bg-[#46A358] hover:text-white cursor-pointer transition-all duration-300 hover:-translate-y-1";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Agar savatchada bo'lmasa qo'shamiz
    if (!isInCart) {
        dispatch(getData({ ...props, counter: 1, userPrice: props.price }));
    }
  };

  return (
    <>
      <div className="group relative transition-all duration-300">
        
        {/* --- IMAGE CONTAINER --- */}
        <div className="relative w-[370px] h-[500px] bg-[#FBFBFB] rounded-sm overflow-hidden flex items-center justify-center border-t-2 border-transparent group-hover:border-[#46A358] transition-all duration-300">
          
          {/* Discount Badge */}
          {props.discount && (
            <span className="absolute top-3 left-0 bg-[#46A358] text-white text-[13px] font-medium px-3 py-1 rounded-r-md z-10">
             13 % OFF
            </span>
          )}

          {/* Product Image */}
          <img
            src={props.main_image}
            alt={props.title}
            className="w-[85%] h-[85%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
            onClick={() => setOpenPreview(true)} // Rasmga bossa ham preview ochiladi
          />

          {/* --- HOVER ACTIONS (Slide Up Animation) --- */}
          <div className="absolute bottom-6 flex gap-4 opacity-0 translate-y-6 group-hover:opacity-100  ease-out z-20">
            
            {/* 1. Add to Cart */}
            <div
              className={`${iconStyle} ${isInCart ? "!bg-[#46A358] !text-white" : ""}`}
              onClick={handleAddToCart}
              title="Add to Cart"
            >
              <ShoppingCartOutlined />
            </div>

            {/* 2. Quick View */}
            <div
              className={iconStyle}
              onClick={() => setOpenPreview(true)}
              title="Quick View"
            >
              <SearchOutlined />
            </div>

            {/* 3. Wishlist */}
            <div className={iconStyle} title="Add to Wishlist">
              <HeartOutlined />
            </div>

          </div>
        </div>

        {/* --- PRODUCT INFO --- */}
        <div className="mt-3">
          <h3 
            className="text-[#3D3D3D] text-[16px] font-normal truncate cursor-pointer hover:text-[#46A358] transition-colors"
            onClick={() => setOpenPreview(true)}
          >
            {props.title}
          </h3>

          <div className="flex items-center gap-3 mt-1">
            <span className="text-[#46A358] text-[18px] font-bold">
              ${props.price}
            </span>

            {props.discount_price && (
              <span className="line-through text-[15px] font-normal">
                ${props.discount_price}
              </span>
            )}
          </div>
        </div>

      </div>

      {/* --- MODAL (PREVIEW) --- */}
      <ProductPreview
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        product={props}
      />
    </>
  );
};

export default Card;
