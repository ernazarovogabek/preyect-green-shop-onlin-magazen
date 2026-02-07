// import { Empty } from "antd";
// import { useReduxSelctor } from "../../../hooks/useRedux";
// import Card from "./card";
// import { useNavigate } from "react-router-dom";

// const Shopping = () => {
//   const { data } = useReduxSelctor((state) => state.shopSlice);
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="flex item-center justify-between text-start border-b border-[#46A358] pb-3">
//         <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[40%]">
//           Products
//         </h2>
//         <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
//           Price
//         </h2>
//         <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
//           Quantity
//         </h2>
//         <h2 className="text-[#3D3D3D] text-[16px] font-medium pb-[10px] w-[20%]">
//           Total
//         </h2>
//         <h3>Delete</h3>
//       </div>
//       {data.length ? (
//         data.map((value) => <Card key={value._id} {...value} />)
//       ) : (
//         <div className="flex justify-center flex-col items-center">
//           <Empty />
//           <button
//             className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[10px]"
//             onClick={() => navigate("/")}
//           >
//             Go shop
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Shopping;




















































import { Empty } from "antd";
import { useReduxSelctor } from "../../../hooks/useRedux";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const Shopping = () => {
  const { data } = useReduxSelctor((state) => state.shopSlice);
  const navigate = useNavigate();

  return (
    // O'ZGARISH: Kichik ekranlarda (280px) to'liq kenglik (w-full) va kamroq padding (px-2) ishlatildi.
    // Katta ekranlarda (md) esa 90% kenglik saqlandi.
    <div className="w-full px-2 sm:px-4 md:max-w-[90%] md:mx-auto py-6">
      
      {/* Desktop Header - faqat katta (md) ekranlarda ko'rinadi */}
      <div className="hidden md:flex items-center justify-between text-start border-b border-[#46A358] pb-3 mb-4">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[40%]">
          Products
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[20%]">
          Price
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[20%]">
          Quantity
        </h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[20%]">
          Total
        </h2>
        <h3 className="w-[80px] text-center font-medium">Delete</h3>
      </div>

      {/* Mobile Header - faqat mobil ekranlarda (280px+) */}
      <div className="md:hidden mb-4">
        <h2 className="text-[#3D3D3D] text-[16px] sm:text-[18px] font-bold border-b border-[#46A358] pb-2">
          Shopping Cart ({data.length})
        </h2>
      </div>

      {data.length ? (
        <div className="space-y-4">
          {data.map((value) => (
            // Card komponenti o'zi ichida responsive bo'lishi kerak
            <div key={value._id} className="w-full">
              <Card {...value} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-8 sm:py-12">
          {/* Empty komponenti kichik ekranda sig'ishi uchun rasm o'lchamini style bilan boshqarish mumkin */}
          <Empty 
            description={<span className="text-sm text-gray-500">Savatchangiz bo'sh</span>} 
            imageStyle={{ height: 100 }} 
          />
          <button
            className="bg-[#46A358] flex rounded-md items-center justify-center gap-2 text-sm sm:text-base text-white h-[40px] sm:h-[45px] px-6 mt-6 hover:bg-[#3a8a48] transition-colors w-full max-w-[200px]"
            onClick={() => navigate("/")}
          >
            Go Shop
          </button>
        </div>
      )}
    </div>
  );
};

export default Shopping;