import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
console.log("🚀 ~ motion:", motion)
import { Link } from "react-scroll";

import profile from "../assets/userassets/1706018807358.jpg";
import zigzag from "../assets/userassets/zigzags.png";
import plus from "../assets/userassets/plus.png";
import cube from "../assets/userassets/cube.png";
import circle from "../assets/userassets/circle.png";
import dots from "../assets/userassets/dots.png";

const HeroSection = () => {
  const roleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(roleRef.current, {
      strings: ["Software Developer", "Full Stack Developer", "Web Developer", "Coder"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => typed.destroy();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full min-h-screen p-10 py-30 relative -top-40 overflow-hidden text-white bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* animated gradient blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/40 blur-3xl rounded-full"
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-96 h-96 bg-pink-500/35 blur-3xl rounded-full"
        animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/35 blur-3xl rounded-full"
        animate={{ y: [0, 25, 0], x: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", delay: 4 }}
      />

      {/* glossy overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.75))]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-6 py-20 relative z-10">
        {/* LEFT TEXT */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col">
         <div className="text-3xl md:text-5xl flex sm:items-center flex-col md:flex-row font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 drop-shadow-[0_5px_25px_rgba(255,255,255,0.08)]">
  <span className="text-2xl md:text-5xl">Hi!</span>
  <span className="md:ml-2">Manoj Chougule</span>
</div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <h2 className="text-lg md:text-4xl lg:text-4xl font-bold mt-3">
                I am a{" "}
                <span
                  ref={roleRef}
                  className="text-pink-400 font-extrabold drop-shadow-[0_0_15px_rgba(255,0,120,0.35)]"
                ></span>
              </h2>
            </motion.div>
          </div>

          <p className="text-gray-300 mt-4 max-w-full md:max-w-lg leading-relaxed">
            Passionate about building clean, modern and responsive UI.
            Constantly learning — constantly improving.
          </p>

          {/* Buttons side by side */}
          <div className="flex gap-4 mt-6 flex-wrap">
            {/* Hire Me Button */}
      <Link
  to="contact"
  smooth={true}
  duration={800}
>
  <motion.button
    className="
      relative px-7 py-3 rounded-xl font-semibold
      border border-white/20
      bg-white/10 backdrop-blur-xl
      shadow-[0_15px_35px_rgba(0,0,0,0.45)]
      hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]
      hover:bg-white/20
      transition-all duration-300
      hover:scale-110
      before:absolute before:inset-0 before:rounded-xl
      before:bg-gradient-to-r before:from-pink-500/30 before:to-purple-500/30
      before:opacity-0 hover:before:opacity-100 before:transition
    "
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
  >
    Hire me
  </motion.button>
</Link>



            {/* Download CV Button */}
          <a
  href="https://drive.google.com/file/d/16sOSUvLCiYF4bFmSh2fXtEmRs9pjSPDy/view?usp=sharing"
  download="Manoj_Chougule_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    className="
      relative px-7 py-3 rounded-xl font-semibold
      border border-white/20
      bg-white/10 backdrop-blur-xl
      shadow-[0_15px_35px_rgba(0,0,0,0.45)]
      hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]
      hover:bg-white/20
      transition-all duration-300 hover:scale-110
      before:absolute before:inset-0 before:rounded-xl
      before:bg-gradient-to-r before:from-purple-500/30 before:to-blue-500/30
      before:opacity-0 hover:before:opacity-100 before:transition
    "
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
  >
    Download CV
  </motion.button>
</a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative w-full flex justify-center md:w-auto md:justify-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profile}
            alt="profile"
            className="w-80 md:w-96 rounded-3xl p-4 bg-white/5 border border-white/15 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10 hover:ring-pink-400/30 transition-all duration-500"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
          />

          {/* shine sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              className="absolute -inset-20 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          <motion.img
            src={zigzag}
            className="absolute top-0 left-0 w-10 md:w-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            whileHover={{ scale: 1.2, rotate: 5 }}
          />

          <motion.img
            src={plus}
            className="absolute top-0 right-1/2 w-6 md:w-8"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
            whileHover={{ scale: 1.2 }}
          />

          <motion.img
            src={cube}
            className="absolute top-0 right-5 w-8 md:w-10"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            whileHover={{ rotate: 15 }}
          />

          <motion.img
            src={circle}
            className="absolute bottom-10 left-10 w-5 md:w-7"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          />

          <motion.img
            src={dots}
            className="absolute bottom-5 right-5 w-16 md:w-20"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
