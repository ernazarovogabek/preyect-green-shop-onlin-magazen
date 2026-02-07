
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import shop from "../../assets/icons/shop.svg";
import { BellOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelctor } from "../../hooks/useRedux";
import { setModalAuthorizationModalVisiblty } from "../../redux/modalSlice";
import { cookieInfo } from "../../generic/cookies";
import { Badge } from "antd";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useReduxDispatch();
  const { pathname } = useLocation();
  const { isAuthorization, getCookie } = cookieInfo();
  const user = getCookie("user");
  const navigate = useNavigate();
  const { data } = useReduxSelctor((state) => state.shopSlice);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-[90%] m-auto py-5 border-b border-[#a2d1ab]">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          <h3
            onClick={() => navigate("/")}
            className={`cursor-pointer ${pathname === "/" && "text-[#46a358]"}`}
          >
            Home
          </h3>
          <h3
            onClick={() => navigate("/blog")}
            className={`cursor-pointer ${pathname === "/blog" && "text-[#46a358]"}`}
          >
            Blog
          </h3>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <img src={search} alt="" className="cursor-pointer" />
          <BellOutlined className="text-[25px] cursor-pointer" />
          <div
            className="cursor-pointer"
            onClick={() => navigate("/products-shop")}
          >
            <Badge count={data?.length}>
              <img src={shop} alt="" />
            </Badge>
          </div>
          <button
            onClick={() => {
              if (isAuthorization) {
                navigate("/profile");
              } else {
                dispatch(setModalAuthorizationModalVisiblty());
              }
            }}
            className="w-[100px] h-[35px] bg-[#46a358] text-white rounded-md flex items-center gap-2 justify-center"
          >
            {isAuthorization ? (
              user.name
            ) : (
              <>
                <LoginOutlined />
                Login
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuOutlined className="text-[25px]" />
        </button>
      </div>

      {/* Mobile Menu - 280px gacha */}
      {isMenuOpen && (
        <div className="md:hidden mt-5 space-y-4">
          <div className="flex flex-col gap-4 pb-4 border-b border-[#a2d1ab]">
            <h3
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer text-[18px] ${pathname === "/" && "text-[#46a358]"}`}
            >
              Home
            </h3>
            <h3
              onClick={() => {
                navigate("/blog");
                setIsMenuOpen(false);
              }}
              className={`cursor-pointer text-[18px] ${pathname === "/blog" && "text-[#46a358]"}`}
            >
              Blog
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                navigate("/products-shop");
                setIsMenuOpen(false);
              }}
            >
              <Badge count={data?.length}>
                <img src={shop} alt="" />
              </Badge>
              <span>Shopping Cart</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={search} alt="" />
              <span>Search</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <BellOutlined className="text-[20px]" />
              <span>Notifications</span>
            </div>
            <button
              onClick={() => {
                if (isAuthorization) {
                  navigate("/profile");
                } else {
                  dispatch(setModalAuthorizationModalVisiblty());
                }
                setIsMenuOpen(false);
              }}
              className="w-full h-[45px] bg-[#46a358] text-white rounded-md flex items-center gap-2 justify-center"
            >
              {isAuthorization ? (
                user.name
              ) : (
                <>
                  <LoginOutlined />
                  Login
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;