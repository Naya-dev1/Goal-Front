import React, { useEffect, useState } from "react";
import amico from "../assets/Images/amico.png";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const Progress = () => {
  const { id } = useParams();
  const [goal, setGoal] = useState("");
  const [newProgress, setNewProgress] = useState("");
  const navigate = useNavigate();

  const getUserId = () => {
    let userId = localStorage.getItem("goalAppUserId");
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("goalAppUserId", userId);
    }
    return userId;
  };

  const fetchGoalById = async () => {
    const userId = getUserId();

    try {
      const fetchEachGoal = await fetch(
        `https://goal-back-t29s.onrender.com/api/goals/${id}?userId=${userId}`
      );
      if (fetchEachGoal.ok) {
        const fetchedGoal = await fetchEachGoal.json();
        setGoal(fetchedGoal);
        setNewProgress(fetchedGoal.progress);
      } else {
        toast.error("Goal not found or you don't have access", {
          duration: 5000,
        });
        console.error("Goal not found or access denied");
        navigate("/allgoals"); // Redirect if goal is inaccessible
      }
    } catch (error) {
      toast.error("Error fetching goal", { duration: 5000 });
      console.error("Error fetching goal", error);
    }
  };

  useEffect(() => {
    fetchGoalById();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = getUserId();

    try {
      const patchedGoal = await fetch(
        `https://goal-back-t29s.onrender.com/api/goals/${id}/progress`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ progress: Number(newProgress), userId }),
        }
      );

      if (patchedGoal.ok) {
        toast.success("Progress Updated Successfully!", { duration: 5000 });
        navigate("/all");
      } else {
        console.error("Failed to update progress");
        toast.error("Failed to update progress", { duration: 5000 });
      }
    } catch (error) {
      console.error("Error updating progress", error);
      toast.error("Failed to update progress", { duration: 5000 });
    }
  };
  return (
    <div className="lg:pl-[100px] lg:pr-[105px] mt-[32px] flex flex-col md:flex-row  px-4 sm:px-6 ">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <h4 className="lg:text-[36px] text-3xl  font-bold text-[#000000] mb-[32px]">
          Progress
        </h4>
        <div className="items-start mb-[80px] flex-col sm:flex-row sm:mb-[148px] flex gap-10 ">
          <div className="flex flex-col gap-[35px]lg:max-w-[657px] ">
            <div>
              <h6 className="text-[#000000B2] text-sm font-normal sm:text-[16px] break-words ">
                Goal Title <br /> <p className="font-semibold">{goal.title}</p>
              </h6>
            </div>

            <div className="flex flex-col gap-[26px]">
              <h6 className="text-[16px] text-[#000000B2] font-normal break-words">
                Goal Description
              </h6>
              <p className="text-[16px] text-[#000000] font-normal pe-[55px] break-words">
                {goal.description}
              </p>
            </div>

            <div className="lower-form flex flex-col items-start lg:w-[656px] bg-[#0585cd29] gap-6 p-6 w-[325px] sm:p-[60px_50px] sm:gap-[66px] mt-7">
              <input
                type="number"
                placeholder="Goal Progress"
                className="sm:w-[329px] w-[200px] px-4 sm:px-[10px] py-[15px] rounded-[5px]  border border-[#0585cd] bg-[#0585cd05] placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-[#0585cd]"
                value={newProgress}
                onChange={(event) => {
                  const num = Number(event.target.value);
                  if (num < 0) {
                    setNewProgress(0);
                  } else if (num > 100) {
                    setNewProgress(100);
                  } else {
                    setNewProgress(num);
                  }
                }}
                min="0"
                max="100"
                required
              />

              <div className="progress sm:w-[368px] w-[280px] flex flex-col items-start gap-3">
                <div className="progress-text flex items-start gap-[180px] sm:gap-[265px]">
                  <p className="m-0 text-base font-normal text-black/80">
                    Progress
                  </p>
                  <p className="m-0 text-base font-normal text-black/80">
                    {newProgress}%
                  </p>
                </div>
                <div className="loader-con bg-[#d9d9d9] w-full h-3 rounded-[10px]">
                  <div
                    className="loader-bar h-3 rounded-[10px] w-[30%] bg-red-500/80"
                    style={{
                      width: `${goal.progress}%`,
                      backgroundColor:
                        goal.progress < 40
                          ? "#FF0000CC"
                          : goal.progress < 60
                          ? "#FFD700"
                          : "#339933",
                    }}
                  ></div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#0585cd] px-4 py-4 rounded-[10px] text-white font-semibold text-xl cursor-pointer  hover:bg-[#0560a0] transition"
              >
                Update Progress
              </button>
            </div>
          </div>
          <img src={amico} alt="" className="w-[500px] sm:mt-[-54px] " />
        </div>
      </form>
    </div>
  );
};

export default Progress;
