import React from "react";
import Task from "../Task/Task";

const TaskList = ({
  progress,
  setProgress,
  selectedTicket,
  setSelectedTickets,
  resolve,
  setResolve,
  resolvedTasks,
  setResolvedTasks,
}) => {
  return (
    <div className="lg:col-span-1">
      <div>
        <div className="text-2xl font-semibold text-[#34485A] mb-4">
          Task Status
        </div>
        {selectedTicket.length === 0 && (
          <p className="text-[#627382] mt-3.5">
            Select a ticket to add to Task Status
          </p>
        )}
        <div className="flex flex-col gap-4">
          {selectedTicket.map((ticket) => (
            <Task
              key={ticket.id}
              resolvedTasks={resolvedTasks}
              setResolvedTasks={setResolvedTasks}
              resolve={resolve}
              setResolve={setResolve}
              ticket={ticket}
              selectedTicket={selectedTicket}
              setSelectedTickets={setSelectedTickets}
              progress={progress} 
              setProgress={setProgress}
            ></Task>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="text-2xl font-semibold text-[#34485A] mb-4">
          Resolved Task
        </div>
        {resolvedTasks.length === 0 ? (
          <p className="text-[#627382] mt-3.5">No resolved tasks yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {resolvedTasks.map((ticket) => (
              <div
                key={ticket.id}
                className="p-4 rounded bg-[#E0E7FF] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]"
              >
                <div className="text-lg font-medium text-[#001931]">
                  {ticket.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
