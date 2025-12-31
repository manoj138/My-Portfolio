import React, { useState } from "react";
import { motion } from "framer-motion";
console.log(motion);
import MyLogo from "../assets/userassets/My logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
    >
      <motion.div
        className="
        flex flex-col md:flex-row justify-between items-center
        p-5 gap-5 font-bold text-white
        bg-linear-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80
        backdrop-blur-xl border border-white/10 
        shadow-[0_0_25px_rgba(255,0,120,0.25)]
        mx-3 md:mx-6 mt-3 rounded-2xl
        transition-all duration-500
        hover:shadow-[0_0_40px_rgba(255,20,147,0.45)]
      "
        whileHover={{ scale: 1.01 }}
      >
        {/* Left — logo + name */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <motion.img
              src={MyLogo}
              alt="My Logo"
              className="w-5 h-5 md:w-13 md:h-13 rounded-xl ring-2 ring-pink-500/40"
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ type: "spring" }}
            />

            <motion.span
              className="text-xl md:text-2xl tracking-wide"
              whileHover={{ x: 4 }}
            >
              Manoj Chougule
            </motion.span>
          </motion.div>

          {/* Hamburger */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-gray-300"
            whileTap={{ scale: 0.8, rotate: 10 }}
          >
            {open ? "✕" : "☰"}
          </motion.button>
        </div>

        {/* Desktop menu */}
        <motion.div
          className="hidden md:flex items-center gap-10 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["project", "tech", "contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="
              relative cursor-pointer text-gray-200
              transition-all duration-300 hover:text-pink-400
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:h-0.5 after:w-full after:bg-pink-500
              after:scale-x-0 after:origin-right
              after:transition-transform after:duration-300
              hover:after:scale-x-100 hover:after:origin-left
            "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              {item === "tech"
                ? "Skill"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile dropdown */}
        {open && (
          <motion.div
            className="flex flex-col items-center gap-4 bg-gray-900/70 w-full mt-3 py-4 rounded-xl md:hidden border border-white/10"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
          >
            {["project", "tech", "contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-gray-200 hover:text-pink-400 text-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
              >
                {item === "tech"
                  ? "Skill"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
