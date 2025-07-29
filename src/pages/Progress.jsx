import React from "react";
import amico from "../assets/Images/amico.png";

const Progress = () => {
  return (
    <div className="pl-[100px] pr-[105px] mt-[32px]  ">
      <h4 className="text-[36px] font-bold text-[#000000] mb-[32px]">
        Progress
      </h4>
      <div className="items-start mb-[148px] flex gap-10 ">
        <div className="flex flex-col gap-[35px] max-w-[657px] ">
          <div>
            <h6 className="text-[#000000B2] font-normal text-[16px] w-[178px] ">
              Goal Title <br />{" "}
              <span className="font-semibold">Landing Page Design</span>
            </h6>
          </div>

          <div className="flex flex-col gap-[26px]">
            <h6 className="text-[16px] text-[#000000B2] font-normal">
              Goal Description
            </h6>
            <p className="text-[16px] text-[#000000] font-normal pe-[55px]">
              Lorem ipsum dolor sit amet consectetur. Accumsan integer tempor
              ornare lectus eu. Leo amet bibendum consectetur sed ac leo
              rhoncus. Mattis mi iaculis lacus mi vehicula. Nisl nisi eu eu
              suspendisse. Pellentesque convallis egestas purus amet. Massa eget
              proin lorem ultrices nulla quisque. Leo mauris cras mi proin et.
            </p>
          </div>

          <div className="lower-form flex flex-col items-start w-[656px] bg-[#0585cd29] p-[60px_50px] gap-[66px]">
          <input
            type="number"
            placeholder="Goal Progress"
            className="w-[329px] px-[10px] py-[15px] rounded-[5px] border border-[#0585cd] bg-[#0585cd05] placeholder:text-black/70"
          />

          <div className="progress w-[368px] flex flex-col items-start gap-3">
            <div className="progress-text flex items-start gap-[265px]">
              <p className="m-0 text-base font-normal text-black/80">
                Progress
              </p>
              <p className="m-0 text-base font-normal text-black/80">30%</p>
            </div>
            <div className="loader-con bg-[#d9d9d9] w-full h-3 rounded-[10px]">
              <div className="loader-bar h-3 rounded-[10px] w-[30%] bg-red-500/80"></div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#0585cd] px-4 py-4 rounded-[10px] text-white font-semibold text-xl cursor-pointer"
          >
            Update Progress
          </button>
        </div>
        </div>
        <img
          src={amico}
          alt=""
          className="w-[500px] mt-[-54px] "
        />
      </div>
    </div>
  );
};

export default Progress;
