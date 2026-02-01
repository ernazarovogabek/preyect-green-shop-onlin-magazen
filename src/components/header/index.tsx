

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import Shop from "../../assets/img/Shop.png";
import { Bell, Search, Menu, X } from "lucide-react";
import { useReduxDispatch } from "../../hooks/useRedux";
import { setAuthorizationModalVisiblity } from "../../redux/modal-store";

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useReduxDispatch();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#00800043]">
      <div className="w-[90%] mx-auto py-4 flex items-center justify-between">
        {/* LOGO */}
        <img src={Logo} alt="Logo" className="w-[120px]" />

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "text-main font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`${
              pathname === "/blog" ? "text-main font-semibold" : ""
            }`}
          >
            Blog
          </Link>



             <Link
            to="/shop"
            className={`${
              pathname === "/shop" ? "text-main font-semibold" : ""
            }`}
          >
            Shop
          </Link>




        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-6">
          <Search className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <img src={Shop} alt="Shop" className="w-6 cursor-pointer" />

          <button
            onClick={() => dispatch(setAuthorizationModalVisiblity())}
            className="bg-main rounded-lg font-medium text-white px-6 py-2"
          >
            Login
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-[75%] h-full p-5">
            <div className="flex items-center justify-between mb-6">
              <img src={Logo} alt="Logo" className="w-[110px]" />
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mb-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={`${
                  pathname === "/" ? "text-main font-semibold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className={`${
                  pathname === "/blog" ? "text-main font-semibold" : ""
                }`}
              >
                Blog
              </Link>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <Search />
              <Bell />
              <img src={Shop} alt="Shop" className="w-6" />
            </div>

            <button
              onClick={() => {
                dispatch(setAuthorizationModalVisiblity());
                setOpen(false);
              }}
              className="bg-main w-full rounded-lg font-medium text-white py-2"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
