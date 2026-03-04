import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import vector1 from './assets/images/vector1.png';
import vector2 from './assets/images/vector2.png';
import TicketsCard from './components/TicketsCard/TicketsCard';
import TaskList from './components/TaskList/TaskList';
import { ToastContainer } from 'react-toastify';
import { Suspense, useState } from 'react';

const fetchTickets = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

const ticketsPromise = fetchTickets();

function App() {

  const [progress, setProgress] = useState(0);
  const [resolve, setResolve] = useState(0);
  const [selectedTicket, setSelectedTickets] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  return (
    <>
      <Header></Header>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6 max-w-[1440px] mx-auto my-20 p-2'>
        <div className='w-full h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center rounded-lg text-white relative'>
          <img className='absolute left-0' src={vector1} alt="" />
          <img className='absolute right-0' src={vector2} alt="" />
          <p className='text-2xl'>In-Progress</p>
          <h2 className='font-semibold text-6xl'>{progress}</h2>
        </div>
        <div className='w-full h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col justify-center items-center rounded-lg text-white relative'>
          <img className='absolute left-0' src={vector1} alt="" />
          <img className='absolute right-0' src={vector2} alt="" />
          <p className='text-2xl'>Resolved</p>
          <h2 className='font-semibold text-6xl'>{resolve}</h2>
        </div>
      </div>
      <div className='max-w-[1440px] mx-auto p-2'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
            <TicketsCard progress={progress} setProgress={setProgress} ticketsPromise={ticketsPromise} selectedTicket={selectedTicket} setSelectedTickets={setSelectedTickets}></TicketsCard>
          </Suspense>
          <TaskList progress={progress} setProgress={setProgress} resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks} resolve={resolve} setResolve={setResolve} selectedTicket={selectedTicket} setSelectedTickets={setSelectedTickets}></TaskList>
        </div>
      </div>
      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
