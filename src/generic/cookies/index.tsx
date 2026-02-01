import Cookies from "js-cookie";

export const cookiesInfo = () => {
  const getCookies = (key: string) => {
    return Cookies.get(key) ? JSON.parse(Cookies.get(key) as string) : null;
  };

  const setCookies = (key: string, data: object) => {
    return Cookies.set(key, JSON.stringify(data));
  };

  const isAuthorization = getCookies("user") ? true : false;

  return { getCookies, isAuthorization, setCookies };
};