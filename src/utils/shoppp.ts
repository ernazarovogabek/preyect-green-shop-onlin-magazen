
// import Cookies from "js-cookie";

// export const getUserApi = async () => {
//   // Cookie bor bo‘lsa – shundan olamiz
//   const userCookie = Cookies.get("user");

//   if (userCookie) {
//     return JSON.parse(userCookie);
//   }

//   // Default user (siz bergan data)
//   return {
//     name: "og'abek",
//     surname: "ernazarov",
//     email: "ernazarovogabek2@gmail.com",
//     phone: "70 039 06 25 , 50 221 06 52",
//     username: "ernazarovogabek2@gamil.com",
//     image: "",
//   };
// };

// export const updateUserApi = async (data: any) => {
//   const updatedUser = {
//     name: data.firstName,
//     surname: data.lastName,
//     email: data.email,
//     phone: data.phone,
//     username: data.username,
//     image: data.image || "",
//   };

//   // Cookie ga saqlaymiz
//   Cookies.set("user", JSON.stringify(updatedUser));

//   // react-query onSuccess uchun qaytaramiz
//   return updatedUser;
// };





















// utils/shoppp.ts

// =========================
// FILE → BASE64
// =========================
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
};

// =========================
// GET USER (localStorage)
// =========================
export const getUserApi = async () => {
  const user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  }

  // Default user (agar localStorage bo‘sh bo‘lsa)
  const defaultUser = {
    name: "og'abek",
    surname: "ernazarov",
    email: "ernazarovogabek2@gmail.com",
    phone: "70 039 06 25",
    username: "ernazarovogabek2@gmail.com",
    image: "",
  };

  localStorage.setItem("user", JSON.stringify(defaultUser));
  return defaultUser;
};

// =========================
// UPDATE USER (localStorage)
// =========================
export const updateUserApi = async (data: any) => {
  let image = data.image || "";

  // Agar image File bo‘lsa → Base64
  if (data.image instanceof File) {
    image = await fileToBase64(data.image);
  }

  const updatedUser = {
    name: data.firstName,
    surname: data.lastName,
    email: data.email,
    phone: data.phone,
    username: data.username,
    image,
  };

  // localStorage ga saqlaymiz
  localStorage.setItem("user", JSON.stringify(updatedUser));

  return updatedUser;
};
