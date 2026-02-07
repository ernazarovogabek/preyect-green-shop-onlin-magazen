"use client";
import { useState } from "react";
import Image from "next/image";

interface Category {
  id: string;
  title: string;
  img?: string;
}

const categories: Category[] = [
  { id: "1", title: "Beton va qorishmalar", img: "/img/MA1.png" },
  { id: "2", title: "Kabel mahsulotlari" },
  { id: "3", title: "To'ldiruvchilar" },
  { id: "4", title: "Metall profil buyumlar" },
  { id: "5", title: "Yog'och material va buyumlar" },
  { id: "6", title: "Plastmassalar" },
  { id: "7", title: "Keramika materiallari va buyumlar" },
  { id: "8", title: "Issiqlik izolyatsiyasi va akustik materiallar" },
  { id: "9", title: "Tom yopish va gidroizolyatsiya materiallari" },
  { id: "10", title: "Qoplamali va yopishtiruvchi materiallar va buyumlar" },
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Asosiy konteyner */}
      <div className="container mx-auto px-4 py-8">
        {/* Kategoriyalar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow cursor-pointer relative"
              onMouseEnter={() => setActiveMenu(category.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {/* Rasm (agar mavjud bo'lsa) */}
              {category.img && (
                <div className="mb-3 relative w-full h-32">
                  <Image
                    src={category.img}
                    alt={category.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Matn */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">
                  {category.title}
                </h3>

                {/* Qo'shimcha menyu (hover qilganda) */}
                {activeMenu === category.id && (
                  <div className="mt-3 space-y-2">
                    <div className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">
                      Batafsil ko&apos;rish →
                    </div>
                  </div>
                )}
              </div>

              {/* Maxsus menyu (4-kategoriya uchun) */}
              {category.id === "4" && activeMenu === "4" && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-1 px-2 hover:bg-gray-50 rounded">
                      Aloqa
                    </div>
                    <div className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-1 px-2 hover:bg-gray-50 rounded">
                      Biz haqimizda
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
