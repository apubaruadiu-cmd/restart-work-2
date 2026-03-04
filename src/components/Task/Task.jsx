import React from "react";

const Task = ({ ticket }) => {
  return (
    <div>
      <div className="p-4 rounded bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]">
        <div className="text-lg font-medium text-[#001931]">{ticket.title}</div>
        <button className="px-4 py-3 rounded-sm text-white bg-[#02A53B] w-full mt-4">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Task;
