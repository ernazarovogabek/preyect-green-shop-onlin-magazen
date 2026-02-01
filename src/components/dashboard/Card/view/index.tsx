


import { useState, useEffect, type FC } from "react";
import type { ProductType } from "../../../../@types";
import { Image } from 'antd'; // Ant Design Image komponenti
import {
  HeartOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
  RotateRightOutlined,
  RotateLeftOutlined,
  SyncOutlined, // 360 aylanish uchun icon
  ReloadOutlined
} from "@ant-design/icons";


interface Props {
  open: boolean;
  onClose: () => void;
  product: ProductType | null;
}

const ProductPreview: FC<Props> = ({ open, onClose, product }) => {
  const [activeSize, setActiveSize] = useState("XL");
  
  // 1. Rasmni almashtirish uchun state
  const [activeImg, setActiveImg] = useState<string>("");
  
  // 2. Aylantirish (Rotate) uchun state (0, 90, 180...)
  const [rotation, setRotation] = useState(0);
  
  // 3. 360 gradus tinimsiz aylanish uchun state
  const [isSpinning, setIsSpinning] = useState(false);

  // Modal ochilganda yoki product o'zgarganda statelarni yangilash
  useEffect(() => {
    if (product) {
      setActiveImg(product.main_image);
      setRotation(0); // Har safar yangi mahsulot ochilganda rasmni to'g'rilash
      setIsSpinning(false);
    }
  }, [product, open]);

  if (!open || !product) return null;

  // Rasmni aylantirish funksiyalari
  const handleRotateRight = () => setRotation((prev) => prev + 90);
  const handleRotateLeft = () => setRotation((prev) => prev - 90);
  const handleReset = () => {
    setRotation(0);
    setIsSpinning(false);
  };
  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
    setRotation(0); // Spin bo'lganda oddiy rotationni 0 qilish yaxshi
  };

  return (
  <>
     
    <div className="fixed inset-0 bg-black/50 z-[9999] flex justify-center items-center backdrop-blur-sm transition-all">
      {/* Modal Content */}
      <div className="bg-white w-[90%] max-w-[1100px] h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative p-6 md:p-10 animate-fade-in">

        {/* Yopish tugmasi */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition text-2xl z-50"
        >
          <CloseOutlined />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
          
          {/* --- CHAP TOMON (RASMLAR) --- */}
          <div className="flex gap-4 h-full">
            
            {/* Kichik rasmlar (Thumbnails) */}
            <div className="flex flex-col gap-3">
              {[product.main_image, product.main_image, product.main_image].map((img, i) => (
                <div
                  key={i}
                  onClick={() => {
                      setActiveImg(img);
                      handleReset(); // Rasm almashganda aylanishni tozalash
                  }}
                  className={`border rounded-md p-1 cursor-pointer transition w-[70px] h-[70px] 
                    ${activeImg === img ? "border-[#46A358]" : "hover:border-[#46A358]"}`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* KATTA RASM VA TOOLBAR */}
            <div className="relative border rounded-lg flex items-center justify-center bg-[#FBFBFB] w-full h-[400px] overflow-hidden group">
              
              {/* Asosiy Rasm */}
              <div 
                className={`transition-all duration-500 ease-in-out w-full h-full flex items-center justify-center
                  ${isSpinning ? "animate-[spin_4s_linear_infinite]" : ""}`}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <Image
                  src={activeImg}
                  alt={product.title}
                  className="!h-full !w-full object-contain mix-blend-multiply"
                  preview={false} // Previewni o'chirib qo'ydim, chunki bizda o'zimizning control bor
                />
              </div>

              {/* AYLANTIRISH TUGMALARI (Rasm ustida paydo bo'ladi) */}
              <div className="absolute bottom-4 flex gap-3 bg-white/90 backdrop-blur shadow-md px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                
                <button onClick={handleRotateLeft} title="Chapga aylantirish" className="hover:text-[#46A358] transition">
                    <RotateLeftOutlined className="text-xl" />
                </button>
                
                <button onClick={handleReset} title="Asliga qaytarish" className="hover:text-[#46A358] transition">
                    <ReloadOutlined className="text-xl" />
                </button>
                
                <button onClick={toggleSpin} title="360° Aylantirish" className={`hover:text-[#46A358] transition ${isSpinning ? 'text-[#46A358] animate-spin' : ''}`}>
                    <SyncOutlined className="text-xl" />
                </button>

                <button onClick={handleRotateRight} title="O'ngga aylantirish" className="hover:text-[#46A358] transition">
                    <RotateRightOutlined className="text-xl" />
                </button>

              </div>
            </div>
          </div>

          {/* --- O'NG TOMON (MA'LUMOTLAR) --- */}
          <div>
            <h1 className="text-[28px] font-bold text-[#3D3D3D]">
              {product.title}
            </h1>

            <div className="flex items-center gap-6 mt-3 border-b pb-4 mb-4">
              <span className="text-[#46A358] text-[22px] font-bold">
                ${product.price}
              </span>
              <span className="text-gray-400 text-sm">
                ★★★★★ (19 Customer Reviews)
              </span>
            </div>
   
            <h3 className="font-medium mb-2 text-[#3D3D3D]">Short Description:</h3>
            <p className="text-gray-500 leading-relaxed text-sm mb-6">
              {product.short_description ||
                "This product description comes from backend. You can describe plant care, delivery information, warranty and more details here."}
            </p>

            <div className="mt-8">
              <p className="font-medium mb-3 text-[#3D3D3D]">Size:</p>
              <div className="flex gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`w-9 h-9 rounded-full border text-sm font-medium transition
                      ${
                        activeSize === size
                          ? "border-[#46A358] text-[#46A358]"
                          : "border-gray-300 text-gray-500 hover:border-[#46A358]"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="bg-[#46A358] text-white px-8 py-3 rounded-md font-bold hover:bg-[#3e8e4e] transition uppercase">
                Buy Now
              </button>

              <button className="border border-[#46A358] text-[#46A358] px-6 py-3 rounded-md font-bold hover:bg-[#46A358] hover:text-white transition flex items-center gap-2 uppercase">
                <ShoppingCartOutlined /> Add To Cart
              </button>

              <button className="border border-gray-300 px-4 py-3 rounded-md hover:border-[#46A358] hover:text-[#46A358] transition">
                <HeartOutlined />
              </button>
            </div>
      
            <div className="text-sm text-gray-500 mt-8 space-y-2">
              <p><span className="text-gray-400">SKU:</span> {product._id}</p>
              <p><span className="text-gray-400">Category:</span> House-Plants</p>
              <p><span className="text-gray-400">Tags:</span> Home, Garden, Plants</p>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm font-medium text-[#3D3D3D]">
              <span>Share this product:</span>
              <span className="cursor-pointer hover:text-[#46A358]">Facebook</span>
              <span className="cursor-pointer hover:text-[#46A358]">Twitter</span>
              <span className="cursor-pointer hover:text-[#46A358]">Linkedin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPreview;


