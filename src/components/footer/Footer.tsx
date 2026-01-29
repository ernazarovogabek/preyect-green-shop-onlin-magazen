
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

import DH from "../../assets/img/DH.png";
import GR from "../../assets/img/GR.png";
import Logo from "../../assets/img/Logo.png";
import IM from "../../assets/img/IM.png";

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="bg-gray-50 p-2">
      {/* TOP CARDS */}
      <div className="w-[90%] mx-auto mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src={DH} alt="Garden Care" className="w-20 sm:w-24" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center sm:text-left">Garden Care</h3>
            <p className="text-gray-600 text-sm text-center sm:text-left">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src={DH} alt="Plant Renovation" className="w-20 sm:w-24" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center sm:text-left">Plant Renovation</h3>
            <p className="text-gray-600 text-sm text-center sm:text-left">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src={GR} alt="Watering Garden" className="w-20 sm:w-24" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center sm:text-left">Watering Garden</h3>
            <p className="text-gray-600 text-sm text-center sm:text-left">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center sm:text-left">
              Join our newsletter
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-green-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition text-sm sm:text-base"
                >
                  Join
                </button>
              </div>
              <p className="text-xs text-gray-600 text-center sm:text-left">
                We usually post offers and challenges in newsletter.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <footer className="bg-green-50 border-t border-green-200">
        <div className="w-[90%] mx-auto px-2 sm:px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <img src={Logo} alt="Logo" className="h-8" />

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-6 text-xs sm:text-sm text-gray-700 text-center sm:text-left">
              <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
              <span>contact@greenshop.com</span>
              <span>+88 01911 717 490</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h4 className="font-semibold mb-2 sm:mb-4 text-center sm:text-left">My Account</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 text-center sm:text-left">
                <li>My Account</li>
                <li>Our Stores</li>
                <li>Contact Us</li>
                <li>Career</li>
                <li>Specials</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 sm:mb-4 text-center sm:text-left">Help & Guide</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 text-center sm:text-left">
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 sm:mb-4 text-center sm:text-left">Categories</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 text-center sm:text-left">
                <li>House Plants</li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 sm:mb-4 text-center sm:text-left">Social Media</h4>
              <div className="flex justify-center sm:justify-start gap-3 mb-4">
                <Facebook size={18} />
                <Instagram size={18} />
                <Twitter size={18} />
                <Linkedin size={18} />
                <Youtube size={18} />
              </div>

              <h4 className="font-semibold mb-2 text-center sm:text-left">We accept</h4>
              <div className="flex justify-center sm:justify-start">
                <img src={IM} alt="Payment methods" className="h-8 sm:h-10" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t text-center text-xs sm:text-sm text-gray-600">
            © 2021 GreenShop. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
