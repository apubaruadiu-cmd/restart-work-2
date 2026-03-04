import React, { useState } from "react";
import calender from "../../assets/images/calender.png";
import { toast } from "react-toastify";

const SingleTicketCard = ({
  ticket,
  progress,
  setProgress,
  selectedTicket,
  setSelectedTickets,
}) => {
  const [selected, setSelected] = useState(false);

  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const handleSelected = (ticket) => {
    setProgress(progress + 1)
    setSelectedTickets([...selectedTicket, ticket]);
    toast("Ticket Selected")
  };

  return (
    <div>
      <div
        onClick={() => handleSelected(ticket)}
        className="p-4 rounded bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]"
      >
        <div className="flex gap-2 justify-between items-center">
          <div className="text-lg font-medium text-[#001931]">{title}</div>
          <div
            className={`flex items-center gap-1.5 ${status === "Open" ? "text-[#0B5E06] bg-[#B9F8CF]" : "text-[#9C7700] bg-[#F8F3B9]"} font-medium py-1 px-3 rounded-4xl`}
          >
            <span
              className={`w-4 h-4 rounded-full block ${status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"}`}
            ></span>
            {status}
          </div>
        </div>
        <div className="text-[#627382] mt-2 font-normal line-clamp-2">
          {description}
        </div>
        <div className="flex gap-2 justify-between items-center mt-4 flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            <div className="font-medium text-[#627382]">{id}</div>
            {priority === "High" ? (
              <div className="text-[#F83044] text-sm uppercase">{priority}</div>
            ) : priority === "Medium" ? (
              <div className="text-[#FEBB0C] text-sm uppercase">{priority}</div>
            ) : (
              <div className="text-[#02A53B] text-sm uppercase">{priority}</div>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-[#627382] text-sm capitalize">{customer}</div>
            <div className="flex gap-1 items-center text-[#627382] text-sm">
              <img src={calender} alt="" />
              {createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicketCard;
