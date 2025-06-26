import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
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
        <p className='flex flex-wrap gap-3'>Innovating the Future with
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600'>Mechatronics</span></p>
      </div>
      <div className='flex justify-center items-center font-extralight text-xl py-5'>
        Explore intelligent systems, robotics, IoT, and automation through engineering excellence.
      </div>
      <div className='justify-center items-center flex relative py-10'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className='
            relative
            bg-gradient-to-l from-yellow-200 to-orange-400
          text-black font-normal
            px-3 py-2.5 
            rounded-md
            transition-all duration-500 border
            border-transparent hover:border-gradient-to-l from-yellow-200 to-orange-400
            cursor-pointer hover:shadow-[0_0_20px_3px_rgba(255,200,100,0.5)]'>
        Try demo for free
        </motion.button>
      </div>
    </div>
  );
}

export default App;
