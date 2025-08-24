import React, { useEffect, useState } from "react";
import emoji from "../assets/Images/Emoji.svg";
import update from "../assets/Images/update icon.svg";
import deleteIcon from "../assets/Images/delete icon.svg";
import { Link } from "react-router-dom";

const Completed = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserId = () => {
    let userId = localStorage.getItem("goalAppUserId");
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("goalAppUserId", userId);
    }
    return userId;
  };

  const fetchGoals = async () => {
    const userId = getUserId();

    try {
      const res = await fetch(
        `https://goal-back-t29s.onrender.com/api/goals/completed?userId=${userId}`
      );
      const data = await res.json();
      console.log(data);
      setGoals(data);
    } catch (error) {
      console.error("Failed to fetch completed goals:", error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://goal-back-t29s.onrender.com/api/goals/${id}/deleted`,
        {
          method: "DELETE",
        }
      );
      fetchGoals();
      toast.success("Goal Deleted Successfully!", { duration: 5000 });
    } catch (error) {
      toast.error("Failed to delete goal", { duration: 5000 });
      console.error("Delete error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <div role="status" className="flex items-center gap-5">
          <svg
            className="w-10 h-10 text-gray-200 animate-spin fill-[#0585cd]"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="10"
            />
            <path
              d="M93 50a43 43 0 11-86 0 43 43 0 0186 0z"
              fill="currentFill"
            />
          </svg>
          <span className="text-xl sm:text-2xl font-medium">
            Loading Completed Goals...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white sm:px-10 px-4 lg:px-[100px] pt-[40px]">
      <div className="flex justify-between flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[100%] text-[#000000]">
          Completed
        </h2>
        <Link to="/create">
          <p className="font-semibold text-[20px] leading-[100%] text-[#0585CD]">
            + Create New Goals
          </p>
        </Link>
      </div>
      {/* Online Design Class */}
      {goals.length === 0 ? (
        <div className="text-start px-4 sm:px-6 lg:px-[35px] my-12 pt-6 pb-12 shadow-md flex flex-col gap-6">
          <p>You are yet to complete a goal</p>
        </div>
      ) : (
        <div className="flex flex-col gap-[75px]">
          {goals.map(({ title, description, progress, _id }) => (
            <div className="pb-5" key={_id}>
              <div className="bg-[#FFFFFF] shadow-md pb-[52px] sm:px-6 px-4 lg:px-[35px] pt-[24px] flex flex-col gap-7.25">
                <div className="flex items-start gap-2">
                  {progress === 100 && (
                    <div>
                      <h4 className="font-semibold text-base sm:text-[20px]  text-[#0585CD] pr- mb-1">
                        Congratulations! You have completed this Goal
                      </h4>
                      <span>
                        <img
                          src={emoji}
                          alt=""
                          className="h-[29.42px] w-[29.9px]"
                        />
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start gap-3">
                  <p className="font-semibold text-xl sm:text-2xl lg:text-[28px] text-[#000000] break-words">
                    {title.toUpperCase()}
                  </p>
                  <div className="text-start w-full">
                    <p className="font-normal  text-base sm:text-[20px] leading-[100%] text-[#000000CC] break-words ">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex flex-col lg:flex-row items-start lg:items-center justify-between pt-[17px]">
                  <div className="flex flex-col w-full max-w-[368px] items-start">
                    <div className="flex justify-between pb-[12px]">
                      <span className="text-sm sm:text-[16px] font-medium text-[#000000CC] m-0">
                        Progress
                      </span>
                      <span className="text-sm sm:text-[16px]  font-medium text-[#000000] m-0">
                        {progress}%
                      </span>
                    </div>
                    <div
                      className="w-[368px] bg-gray-200
                    rounded-full h-3"
                    >
                      <div
                        className="bg-[#008000CC] h-3 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-[55px] flex-col sm:flex-row ">
                    <Link
                      to={`/progress/${_id}`}
                      className="flex items-center gap-2.5 justify-center h-[56px] bg-[#0585CD]
                       text-white font-semibold text-[20px] p-4 rounded-[10px] hover:bg-[#036ab3] transition"
                      aria-label="Edit goal"
                    >
                      <span>
                        <img src={update} alt="" className="" />
                      </span>
                      Edit
                    </Link>
                    <button
                      onClick={() => 
                        handleDelete(_id)
                      }
                      className="flex justify-center items-center h-[56px] w-[131.43px] rounded-[10px] font-semibold text-[20px] border border-[#0585CD] hover:bg-[#e6f4fb] transition bg-[#FFFFFF] text-[#0585CD]"
                    >
                      <span>
                        <img src={deleteIcon} alt="" className="pr-1" />
                      </span>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Power Point Presentation Preparation 1 */}

      {/* =========ENDING OF FIRST DIV========== */}
    </div>
  );
};

export default Completed;
