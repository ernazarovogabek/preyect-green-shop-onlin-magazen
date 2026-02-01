

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getUserApi, updateUserApi } from "../../../../utils/shoppp";
import toast from "react-hot-toast";

interface Props {
  user?: any;
  setUser?: (u: any) => void;
}

// SVG Icons
const CameraIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Accdetail: React.FC<Props> = ({ user: propUser, setUser }) => {
  const { data: user } = useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserApi,
    enabled: !propUser,
  });

  const mutation = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (data) => {
      toast.success("O'zgarishlar muvaffaqiyatli saqlandi!");
      Cookies.set("user", JSON.stringify(data));
      setUser && setUser(data);
    },
    onError: () => toast.error("Saqlashda xatolik yuz berdi"),
  });

  const [form, setForm] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
  });
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const src = propUser ?? user;
    if (src) {
      setForm({
        firstName: src.name || src.firstName || "",
        lastName: src.surname || src.lastName || "",
        email: src.email || "",
        phone: src.phone_number || src.phone || "",
        username: src.username || "",
      });
      if (src.profile_photo) setPreview(src.profile_photo);
    }
  }, [user, propUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => mutation.mutate(form);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
      <div className="mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-800">Shaxsiy Ma'lumotlar</h2>
        <p className="text-sm text-gray-500 mt-1">Profilingiz ma'lumotlarini yangilang.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side: Avatar Upload */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-50 flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <UserIcon />
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-white border border-gray-200 p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-50 transition-colors group-hover:scale-105">
              <input type="file" hidden accept="image/*" onChange={handleImage} />
              <CameraIcon />
            </label>
          </div>
          <p className="text-xs text-gray-400 text-center md:text-left max-w-[150px]">
            Tavsiya etilgan o'lcham: 300x300 px (JPG, PNG)
          </p>
        </div>

        {/* Right Side: Form Fields */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Ism" 
              name="firstName" 
              value={form.firstName || ""} 
              onChange={handleChange} 
              placeholder="Ismingizni kiriting"
            />
            <InputField 
              label="Familiya" 
              name="lastName" 
              value={form.lastName || ""} 
              onChange={handleChange} 
              placeholder="Familiyangizni kiriting"
            />
            
            <InputField 
              label="Email" 
              name="email" 
              type="email"
              value={form.email || ""} 
              onChange={handleChange} 
              placeholder="example@mail.com"
            />

            <InputField 
              label="Username" 
              name="username" 
              value={form.username || ""} 
              onChange={handleChange} 
              placeholder="@username"
            />

            {/* Phone Input Custom Design */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Telefon raqam <span className="text-red-500">*</span>
              </label>
              <div className="flex relative">
                <span className="inline-flex items-center px-4 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg font-medium">
                  +998
                </span>
                <input
                  type="text"
                  name="phone"
                  value={form.phone || ""}
                  onChange={handleChange}
                  placeholder="90 123 45 67"
                  className="rounded-none rounded-r-lg bg-white border border-gray-300 text-gray-900 focus:ring-[#46A358] focus:border-[#46A358] block flex-1 min-w-0 w-full text-sm p-2.5 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSave}
              disabled={mutation.status === 'pending'}
              className={`
                px-8 py-3 rounded-lg text-white font-medium text-sm transition-all duration-200 shadow-md
                ${mutation.status === 'pending' 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-[#46A358] hover:bg-[#3d914d] hover:shadow-lg active:scale-95"}
              `}
            >
              {mutation.status === 'pending' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saqlanmoqda...
                </span>
              ) : (
                "O'zgarishlarni saqlash"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component with improved styles
const InputField = ({ label, className, ...props }: any) => (
  <div className={className}>
    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      {...props}
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#46A358] focus:border-[#46A358] block w-full p-2.5 outline-none transition-colors placeholder-gray-400"
    />
  </div>
);

export default Accdetail;