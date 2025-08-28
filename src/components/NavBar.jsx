import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import navimg from "../assets/Images/nav-img.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className="border-b border-black/20
     bg-white shadow-sm "
    >
      <div
        className="px-4 sm:px-6 lg:px-12 py-3 max-w-7xl mx-auto flex justify-between items-center
       "
      >
        <Link to="/">
          {" "}
          <img src={logo} alt="" className="h-10 sm:h-[81px] sm:w-[217px] w-[100px]" />
        </Link>


        <div className=" items-center gap-[48px]  hidden md:flex">
          <Link
            to="/ongoing"
            className="lg:text-[20px] font-semibold text-[#000000] hover:text-gray-700 transition text-[16px] "
          >
            Ongoing
          </Link>
          <Link
            to="/completed"
            className="lg:text-[20px] font-semibold text-[#000000]  hidden md:flex hover:text-gray-700 transition text-[16px]"
          >
            Completed
          </Link>
          <Link
            to="/all"
            className="lg:text-[20px] font-semibold text-[#000000]  hidden md:flex hover:text-gray-700 transition text-[16px]"
          >
            All Goals
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          {" "}
          <img src={navimg} alt="" className="h-8 w-8  sm:w-[60px]  sm:h-[61px]" />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-60 py-2" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start space-y-3 px-6">
          <Link
            to="/ongoing"
            className="text-black text-base font-semibold font-montserrat hover:text-gray-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Ongoing
          </Link>
          <Link
            to="/completed"
            className="text-black text-base font-semibold font-montserrat hover:text-gray-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Completed
          </Link>
          <Link
            to="/all"
            className="text-black text-base font-semibold font-montserrat hover:text-gray-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            All Goals
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
