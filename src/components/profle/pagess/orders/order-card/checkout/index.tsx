
import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import VR from '../../../../../../assets/img/VR.jpg'
import type { ShopCartType } from "../../../../../../@types";
import Header from '../../../../../../components/header' 
import Footer from "../../../../../../components/footer/Footer";

// --- ICONS ---
const CashIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);
const CardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
);
const WalletIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);


const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // FORM STATE
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    notes: ""
  });

  const { data } = useSelector((state: any) => state.shopSlice);

  const subtotal = data?.reduce((acc: number, item: ShopCartType) => acc + (item.userPrice || 0), 0) || 0;
  const shipping = 16.0;
  const total = subtotal + shipping;

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data || data.length === 0) {
      message.error("Savat bo'sh!");
      return;
    }
    
    // Simple Validation
    if(!formData.firstName || !formData.phone || !formData.email) {
        message.warning("Iltimos maydonlarni to'ldiring");
        return;
    }
    setIsModalOpen(true);
  };

  // --- PREMIUM INPUT COMPONENT ---
  const InputField = ({ label, required, className, ...props }: any) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-[14px] font-semibold text-gray-700 flex items-center gap-1 transition-colors group-focus-within:text-[#46A358]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className="w-full bg-white border border-gray-200 text-gray-800 text-[15px] rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:border-[#46A358] focus:ring-4 focus:ring-[#46A358]/10 hover:border-gray-300 placeholder:text-gray-400 shadow-sm"
      />
    </div>
  );

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10 px-4 font-sans text-[#3D3D3D]">
      <div className="w-[90%] mx-auto">
        < Header />
        {/* Header Section */}
        <div className="mb-10 flex items-center gap-4">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Checkout</h1>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: BILLING FORM */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-50">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#46A358]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">VR.242547</h2>
                </div>

                <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                        label="First Name" required type="text" placeholder="Og'abek" 
                        name="firstName" value={formData.firstName} onChange={handleChange} 
                    />
                    <InputField 
                        label="Last Name" required type="text" placeholder="Ernazarov" 
                        name="lastName" value={formData.lastName} onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                        label="Country / Region" required type="text" placeholder="Region" 
                        name="country" value={formData.country} onChange={handleChange}
                    />
                    <InputField 
                        label="City" required type="text" placeholder="Tashkent" 
                        name="city" value={formData.city} onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                        label="Street Address" required type="text" placeholder="Sergiliy" 
                        name="street" value={formData.street} onChange={handleChange}
                    />
                    <InputField 
                        label="Apartment" type="text" placeholder="C1" 
                        name="apartment" value={formData.apartment} onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                        label="State" required type="text" placeholder="Tashkent City" 
                        name="state" value={formData.state} onChange={handleChange}
                    />
                    <InputField 
                        label="Zip Code" required type="text" placeholder="VR.242547" 
                        name="zip" value={formData.zip} onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                        label="Email Address" required type="email" placeholder="example@gmail.com" 
                        name="email" value={formData.email} onChange={handleChange}
                    />
                    
                    {/* Phone Input Custom Style */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-semibold text-gray-700 flex items-center gap-1">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium z-10 select-none pointer-events-none group-focus-within:text-[#46A358] transition-colors">
                                +998
                            </span>
                            <input 
                                required 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-16 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none text-[15px] transition-all duration-300 focus:border-[#46A358] focus:ring-4 focus:ring-[#46A358]/10 hover:border-gray-300 placeholder:text-gray-400 shadow-sm"
                                placeholder="70 039 06 25" 
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <label className="text-[14px] font-semibold text-gray-700 mb-2 block">Order Notes</label>
                    <textarea 
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-[15px] outline-none transition-all duration-300 focus:border-[#46A358] focus:ring-4 focus:ring-[#46A358]/10 hover:border-gray-300 h-32 resize-none shadow-sm placeholder:text-gray-400"
                        placeholder="Special notes for delivery (e.g. door code, landmarks)."
                    />
                </div>
                </div>
            </div>
          </div>

          {/* RIGHT SIDE: SUMMARY & PAYMENT */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 sticky top-6">
            
            {/* Order Items Card */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Your Order</h2>
              
              <div className="flex flex-col gap-5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {data?.map((item: ShopCartType) => (
                  <div key={item._id} className="group flex items-center justify-between transition-all hover:bg-gray-50 p-2 rounded-xl -mx-2">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#F9F9F9] rounded-xl p-1 border border-gray-100 group-hover:border-[#46A358]/30 transition-colors flex items-center justify-center relative overflow-hidden">
                        <img src={item.main_image} alt="" className="w-full h-full object-contain mix-blend-multiply transition-transform group-hover:scale-110 duration-500" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-gray-800 line-clamp-1 w-36">{item.title}</h4>
                        <p className="text-[13px] text-gray-500 font-medium mt-0.5">SKU: <span className="text-gray-400">{item._id.slice(0,6)}</span></p>
                        <p className="text-[13px] text-gray-400 mt-0.5">x{item.counter} item(s)</p>
                      </div>
                    </div>
                    <span className="font-bold text-[#46A358] text-[16px]">${(item.price * item.counter).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-gray-200 space-y-4">
                <div className="flex justify-between text-[15px]">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[15px]">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold text-gray-800">${shipping.toFixed(2)}</span>
                </div>
                
                <div className="my-4 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <div className="text-right">
                    <span className="block text-2xl font-extrabold text-[#46A358]">${total.toFixed(2)}</span>
                    <span className="text-[11px] text-gray-400 font-medium">VAT included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Method</h2>
              
              <div className="space-y-4">
                {[
                  { id: 'paypal', label: 'Credit Card', desc: 'Secure payment via Stripe', icon: <CardIcon /> },
                  { id: 'bank', label: 'Bank Transfer', desc: 'Direct bank transfer', icon: <WalletIcon /> },
                  { id: 'cash', label: 'Cash on Delivery', desc: 'Pay upon receipt', icon: <CashIcon /> }
                ].map((method) => (
                  <div 
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`group relative flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      paymentMethod === method.id 
                      ? "border-[#46A358] bg-[#46A358]/5 shadow-sm" 
                      : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        paymentMethod === method.id ? 'bg-[#46A358] text-white shadow-md shadow-green-200' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                    }`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-[15px] font-bold transition-colors ${paymentMethod === method.id ? 'text-[#46A358]' : 'text-gray-700'}`}>{method.label}</h3>
                      <p className="text-[12px] text-gray-400 font-medium">{method.desc}</p>
                    </div>
                    
                    {/* Custom Radio Circle */}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        paymentMethod === method.id ? 'border-[#46A358] bg-[#46A358]' : 'border-gray-200'
                    }`}>
                        {paymentMethod === method.id && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="group w-full mt-8 bg-[#46A358] text-white py-4.5 rounded-2xl font-bold text-[16px] hover:bg-[#3d914d] shadow-xl shadow-green-200 hover:shadow-green-300 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative"
              >
                <span className="relative z-10">Place Order</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                {/* Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </button>
            </div>
          </div>
        </form>

        {/* MODAL - REDESIGNED */}
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          width={500}
          centered
          closeIcon={
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500 hover:text-red-500 z-50">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
          }
          className="rounded-[32px] overflow-hidden checkout-success-modal"
          bodyStyle={{ padding: 0 }}
        >
          <div className="bg-white p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 via-green-500 to-green-600"></div>
            
            {/* SUCCESS IMAGE - TO'G'IRLANDI */}
            <div className="mb-6 relative z-10">
                <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                    src={VR} 
                    alt="Success" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mx-auto animate-bounce-short relative z-10"
                />
            </div>

            <h2 className="text-3xl font-black text-gray-800 mb-2 tracking-tight">Buyurtmangiz Qabul Qilindi!</h2>
            <p className="text-gray-500 text-[15px] mb-6 max-w-xs mx-auto leading-relaxed">
              Xaridingiz uchun rahmat. Tasdiqlash xabari <b>{formData.email}</b> manziliga yuboriladi.
            </p>

            {/* SAVATDAGI MAHSULOTLAR (MODAL ICHIDA) */}
            <div className="w-full mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-left pl-1">Sotib olingan mahsulotlar</p>
                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar justify-start px-1">
                    {data?.map((item: ShopCartType) => (
                        <div key={item._id} className="relative group shrink-0">
                            <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-xl p-1.5 flex items-center justify-center overflow-hidden">
                                <img 
                                    src={item.main_image} 
                                    alt={item.title} 
                                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" 
                                />
                            </div>
                            <span className="absolute -top-1.5 -right-1.5 bg-[#46A358] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm border border-white">
                                {item.counter}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Receipt Card */}
            <div className="w-full bg-[#FAFAFA] rounded-2xl p-6 mb-8 border border-dashed border-gray-200 relative">
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white rounded-full border-r border-gray-200"></div>
              <div className="absolute -right-3 top-1/2 w-6 h-6 bg-white rounded-full border-l border-gray-200"></div>

              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 border-dashed">
                <span className="text-sm font-medium text-gray-500">Buyurtma ID</span>
                <span className="font-mono font-bold text-gray-800 bg-white px-2 py-1 rounded border border-gray-100">VR.242547</span>
              </div>
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 border-dashed">
                <span className="text-sm font-medium text-gray-500">Sana</span>
                <span className="font-bold text-gray-800">{formattedDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Jami Summa</span>
                <span className="font-extrabold text-[#46A358] text-xl">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/Profile")}
              className="w-full bg-[#46A358] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:shadow-green-300 hover:bg-[#3d914d] transition-all duration-300 transform active:scale-[0.98]"
            >
              Buyurtmalarni yetkazib berish
            </button>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-5 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Yopish
            </button>
          </div>
        </Modal>
      </div>
      
      {/* Scrollbar Customization Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
        
        @keyframes shine {
            100% { left: 125%; }
        }
        .animate-shine {
            animation: shine 1s;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default CheckoutPage;