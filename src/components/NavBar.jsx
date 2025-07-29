import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import navimg from "../assets/Images/nav-img.png";

const NavBar = () => {
  return (
    <div className="px-[100px] flex justify-between items-center border-b border-[#00000033] ">
      <Link to="/">
        {" "}
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-[48px] ">
        <Link
          to="/ongoing"
          className="text-[20px] font-semibold text-[#000000]"
        >
          Ongoing
        </Link>
        <Link
          to="/completed"
          className="text-[20px] font-semibold text-[#000000]"
        >
          Completed
        </Link>
        <Link to="/all" className="text-[20px] font-semibold text-[#000000]">
          All Goals
        </Link>
      </div>

      <img src={navimg} alt="" />
    </div>
  );
};

export default NavBar;
