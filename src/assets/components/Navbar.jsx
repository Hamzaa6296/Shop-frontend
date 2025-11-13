import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white px-4 sm:px-6 lg:px-12 py-4 shadow-sm relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between">
        <div className="text-3xl font-extrabold tracking-tight ml-20 text-gray-900">
          SHOP.CO
        </div>

        <ul className="flex items-center space-x-10 text-sm text-gray-700 ml-10 mr-10">
          <li className="hover:text-black cursor-pointer flex items-center">
            Shop <FiChevronDown className="ml-1" />
          </li>
          <li className="hover:text-black cursor-pointer">On Sale</li>
          <li className="hover:text-black cursor-pointer">New Arrivals</li>
          <li className="hover:text-black cursor-pointer">Brands</li>
        </ul>

        <div className="flex items-center space-x-7 w-full max-w-2xl">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <FiShoppingCart className="text-md text-black hover:text-black cursor-pointer" />
          <CgProfile className="text-md text-black hover:text-black cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between md:hidden">
        {/* Left - Hamburger + Logo */}
        <div className="flex items-center ml-2 space-x-1">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl text-black focus:outline-none"
          >
            <FiMenu />
          </button>
          <div className="text-3xl font-extrabold tracking-tight text-gray-900">
            SHOP.CO
          </div>
        </div>

        {/* Right - Mobile Icons */}
        <div className="flex items-center space-x-4 mr-4">
          <button onClick={() => setSearchOpen(true)}>
            <FiSearch className="text-xl text-black cursor-pointer" />
          </button>
          <FiShoppingCart className="text-xl text-black cursor-pointer" />
          <CgProfile className="text-xl text-black cursor-pointer" />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 px-6 mt-4 text-gray-700 text-sm">
          <li className="hover:text-black cursor-pointer flex items-center">
            Shop <FiChevronDown className="ml-1" />
          </li>
          <li className="hover:text-black cursor-pointer">On Sale</li>
          <li className="hover:text-black cursor-pointer">New Arrivals</li>
          <li className="hover:text-black cursor-pointer">Brands</li>
        </ul>
      </div>

      {/* Mobile Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-24">
          <div className="bg-white rounded-md w-11/12 max-w-md p-4 relative">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-2 right-2 text-2xl text-gray-800 focus:outline-none"
            >
              <FiX />
            </button>
            <input
              type="text"
              autoFocus
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>
      )}

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
