import React from 'react';
import { FaPhone, FaLock, FaUserPlus } from 'react-icons/fa';

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="border-b-2 my-3 h-[3.4rem] w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex gap-2 mx-4 mt-2 text- sm:text-2xl text-[#15803d] items-center">
            <h1 className='font-bold bg-[#fbbf24] px-3 py-1 rounded-[50%] md:text-2xl'>S</h1>
            <h2 className="hidden md:block">Siber Techs</h2>
          </div>

          {/* Contact and Credentials Section */}
          <div className="flex items-center gap-4 mx-4">
            {/* Phone Section */}
            <div className="flex items-center gap-1 whitespace-nowrap">
              <FaPhone className="text-sm sm:text-xl" />
              <p className="text-sm sm:text-base">+233 543 529 284</p>
            </div>

            {/* Login and SignUp Section */}
            <div className="flex items-center text-white bg-[#15803d] px-2 py-1 space-x-3">
              {/* Login */}
              <div className="flex items-center gap-1">
                <FaLock className="text-white" />
                <p className="text-sm">Login</p>
              </div>

              {/* Divider */}
              <div className="hidden h-6 mx-1 border-l md:block"></div>

              {/* SignUp */}
              <div className="flex items-center gap-1">
                <FaUserPlus className="text-white" />
                <p className="text-sm">SignUp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
