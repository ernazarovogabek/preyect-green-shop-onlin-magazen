

import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/useRedux"; // Hookni import qiling

const CardTotal = () => {
  const navigate = useNavigate();
  const { data } = useReduxSelector((state) => state.shopSlice);

  // Umumiy narxni hisoblash
  const subTotal = data.reduce((acc, item) => acc + (item.price * item.counter), 0);
  const shippingCost = 16.00; // Doimiy yetkazib berish narxi (agar kerak bo'lsa o'zgartiring)
  const total = subTotal > 0 ? subTotal + shippingCost : 0;

  return (
    <div className="w-full md:w-[350px] lg:w-[400px] px-6 py-6 border-l border-gray-100">
      <h3 className="pb-4 text-[#3D3D3D] font-bold text-[20px] border-b border-[#46A358]/20">Cart Totals</h3>
      
      {/* Coupon Form */}
      <Form className="flex mt-6 mb-8">
        <input
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border border-[#46A358] pl-3 py-2 w-full rounded-l-md outline-none text-sm placeholder:font-light focus:ring-1 focus:ring-[#46A358]"
        />
        <button className="bg-[#46A358] text-white px-5 rounded-r-md font-medium hover:bg-[#3c8c4b] transition-colors">
          Apply
        </button>
      </Form>

      {/* Prices Summary */}
      <div className="flex flex-col gap-4 mb-8">
         <div className="flex justify-between items-center text-[#3D3D3D]">
            <span>Subtotal</span>
            <span className="font-medium">${subTotal.toFixed(2)}</span>
         </div>
         <div className="flex justify-between items-center text-[#3D3D3D]">
            <span>Coupon Discount</span>
            <span className="font-light">(-) 00.00</span>
         </div>
         <div className="flex justify-between items-center text-[#3D3D3D]">
            <span>Shiping</span>
            <span className="font-medium">${subTotal > 0 ? shippingCost.toFixed(2) : '0.00'}</span>
         </div>
         
         <div className="flex justify-between items-center text-[#3D3D3D] font-bold text-lg pt-4 border-t border-[#46A358]/20 mt-2">
            <span className="text-[#3D3D3D]">Total</span>
            <span className="text-[#46A358]">${total.toFixed(2)}</span>
         </div>
      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="bg-[#46A358] hover:bg-[#3c8c4b] transition-colors flex rounded-md items-center justify-center gap-2 text-base font-bold text-white w-full h-12 uppercase"
        disabled={data.length === 0}
      >
        Proceed To Checkout
      </button>
      
      <Link to={"/"} className="flex justify-center mt-4">
        <button className="text-[#46A358] hover:text-[#3c8c4b] text-sm font-medium cursor-pointer transition-colors">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CardTotal;


































































































// import { Form } from "antd";
// import { Link } from "react-router-dom";
// import { useReduxSelector } from "../../../hooks/useRedux"; // Hookni import qiling

// const CardTotal = () => {
//   const { data, coupon } = useReduxSelector((state) => state.shopSlice);

//   // Umumiy narxni hisoblash
//   const subTotal = data.reduce((acc, item) => acc + (item.price * item.counter), 0);
//   const shippingCost = 16.0; // Doimiy yetkazib berish narxi
//   const discountAmount = (subTotal * coupon) / 100;
//   const total = subTotal > 0 ? subTotal - discountAmount + shippingCost : 0;

//   return (
//     <div className="w-full md:w-[350px] lg:w-[400px] px-6 py-6 border-l border-gray-100">
//       <h3 className="pb-4 text-[#3D3D3D] font-bold text-[20px] border-b border-[#46A358]/20">Cart Totals</h3>
      
//       {/* Coupon Form */}
//       <Form className="flex mt-6 mb-8">
//         <input
//           name="coupon"
//           placeholder="Enter coupon code here..."
//           className="border border-[#46A358] pl-3 py-2 w-full rounded-l-md outline-none text-sm placeholder:font-light focus:ring-1 focus:ring-[#46A358]"
//         />
//         <button className="bg-[#46A358] text-white px-5 rounded-r-md font-medium hover:bg-[#3c8c4b] transition-colors">
//           Apply
//         </button>
//       </Form>

//       {/* Prices Summary */}
//       <div className="flex flex-col gap-4 mb-8">
//          <div className="flex justify-between items-center text-[#3D3D3D]">
//             <span>Subtotal</span>
//             <span className="font-medium">${subTotal.toFixed(2)}</span>
//          </div>
//          <div className="flex justify-between items-center text-[#3D3D3D]">
//             <span>Coupon Discount</span>
//             <span className="font-light">(-) {discountAmount.toFixed(2)}</span>
//          </div>
//          <div className="flex justify-between items-center text-[#3D3D3D]">
//             <span>Shipping</span>
//             <span className="font-medium">${subTotal > 0 ? shippingCost.toFixed(2) : '0.00'}</span>
//          </div>
         
//          <div className="flex justify-between items-center text-[#3D3D3D] font-bold text-lg pt-4 border-t border-[#46A358]/20 mt-2">
//             <span className="text-[#3D3D3D]">Total</span>
//             <span className="text-[#46A358]">${total.toFixed(2)}</span>
//          </div>
//       </div>

//       {/* Proceed To Checkout tugmasi */}
//       {data.length > 0 ? (
//         <Link to="/checkout">
//           <button
//             className="bg-[#46A358] hover:bg-[#3c8c4b] transition-colors flex rounded-md items-center justify-center gap-2 text-base font-bold text-white w-full h-12 uppercase"
//           >
//             Proceed To Checkout
//           </button>
//         </Link>
//       ) : (
//         <button
//           disabled
//           className="bg-[#46A358] opacity-50 cursor-not-allowed transition-colors flex rounded-md items-center justify-center gap-2 text-base font-bold text-white w-full h-12 uppercase"
//         >
//           Proceed To Checkout
//         </button>
//       )}
      
//       <Link to={"/"} className="flex justify-center mt-4">
//         <button className="text-[#46A358] hover:text-[#3c8c4b] text-sm font-medium cursor-pointer transition-colors">
//           Continue Shopping
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default CardTotal;
