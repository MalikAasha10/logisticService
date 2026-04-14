import React from 'react';
import { Link } from 'react-router-dom';
import log from '../assets/log.png';

const Navbar = () => {

  return (
    <nav className="bg-[#011428CC] text-white py-4 px-8 flex items-center justify-between border-b border-gray-800 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={log} alt="All Service Rental" className="h-10" />
      </div>

      {/* Center: Links */}
      <ul className="hidden md:flex space-x-8 font-medium text-sm tracking-wide">
        <li className="hover:text-green-500 cursor-pointer transition">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="hover:text-green-500 cursor-pointer transition">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="hover:text-green-500 cursor-pointer transition">
          <Link to="/privacy">Privacy</Link>
        </li>
      </ul>

      {/* Right: Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-green-500 border border-green-500 px-5 py-2 rounded-md hover:bg-green-500 hover:text-white transition text-sm font-semibold">
          Log in
        </button>
        <button className="bg-green-600 px-5 py-2 rounded-md hover:bg-green-700 transition text-sm font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;