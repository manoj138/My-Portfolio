import React from 'react';
import { motion } from 'framer-motion';
console.log(motion);
// Import all images
import HTML from '../assets/stack/HTML.png';
import CSS from '../assets/stack/CSS.png';
import JS from '../assets/stack/Javascript.svg';
import Tailwind from '../assets/stack/Tailwind.png';
import Vercel from '../assets/stack/Vercel.svg';

const ProjectSection = () => {
  return (
    <div className="relative py-16 bg-gray-950 overflow-hidden -top-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <h2
        id="project"
        className="text-cyan-400 text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-tight"
      >
        Projects
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-10">

        {/* CARD 1 */}
        <motion.div
          className="group perspective"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative py-3 rounded-2xl border  bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-10px_rgba(0,0,0,.7)] transition-all duration-500 ease-out transform-gpu group-hover:-rotate-x-3 group-hover:rotate-y-6 group-hover:scale-[1.04]">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition bg-white/20 blur-2xl" />
            <div className="absolute -top-6 left-4 text-white text-6xl opacity-30 font-bold">01</div>

            <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-wrap gap-3">
                <img src={HTML} className="h-10 hover:scale-125 transition" />
                <img src={CSS} className="h-10 hover:scale-125 transition" />
              </div>

              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">Book Lane Clone</h2>
                <p className="text-gray-300">Buy, sell and discover books in a trusted community.</p>

              <div className="flex gap-4 mt-4 items-center">
  <a
    href="https://book-lane.vercel.app/"
    target="_blank"
    className="px-4 py-2 rounded-lg border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 transition"
  >
    Read More
  </a>
  <a href="https://github.com/manoj138/Book-lane" target="_blank">
    <i className="fa-brands fa-github text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
  <a href="https://book-lane.vercel.app/" target="_blank">
    <i className="fa-solid fa-link text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
</div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="group perspective"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="relative py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-10px_rgba(0,0,0,.7)] transition-all duration-500 transform-gpu group-hover:-rotate-x-3 group-hover:-rotate-y-6 group-hover:scale-[1.04]">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition bg-white/20 blur-2xl" />
            <div className="absolute -top-6 left-4 text-white text-6xl opacity-30 font-bold">02</div>

            <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-wrap gap-3">
                <img src={HTML} className="h-10 hover:scale-125 transition" />
                <img src={CSS} className="h-10 hover:scale-125 transition" />
                <img src={Tailwind} className="h-10 hover:scale-125 transition" />
              </div>

              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">RazorPay Clone</h2>
                <p className="text-gray-300">Simple UI clone for payment gateway landing page.</p>

             <div className="flex items-center  gap-4 mt-4">
  <a
    href="https://razorpay-clone-9h97.vercel.app/"
    target="_blank"
    className="py-2 rounded-lg border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 transition"
  >
    Read More
  </a>
  <a href="https://github.com/manoj138/RazorpayClone" target="_blank">
    <i className="fa-brands fa-github text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
  <a href="https://razorpay-clone-9h97.vercel.app/" target="_blank">
    <i className="fa-solid fa-link text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
</div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="group perspective"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-10px_rgba(0,0,0,.7)] transition-all duration-500 transform-gpu group-hover:-rotate-x-3 group-hover:rotate-y-6 group-hover:scale-[1.04]">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition bg-white/20 blur-2xl" />
            <div className="absolute -top-6 left-4 text-white text-6xl opacity-30 font-bold">03</div>

            <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-wrap gap-3">
                <img src={HTML} className="h-10 hover:scale-125 transition" />
                <img src={CSS} className="h-10 hover:scale-125 transition" />
                <img src={Tailwind} className="h-10 hover:scale-125 transition" />
                <img src={Vercel} className="h-10 hover:scale-125 transition" />
              </div>

              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">Discord Clone</h2>
                <p className="text-gray-300">Responsive community chat style interface design.</p>

            <div className="flex  items-center  gap-4 mt-4">
  <a
    href="https://discord-clone-umber-one.vercel.app/"
    target="_blank"
    className="py-2 rounded-lg border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 transition"
  >
    Read More
  </a>
  <a href="https://github.com/manoj138/Discord-Clone" target="_blank">
    <i className="fa-brands fa-github text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
  <a href="https://discord-clone-umber-one.vercel.app/" target="_blank">
    <i className="fa-solid fa-link text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
</div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          className="group perspective"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="relative py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-10px_rgba(0,0,0,.7)] transition-all duration-500 transform-gpu group-hover:-rotate-x-3 group-hover:rotate-y-6 group-hover:scale-[1.04]">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition bg-white/20 blur-2xl" />
            <div className="absolute -top-6 left-4 text-white text-6xl opacity-30 font-bold">04</div>

            <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-wrap gap-3">
                <img src={HTML} className="h-10 hover:scale-125 transition" />
                <img src={CSS} className="h-10 hover:scale-125 transition" />
                <img src={JS} className="h-10 hover:scale-125 transition" />
              </div>

              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">Bubble-Hit Game</h2>
                <p className="text-gray-300">Fun bubble shooting game using HTML, CSS & JavaScript.</p>

              <div className="flex items-center gap-4 mt-4">
  <a
    href="https://bubble-hit-game-rho.vercel.app/"
    target="_blank"
    className=" py-2 rounded-lg border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 transition"
  >
    Read More
  </a>
  <a href="https://github.com/manoj138/Bubble-Hit-Game" target="_blank">
    <i className="fa-brands fa-github text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
  <a href="https://bubble-hit-game-rho.vercel.app/" target="_blank">
    <i className="fa-solid fa-link text-2xl hover:text-cyan-300 cursor-pointer"></i>
  </a>
</div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectSection;
