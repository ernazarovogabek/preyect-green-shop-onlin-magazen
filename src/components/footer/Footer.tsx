
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

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
      <div className="w-[90%] mx-auto ">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src={DH} alt="Garden Care" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Garden Care</h3>
            <p className="text-gray-600 text-sm">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src={DH} alt="Plant Renovation" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Plant Renovation</h3>
            <p className="text-gray-600 text-sm">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src={GR} alt="Watering Garden" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Watering Garden</h3>
            <p className="text-gray-600 text-sm">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Would you like to join newsletters?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="enter your email address..."
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Join
                </button>
              </div>
              <p className="text-xs text-gray-600">
                We usually post offers and challenges in newsletter.
              </p>
            </form>
          </div>
        </div>
      </div>





     



















      {/* FOOTER BOTTOM */}
      <footer className="bg-green-50 mt-12 border-t border-green-200">
        <div className="w-[90%] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <img src={Logo} alt="Logo" className="h-8" />

            <div className="flex flex-wrap gap-6 text-sm text-gray-700">
              <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
              <span>contact@greenshop.com</span>
              <span>+88 01911 717 490</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">My Account</h4>
              <ul className="space-y-2 text-gray-600">
                <li>My Account</li>
                <li>Our Stores</li>
                <li>Contact Us</li>
                <li>Career</li>
                <li>Specials</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Help & Guide</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-600">
                <li>House Plants</li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <div className="flex gap-4 mb-6">
                <Facebook />
                <Instagram />
                <Twitter />
                <Linkedin />
                <Youtube />
              </div>

              <h4 className="font-semibold mb-4">We accept</h4>
              <img src={IM} alt="Payment methods" />
            </div>
          </div>

          <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600">
            © 2021 GreenShop. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
