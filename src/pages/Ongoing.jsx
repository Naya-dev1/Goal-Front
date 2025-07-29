import React from "react";
import update from "../assets/Images/update icon.svg";
import deleteIcon from "../assets/Images/delete icon.svg";
import { Link } from "react-router-dom";

const Ongoing = () => {
  return (
    <div className="bg-white px-25 pt-[40px] ">
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-[36px] leading-[100%] text-[#000000]">
          Ongoing
        </p>
        <Link to="/create">
          <p className="font-semibold text-[20px] leading-[100%] text-[#0585CD]">
            + Create New Goals
          </p>
        </Link>
      </div>
      {/* Landing Page Design */}
      <div className="flex flex-col gap-[75px]">
        <div className="pb-5 ">
          <div className="bg-[#FFFFFF] shadow-md pb-[52px] px-[35px] pt-[24px] flex flex-col gap-7.25">
            <div className="flex flex-col items-start gap-3">
              <p className="font-semibold text-[28px] text-[#000000]">
                Landing Page Design
              </p>
              <div className="text-start">
                <p className="font-normal text-[20px] leading-[100%] text-[#000000CC] ">
                  Lorem ipsum dolor sit amet consectetur. Congue augue volutpat
                  massa turpis alin tristique. Interdum consequat
                </p>
                <p className="font-normal text-[20px] text-[#000000CC] ">
                  consectetur eu viverra consequat viverra nulla. Aliqu neque
                  rhoncus ut scelerisque eu vel ullamcorper mauris neque.
                </p>
              </div>
            </div>

            <div className="mb-4 flex justify-between pt-[17px]">
              <div className="flex flex-col">
                <div className="flex justify-between pb-[12px]">
                  <span className="text-sm font-medium text-[#000000CC]">
                    Progress
                  </span>
                  <span className="text-sm font-medium text-[#000000]">
                    30%
                  </span>
                </div>
                <div className="w-[368px] bg-gray-200 rounded-full h-3">
                  <div className="bg-[#FF0000CC] h-3 rounded-l-full w-[87px]"></div>
                </div>
              </div>
              <div className="flex gap-[55px]">
                <Link to="/progress">
                  <button className="flex items-center justify-center h-[56px] bg-[#0585CD] text-white font-semibold text-[20px] p-4 rounded-[10px]">
                    <span>
                      <img src={update} alt="" className="pr-1" />
                    </span>
                    Update Progress
                  </button>
                </Link>
                <button className="flex justify-center items-center h-[56px] w-[131.43px] rounded-[10px] font-semibold text-[20px] border border-[#0585CD] bg-[#FFFFFF] text-[#0585CD]">
                  <span>
                    <img src={deleteIcon} alt="" className="pr-1" />
                  </span>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========ENDING OF FIRST DIV========== */}
      </div>
    </div>
  );
};

export default Ongoing;
