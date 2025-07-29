import React from "react";
import emoji from "../assets/Images/Emoji.svg";
import update from "../assets/Images/update icon.svg";
import deleteIcon from "../assets/Images/delete icon.svg";
import { Link } from "react-router-dom";

const Completed = () => {
  return (
    <div className="bg-white px-[100px] pt-[40px]">
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-[36px] leading-[100%] text-[#000000]">
          Completed
        </p>
        <Link to="/create">
          <p className="font-semibold text-[20px] leading-[100%] text-[#0585CD]">
            + Create New Goals
          </p>
        </Link>
      </div>
      {/* Online Design Class */}
      <div className="flex flex-col gap-[75px]">
        <div className="pb-5">
          <div className="bg-[#FFFFFF] shadow-md pb-[52px] px-[35px] pt-[24px] flex flex-col gap-7.25">
            <div className="flex items-start gap-2">
              <p className="font-semibold text-[20px] leading-[100%] text-[#0585CD] pr- mb-1">
                Congratulations
              </p>
              <span>
                <img src={emoji} alt="" className="h-[29.42px] w-[29.9px]" />
              </span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="font-semibold text-[28px] text-[#000000]">
                Online Design Class
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
                    100%
                  </span>
                </div>
                <div className="w-[368px] bg-gray-200 rounded-full h-3">
                  <div className="bg-[#008000CC] h-3 rounded-full"></div>
                </div>
              </div>
              <div className="flex gap-[55px]">
                <button className="flex items-center gap-2.5 justify-center h-[56px] bg-[#0585CD] text-white font-semibold text-[20px] p-4 rounded-[10px]">
                  <span>
                    <img src={update} alt="" className="" />
                  </span>
                  Edit
                </button>
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
      </div>
      {/* Power Point Presentation Preparation 1 */}

      {/* =========ENDING OF FIRST DIV========== */}
    </div>
  );
};

export default Completed;
