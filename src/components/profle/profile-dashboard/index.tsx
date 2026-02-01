import {
  LogoutOutlined,
  UserOutlined,
  ShopOutlined,
  HomeOutlined,
  HeartOutlined,
  BoxPlotOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
///import Adress from "../pagess/adress";
import Details from "../pagess/details";
import Products from "../pagess/products";
import Wishlist from "../pagess/wishlist";
import Order from "../pagess/orders";

export const path_profile = [
  {
    id: 1,
    path: "",
    Component: Details,
    Icon: UserOutlined,
    title: "Account Details",
  },
  {
    id: 2,
    path: "my-products",
    Component: Products,
    Icon: ShopOutlined,
    title: "My Products",
  },
//   {
//     id: 3,
//     path: "address",
//     Component: Adress,
//     Icon: HomeOutlined,
//     title: "Address",
//   },
  {
    id: 4,
    path: "wishlist",
    Component: Wishlist,
    Icon: HeartOutlined,
    title: "Wishlist",
  },
  {
    id: 5,
    path: "track-order",
    Component: Order,
    Icon: BoxPlotOutlined,
    title: "Track Order",
  },
];

const ProfileDashboard = () => {
  const navigate = useNavigate();

  const logOut = () => {
    console.log("Logged out");
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/");
  };

  const dashboard_title_style =
    "transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:font-bold";

  return (
    <div className="bg-[#FBFBFB] h-fit text-xl p-[15px] w-[310px] max-md:hidden">
      <h1 className="font-bold">My Account</h1>

      <div className="flex flex-col gap-3 mt-[10px] border-b border-[#46A35880] pb-[35px]">
        {path_profile.map(({ Icon, id, title, path }) => (
          <div
            onClick={() => navigate(`/profile/${path}`)}
            key={id}
            className={`${dashboard_title_style} `}
          >
            <Icon />
            <h3 className="font-normal text-base">{title}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={logOut}
        className="flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px] text-base text-red-600"
      >
        <LogoutOutlined />
        <h3 className="font-medium">Log out</h3>
      </button>
    </div>
  );
};

export default ProfileDashboard;






































