import React from "react";
import hero from "../assets/Images/check.png";

const Home = () => {
  return (
    <div className="pl-[100px] pr-[104px] flex gap-[146px]  mt-[58px]  mb-[100px] items-end">
      <div>
        {" "}
        <img src={hero} alt="" className="w-[440px] h-[3] " />
      </div>
      <div className="flex flex-col items-start gap-[25px] w-[650px] ">
        <h1 className="text-[#000000] text-[36px] font-semibold leading-[120%]  ">
          Improve Productivity By Managing{" "}
          <span className="text-[#0585CD]">Your Goals</span>
        </h1>
        <p className="  pe-[20px] leading-[120%] text-[20px] text-[#000000CC] font-normal">
          Lorem ipsum dolor sit amet consectetur. Ut nisl nisl cursus massa sed.
          Turpis ac aliquet lacinia justo turpis amet at arcu. Diam vulputate
          suspendisse aliquam enim sagittis cursiodio ultrices. Condimentum
          lacus nunc rhoncus massa. Tortorstiu ultricies neque aliquam sit non.
          Diam vehicula dignissimepei pellentesque eros vitae. Viverra in vitae
          nunc lorem eget lciou imperdiet tortor. Ac mauris vel non amet eget
          egestas inoriou pellentesque commodo amet. Facilisi sed ut nisi
          pellentesque diam egestas et turpis donor amet.
        </p>
        <button className="text-[#FFFFFF] font-semibold text-[20px] bg-[#0585CD] rounded-[10px] p-4">
          Manage Goals
        </button>
      </div>
    </div>
  );
};

export default Home;
