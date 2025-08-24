import React, { useEffect, useState } from "react";
import update from "../assets/Images/update icon.svg";
import deleteIcon from "../assets/Images/delete icon.svg";
import { Link } from "react-router-dom";

const Ongoing = () => {
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
        `https://goal-back-t29s.onrender.com/api/goals/ongoing?userId=${userId}`
      );
      const data = await res.json();
      console.log(data);
      setGoals(data);
    } catch (error) {
      console.error("Error fetching ongoing goals:", error);
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
      toast.success("Goal Deleted Successfully!", { duration: 5000 });
      fetchGoals();
    } catch (error) {
      toast.error("Failed to delete goal", { duration: 5000 });
      console.error("Failed to delete goal:", error);
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
            Loading Ongoing Goals...
          </span>
        </div>
      </div>
    );
  }

  if (goals.length === 0) {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-[100px] py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[36px] text-black">
            Ongoing Goals
          </h2>
          <Link
            to="/newgoal"
            className="no-underline font-montserrat font-semibold text-[18px] sm:text-[20px] text-[#0585cd]"
          >
            + Create New Goals
          </Link>
        </div>
        <div className="text-start px-6 py-8 mt-10 shadow-md rounded-md">
          <p>You don't have any ongoing goals.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-4 sm:px-8 md:px-16  lg:px-25 pt-[40px] ">
      <div className="flex justify-between flex-col sm:flex-row  items-start sm:items-center mb-8 gap-4">
        <p className="font-bold lg:text-[36px] leading-[100%] text-[#000000]  text-2xl sm:text-3xl">
          Ongoing
        </p>
        <Link to="/create">
          <p className="font-semibold text-[18px] sm:text-[20px] leading-[100%] text-[#0585CD]">
            + Create New Goals
          </p>
        </Link>
      </div>
      {/* Landing Page Design */}
      <div className="flex flex-col gap-[75px]">
        {goals.map(({ title, description, progress, _id }) => (
          <div className="pb-5 " key={_id}>
            <div className="bg-[#FFFFFF] shadow-md  pb-[52px] lg:px-[35px] px-4 pt-[24px] flex flex-col gap-7.25">
              <div className="flex flex-col items-start gap-3 ">
                <h3 className="font-semibold break-words text-[28px] text-[#000000] ">
                {title.toUpperCase()}
                </h3>

                <h4 className="font-montserrat font-semibold text-base sm:text-lg text-[#0585cd]">
                In Progress
              </h4>

                <div className="text-start  w-full ">
                  <p className="font-normal break-words  text-base lg:text-[20px] leading-[100%] text-[#000000CC] m-0">
                    {description}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex justify-between flex-col lg:flex-row items-start lg:items-center pt-[17px] gap-6">
                <div className="flex flex-col ">
                  <div className="flex justify-between pb-[12px]">
                    <span className="text-sm font-medium text-[#000000CC]">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-[#000000]">
                      {progress}%
                    </span>
                  </div>
                  <div className="sm:w-[368px] w-[295px] bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#FF0000CC] h-3 rounded-l-full w-full"
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
                <div className="flex flex-col sm:flex-row gap-4 gap-lg:[55px]">
                  <Link
                    to={`/progress/${_id}`}
                    className="flex items-center justify-center h-[56px] bg-[#0585CD] text-white font-semibold sm:text-[20px] text-base p-4 rounded-[10px] hover:bg-[#0560a0] transition"
                  >
                    <span>
                      <img src={update} alt="" className="pr-1" />
                    </span>
                    Update Progress
                  </Link>

                  <button
                    onClick={() => {
                      handleDelete(_id);
                    }}
                    className="flex justify-center items-center h-[56px] sm:w-[131.43px] rounded-[10px] font-semibold text-base hover:bg-[#f0faff] transition sm:text-[20px] border border-[#0585CD] bg-[#FFFFFF] text-[#0585CD]"
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

        {/* =========ENDING OF FIRST DIV========== */}
      </div>
    </div>
  );
};

export default Ongoing;
