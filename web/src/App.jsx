import { ArrowRight } from 'lucide-react';
function App() {
  return (
    <div>
      <header className='font-light'>
        <div className="gap-1 flex bg-black justify-center items-center text-white py-2">
          <p className='text-gray-300'>Find the best Solution for your business.</p>
          <p>Get started for free</p>
          <ArrowRight />
        </div>
      </header>
      <div className='flex gap-1 mt-2 font-bold justify-center items-center text-6xl pt-10'>
        <p className='flex justify-center gap-1'>Innovating the Future with
        <span className=''>Mechatronics</span></p>
      </div>
      <div className='flex justify-center items-center font-extralight text-xl'>
        Explore intelligent systems, robotics, IoT, and automation <br /> through engineering excellence.
      </div>
      </div>
  );
}

export default App;
