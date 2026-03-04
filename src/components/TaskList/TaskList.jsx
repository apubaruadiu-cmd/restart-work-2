import React from 'react';

const TaskList = () => {
    return (
        <div className='lg:col-span-1'>
            <div>
                <div className='text-2xl font-semibold text-[#34485A] mb-4'>Task Status</div>
                <p className='text-[#627382] mt-3.5'>Select a ticket to add to Task Status</p>
                <div className='flex flex-col gap-4'>
                    <div className='p-4 rounded bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]'>
                        <div className='text-lg font-medium text-[#001931]'>Payment Failed - Card Declined</div>
                        <button className='px-4 py-3 rounded-sm text-white bg-[#02A53B] w-full mt-4'>Complete</button>
                    </div>
                    <div className='p-4 rounded bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]'>
                        <div className='text-lg font-medium text-[#001931]'>Payment Failed - Card Declined</div>
                        <button className='px-4 py-3 rounded-sm text-white bg-[#02A53B] w-full mt-4'>Complete</button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='text-2xl font-semibold text-[#34485A] mb-4'>Resolved Task</div>
                <p className='text-[#627382] mt-3.5'>No resolved tasks yet.</p>
                <div className='flex flex-col gap-4'>
                    <div className='p-4 rounded bg-[#E0E7FF] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]'>
                        <div className='text-lg font-medium text-[#001931]'>Payment Failed - Card Declined</div>
                    </div>
                    <div className='p-4 rounded bg-[#E0E7FF] shadow-[0_4px_16px_0_rgba(0,0,0,0.08)]'>
                        <div className='text-lg font-medium text-[#001931]'>Payment Failed - Card Declined</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskList;