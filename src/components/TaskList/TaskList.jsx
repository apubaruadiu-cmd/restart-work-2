import React from "react";
import Task from "../Task/Task";

const TaskList = ({
  progress,
  setProgress,
  selectedTicket,
  setSelectedTickets,
}) => {
  return (
    <div className="lg:col-span-1">
      <div>
        <div className="text-2xl font-semibold text-[#34485A] mb-4">
          Task Status
        </div>
        <p className="text-[#627382] mt-3.5">
          Select a ticket to add to Task Status
        </p>
        <div className="flex flex-col gap-4">
          {selectedTicket.map((ticket) => (
            <Task key={ticket.id} ticket={ticket}></Task>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="text-2xl font-semibold text-[#34485A] mb-4">
          Resolved Task
        </div>
        <p className="text-[#627382] mt-3.5">No resolved tasks yet.</p>
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded bg-[#E0E7FF] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]">
            <div className="text-lg font-medium text-[#001931]">
              Payment Failed - Card Declined
            </div>
          </div>
          <div className="p-4 rounded bg-[#E0E7FF] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]">
            <div className="text-lg font-medium text-[#001931]">
              Payment Failed - Card Declined
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
