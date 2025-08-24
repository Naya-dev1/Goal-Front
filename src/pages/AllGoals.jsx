import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pen from "../assets/Images/pen.png";
import can from "../assets/Images/can.png";
import { toast } from "react-hot-toast";

const AllGoals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Generate or fetch userId from localStorage
  const getUserId = () => {
    let userId = localStorage.getItem("goalAppUserId");
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("goalAppUserId", userId);
    }
    return userId;
  };

  const userId = getUserId();

  const fetchGoals = async () => {
    try {
      const res = await fetch(
        `https://goal-back-t29s.onrender.com/api/goals/all?userId=${userId}`
      );
      const data = await res.json();
      console.log(data);
      setGoals(data);
    } catch (err) {
      console.error("Failed to fetch goals:", err);
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }), // send userId in case your backend uses i
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
            Loading All Goals...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-10 lg:px-[100px] my-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="font-montserrat font-bold text-[26px]  lg:text-[36px] sm:text-[30px] text-black m-0">
          All Goals
        </h2>
        <Link
          to="/create"
          className="no-underline font-montserrat text-lg font-semibold sm:text-[20px] text-[#0585cd] cursor-pointer"
        >
          + Create New Goals
        </Link>
      </div>

      <div className="mt-[40px] flex flex-col gap-[60px]">
        {/* Completed Goal */}
        {goals.length === 0 ? (
          <div className="text-start p-6 shadow-md flex flex-col gap-6 mt-10">
            <p>You don't have any Goals yet</p>
          </div>
        ) : (
          goals.map(({ title, description, progress, _id }) => (
            <div
              className="text-start px-4 sm:px-6 lg:px-[35px] pt-[24px] pb-[50px] shadow-[0_4px_4px_rgba(0,0,0,0.2)] flex flex-col gap-[35px]"
              key={_id}
            >
              <div className="flex flex-col gap-[12px] ">
                {progress === 100 && (
                  <h4 className="font-montserrat break-words font-semibold sm:text-lg lg:text-[20px] text-[#0585cd] m-0">
                    Congratulations! You have completed this Goal 🎉
                  </h4>
                )}
                <h3 className="font-montserrat break-words font-semibold text-xl sm:text-2xl lg:text-[28px] text-black m-0">
                  {title.toUpperCase()}
                </h3>
                <p className="font-montserrat break-words font-normal  sm:text-[20px] text-base leading-[24.38px] text-black/80 m-0">
                  {description}
                </p>
              </div>

              <div className="flex  flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
                <div className="max-w-[368px] w-full flex flex-col items-start gap-[12px]">
                  <div className="flex justify-between w-full items-start">
                    <p className="font-montserrat font-normal text-sm sm:text-[16px] text-black/80 m-0">
                      Progress
                    </p>
                    <p className="font-montserrat font-normal text-sm sm:text-[16px] text-black/80 m-0">
                      {progress}%
                    </p>
                  </div>
                  <div className="w-full bg-[#d9d9d9] h-[12px] rounded-[10px]">
                    <div
                      className="h-[12px] w-full rounded-[10px] bg-[#339933]"
                      style={{
                        width: `${progress}%`,
                        backgroundColor:
                          progress < 40
                            ? "#FF0000CC"
                            : progress < 60
                            ? "#FFD700"
                            : "#339933",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 cursor-pointer">
                  <Link
                    to={`/progress/${_id}`}
                    aria-label="Edit goal"
                    className="no-underline flex items-center justify-center gap-[10px] rounded-[10px] p-[16px] bg-[#0585cd] hover:bg-[#036ab3] cursor-pointer transition"
                  >
                    <img src={pen} alt="Edit icon" />
                    <p className="font-montserrat font-semibold text-[20px] text-white m-0">
                      Edit
                    </p>
                  </Link>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="no-underline flex items-center justify-center gap-[10px] rounded-[10px] p-[16px] bg-white border border-[#0585cd] hover:bg-[#e6f4fb] transition cursor-pointer"
                    aria-label="Delete goal"
                  >
                    <img src={can} alt="Delete icon" />
                    <p className="font-montserrat font-semibold text-[20px] text-[#0585cd] m-0">
                      Delete
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Ongoing Goal */}
      </div>
    </div>
  );
};

export default AllGoals;
