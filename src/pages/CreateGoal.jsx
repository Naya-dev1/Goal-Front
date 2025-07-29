import React from "react";
import goalImage from "../assets/Images/amico.png";
import delImage from "../assets/Images/delete-red.png";

const CreateGoal = () => {
  return (
    <div>
      <div className="flex gap-[40px] my-[48px]">
        <div className="w-[656px] bg-[#0585CD29] mx-auto">
         <form className="flex flex-col items-start w-[656px] bg-[#0585cd29] p-[60px_50px] gap-[66px]">
        <input
          type="text"
          placeholder="Goal Title"
          className="w-[329px] p-[15px_10px] rounded-[5px] border border-[#0585cd] bg-[#0585cd05] placeholder:font-montserrat placeholder:font-normal placeholder:text-[16px] placeholder:text-black/70"
        />
        <textarea
          rows="15"
          placeholder="Goal Description"
          className="w-[556px] p-[15px_10px] rounded-[5px] border border-[#0585cd] bg-[#0585cd05] placeholder:font-montserrat placeholder:font-normal placeholder:text-[16px] placeholder:text-black/70"
        />
        <input
          type="number"
          placeholder="Goal Progress"
          className="w-[329px] p-[15px_10px] rounded-[5px] border border-[#0585cd] bg-[#0585cd05] placeholder:font-montserrat placeholder:font-normal placeholder:text-[16px] placeholder:text-black/70"
        />
        <button
          type="submit"
          className="bg-[#0585cd] p-[16px] rounded-[10px] font-montserrat font-semibold text-[20px] text-white cursor-pointer"
        >
          Create Goal
        </button>
      </form>
        </div>

        <div>
          <img src={goalImage} className="w-[538px] h-[545px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateGoal;
