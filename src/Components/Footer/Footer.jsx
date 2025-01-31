import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-[#15803d] text-white mt-12 ">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 flex-wrap gap-8">
          {/* Left Section */}
          <div>
            <div className="flex gap-2">
              <h1 className=" text-3xl text-[#15803d] font-bold mb-4 bg-[#fbbf24] py-1 px-3 rounded-full">S</h1>
            <h2 className="text-xl font-bold mb-4">Siber Techs</h2>
            </div>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Career</a></li>
            </ul>
          </div>

          {/* Customer Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">My Account</a></li>
              <li><a href="#" className="hover:text-gray-300">Track Your Order</a></li>
              <li><a href="#" className="hover:text-gray-300">Return</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>+233 543 529 284</li>
              <li>sibertechnologies1@gmail.com</li>
              <li>Bolgatanga(Duusi)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright © {currentYear} <span className=" text-[#fbbf24]">Siber Techs Website Design.</span> All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Ghana</span>
            <span>|</span>
            <span>GH₵</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
