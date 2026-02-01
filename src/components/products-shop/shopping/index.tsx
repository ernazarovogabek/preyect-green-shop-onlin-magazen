

// import { Empty, Button, Popconfirm } from "antd";
// import { useNavigate } from "react-router-dom";
// import { useReduxSelector, useReduxDispatch } from "../../../hooks/useRedux";
// import type  { increment, decrement, removeItem } from "../../../redux/shopp/shop-slice"; 
// import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

// const Shopping = () => {
//   const navigate = useNavigate();
//   const dispatch = useReduxDispatch();
//   const { data } = useReduxSelector((state) => state.shopSlice);

//   // Batafsil sahifaga o'tish funksiyasi
//   const handleViewDetail = (id: string) => {
//     navigate(`/shop/${id}`); // <-- Bu yerni Routeringizga moslang (masalan: /product/${id})
//   };

//   return (
//     <div className="w-[90%] mx-auto mt-10">
//       <div className="flex items-center border-b border-[#46A358] pb-4 mb-6">
//         <h2 className="text-[#3D3D3D] text-[16px] font-bold w-[40%]">Products</h2>
//         <h2 className="text-[#3D3D3D] text-[16px] font-bold w-[20%] text-center">Price</h2>
//         <h2 className="text-[#3D3D3D] text-[16px] font-bold w-[20%] text-center">Quantity</h2>
//         <h2 className="text-[#3D3D3D] text-[16px] font-bold w-[15%] text-center">Total</h2>
//         <h2 className="text-[#3D3D3D] text-[16px] font-bold w-[5%] text-center"></h2>
//       </div>

//       {data.length ? (
//         data.map((item) => (
//           <div key={item._id} className="flex items-center bg-[#FBFBFB] p-4 mb-3 rounded-md hover:shadow-sm transition-shadow">
            
//             {/* 1. PRODUCT INFO (CLICKABLE) */}
//             <div className="w-[40%] flex items-center gap-4">
//               {/* Rasmga bosganda o'tish */}
//               <img 
//                 src={item.main_image} 
//                 alt={item.title} 
//                 className="w-16 h-16 object-cover rounded-md border border-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
//                 onClick={() => handleViewDetail(item._id)} 
//               />
              
//               {/* Sarlavhaga bosganda o'tish */}
//               <div 
//                 className="cursor-pointer group" 
//                 onClick={() => handleViewDetail(item._id)}
//               >
//                 <h3 className="font-medium text-[#3D3D3D] text-sm md:text-base group-hover:text-[#46A358] transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-[#727272] text-xs group-hover:text-[#46A358]/70">
//                   SKU: {item._id.slice(0, 6)}
//                 </p>
//               </div>
//             </div>

//             {/* 2. PRICE */}
//             <div className="w-[20%] text-center font-medium text-[#727272]">
//               ${item.price.toFixed(2)}
//             </div>

//             {/* 3. QUANTITY (INCREMENT / DECREMENT) */}
//             <div className="w-[20%] flex justify-center items-center gap-3">
//               <Button 
//                 shape="circle" 
//                 icon={<MinusOutlined />} 
//                 size="small"
//                 className="bg-[#46A358] text-white border-none hover:!bg-[#3c8c4b] disabled:bg-gray-300"
//                 onClick={() => dispatch(decrement(item._id))}
//                 disabled={item.counter <= 1}
//               />
//               <span className="font-bold text-[#3D3D3D] text-lg w-6 text-center">{item.counter}</span>
//               <Button 
//                 shape="circle" 
//                 icon={<PlusOutlined />} 
//                 size="small"
//                 className="bg-[#46A358] text-white border-none hover:!bg-[#3c8c4b]"
//                 onClick={() => dispatch(increment(item._id))}
//               />
//             </div>

//             {/* 4. TOTAL PRICE */}
//             <div className="w-[15%] text-center font-bold text-[#46A358]">
//               ${(item.price * item.counter).toFixed(2)}
//             </div>

//             {/* 5. DELETE BUTTON */}
//             <div className="w-[5%] text-center">
//               <Popconfirm
//                 title="Mahsulotni o'chirasizmi?"
//                 onConfirm={() => dispatch(removeItem(item._id))}
//                 okText="Ha"
//                 cancelText="Yo'q"
//               >
//                 <DeleteOutlined className="text-[#727272] hover:text-red-500 cursor-pointer text-lg transition-colors" />
//               </Popconfirm>
//             </div>

//           </div>
//         ))
//       ) : (
//         <div className="flex justify-center flex-col items-center mt-10 py-10 bg-gray-50 rounded-lg">
//           <Empty description="Savat bo'sh" />
//           <button
//             className="bg-[#46A358] hover:bg-[#3c8c4b] text-white font-bold py-2 px-6 rounded-md mt-4 transition-colors"
//             onClick={() => navigate("/")}
//           >
//             Do'konga qaytish
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Shopping;

































































import { Empty, Button, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { useReduxSelector, useReduxDispatch } from "../../../hooks/useRedux";
import { increment, decrement, removeItem } from "../../../redux/shopp/shop-slice";

const Shopping = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { data } = useReduxSelector((state) => state.shopSlice);

  // Detail page
  const handleViewDetail = (id: string) => {
    navigate(`/shop/${id}`);
  };

  // EMPTY STATE
  if (!data.length) {
    return (
      <div className="w-[90%] mx-auto mt-16 flex flex-col items-center bg-gray-50 py-14 rounded-lg">
        <Empty description="Savat bo‘sh" />
        <button
          onClick={() => navigate("/")}
          className="bg-[#46A358] hover:bg-[#3c8c4b] text-white font-bold py-2 px-6 rounded-md mt-4 transition-colors"
        >
          Do‘konga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto mt-10">
      {/* HEADER */}
      <div className="flex items-center border-b border-[#46A358] pb-4 mb-6">
        <h2 className="w-[40%] font-bold text-[#3D3D3D]">Products</h2>
        <h2 className="w-[20%] text-center font-bold text-[#3D3D3D]">Price</h2>
        <h2 className="w-[20%] text-center font-bold text-[#3D3D3D]">Quantity</h2>
        <h2 className="w-[15%] text-center font-bold text-[#3D3D3D]">Total</h2>
        <div className="w-[5%]" />
      </div>

      {/* ITEMS */}
      {data.map((item) => (
        <div
          key={item._id}
          className="flex items-center bg-[#FBFBFB] p-4 mb-3 rounded-md hover:shadow-sm transition-shadow"
        >
          {/* PRODUCT */}
          <div className="w-[40%] flex items-center gap-4">
            <img
              src={item.main_image}
              alt={item.title}
              onClick={() => handleViewDetail(item._id)}
              className="w-16 h-16 object-cover rounded-md border cursor-pointer hover:opacity-80"
            />

            <div
              onClick={() => handleViewDetail(item._id)}
              className="cursor-pointer group"
            >
              <h3 className="font-medium text-[#3D3D3D] group-hover:text-[#46A358] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#727272]">
                SKU: {item._id.slice(0, 6)}
              </p>
            </div>
          </div>

          {/* PRICE */}
          <div className="w-[20%] text-center text-[#727272] font-medium">
            ${item.price.toFixed(2)}
          </div>

          {/* QUANTITY */}
          <div className="w-[20%] flex justify-center items-center gap-3">
            <Button
              shape="circle"
              icon={<MinusOutlined />}
              size="small"
              disabled={item.counter <= 1}
              className="bg-[#46A358] text-white border-none hover:!bg-[#3c8c4b]"
              onClick={() => dispatch(decrement(item._id))}
            />
            <span className="font-bold text-lg w-6 text-center">
              {item.counter}
            </span>
            <Button
              shape="circle"
              icon={<PlusOutlined />}
              size="small"
              className="bg-[#46A358] text-white border-none hover:!bg-[#3c8c4b]"
              onClick={() => dispatch(increment(item._id))}
            />
          </div>

          {/* TOTAL */}
          <div className="w-[15%] text-center font-bold text-[#46A358]">
            ${(item.price * item.counter).toFixed(2)}
          </div>

          {/* DELETE */}
          <div className="w-[5%] text-center">
            <Popconfirm
              title="Mahsulotni o‘chirasizmi?"
              okText="Ha"
              cancelText="Yo‘q"
              onConfirm={() => dispatch(removeItem(item._id))}
            >
              <DeleteOutlined className="text-lg cursor-pointer hover:text-red-500 transition-colors" />
            </Popconfirm>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shopping;
