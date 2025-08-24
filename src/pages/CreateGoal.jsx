import React, { useState } from "react";
import goalImage from "../assets/Images/amico.png";
import delImage from "../assets/Images/delete-red.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const CreateGoal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState("");

  const navigate = useNavigate();

  const getUserId = () => {
    let userId = localStorage.getItem("goalAppUserId");
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("goalAppUserId", userId);
    }
    return userId;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = getUserId();

    const newGoal = { title, description, progress: Number(progress), userId };
    try {
      const postNewGoal = await fetch(
        "https://goal-back-t29s.onrender.com/api/goals",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGoal),
        }
      );

      if (postNewGoal.ok) {
        toast.success("Goal Added Successfully!", { duration: 5000 });
        navigate("/all");
      } else {
        toast.error("Failed to post goal", { duration: 5000 });
        console.error("Failed to post gaol");
      }
    } catch (error) {
      toast.error("Failed to post goal", { duration: 5000 });
      console.error("Error creating goal", error);
    }
  };
  return (
    <div>
     
        <img
          src={goalImage}
          className="w-full md:w-1/2 mt-8 md:mt-0 px-4 sm:hidden block"
          alt=""
        />
     

      <div className="flex md:gap-[40px] flex-col md:flex-row items-start gap-6  my-[48px]  mx-4 md:mx-12 lg:mx-24">
        <div className="lg:w-[656px] w-full md:w-[500px] bg-[#0585CD29] mx-auto rounded-md">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start w-full md:w-[500px]  lg:w-[656px] bg-[#0585cd05] p-6 md:p-10 lg:p-[60px_50px] md:gap-[66px] gap-8 rounded-md"
          >
            <input
              type="text"
              placeholder="Goal Title"
              className="max-w-[329px] w-full px-3 py-3 lg:p-[15px_10px] rounded-[5px] border border-[#0585cd] bg-[#0585cd05] placeholder:font-montserrat placeholder:font-normal placeholder:text-[16px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-[#0585cd]"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              required
            />
            <textarea
              rows="15"
              placeholder="Goal Description"
              className="lg:w-[556px] w-full px-3 py-3 lg:p-[15px_10px] rounded-[5px] border border-[#0585cd] bg-[#0585cd05] placeholder:font-montserrat placeholder:font-normal placeholder:text-[16px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-[#0585cd] "
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Goal Progress"
              className="lg:w-[329px] w-full px-3 py-3 lg:p-[15px_10px] rounded-[5px] border border-[#0585cd] bg-[#0585cd05] placeholder:font-montserrat placeholder:font-normal placeholder:text-[16px] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-[#0585cd]"
              value={progress}
              onChange={(event) => {
                const num = Number(event.target.value);
                if (num < 0) {
                  setProgress(0);
                } else if (num > 100) {
                  setProgress(100);
                } else {
                  setProgress(num);
                }
              }}
              min="0"
              max="100"
              required
            />
            <button
              type="submit"
              className="bg-[#0585cd] p-[16px] rounded-[10px] font-montserrat font-semibold text-[20px] text-white cursor-pointer hover:bg-[#0560a0] transition"
            >
              Create Goal
            </button>
          </form>
        </div>

        <div>
          <img
            src={goalImage}
            className="lg:w-[538px] lg:h-[545px] hidden sm:block"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CreateGoal;
