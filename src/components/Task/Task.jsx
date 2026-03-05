import React from "react";
import { toast } from "react-toastify";

const Task = ({ ticket, setResolve, setProgress, setSelectedTickets, setResolvedTasks }) => {
  const handleResolve = () => {
    // Remove from Task Status
    setSelectedTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    // decrease progress
    setProgress((prev) => prev - 1); 

    // Add to Resolved Tasks
    setResolvedTasks((prev) => [...prev, ticket]);
    // increase resolved count
    setResolve((prev) => prev + 1); 
    toast("Task Completed!")
  }
  return (
    <div>
      <div className="p-4 rounded bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]">
        <div className="text-lg font-medium text-[#001931]">{ticket.title}</div>
        <button onClick={() => handleResolve()} className="px-4 py-3 rounded-sm text-white bg-[#02A53B] w-full mt-4">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Task;
