import React, { use } from 'react';
import SingleTicketCard from '../SingleTicketCard/SingleTicketCard';

const TicketsCard = ({ticketsPromise, progress, setProgress, selectedTicket, setSelectedTickets}) => {

    const ticketsData = use(ticketsPromise);
    
    return (
        <div className='lg:col-span-3'>
            <div className='text-2xl font-semibold text-[#34485A] mb-4'>Customer Tickets</div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3.5'>
                {
                    ticketsData.map(ticket => <SingleTicketCard key={ticket.id} selectedTicket={selectedTicket} setSelectedTickets={setSelectedTickets} progress={progress} setProgress={setProgress} ticket={ticket}></SingleTicketCard>)
                }
            </div>
        </div>
    );
};

export default TicketsCard;