import React from "react";
import error from "../assets/Images/404.jfif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" text-center  space-y-10 justify-start h-screen pt-[40px] bg-[#0585cd]">
      <img src={error} alt="" className="mx-auto w-full max-w-[300px]" />
      <h2 className="sm:text-[50px] text-[30px] font-bold text-white">
        Error 404- Page not found
      </h2>
      <p className="text-white sm:text-[18px] text-[16px]">Sorry, the request page could not be found</p>
      <Link
        to="/"
        className="bg-[#ffffff] text-[#0585cd]  font-bold text-[14px] px-6 py-3 rounded-[30px]"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
