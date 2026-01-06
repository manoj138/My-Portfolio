import React from "react";
import { motion } from "framer-motion";
console.log(motion);
const FooterSection = () => {
  const socialLinks = [
    { href: "#", icon: "fab fa-whatsapp", name: "Whatsapp" },
    { href: "#", icon: "fab fa-facebook", name: "Facebook" },
    { href: "#", icon: "fab fa-instagram", name: "Instagram" },
    { href: "#", icon: "fab fa-linkedin", name: "LinkedIn" },
    { href: "#", icon: "fab fa-twitter", name: "Twitter" },
    { href: "#", icon: "fas fa-envelope", name: "Email" },
  ];

  return (
    <footer className="relative bottom-0">
      <div className="absolute inset-0 bg-linear-to-tr from-gray-900 via-gray-800 to-black animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-75 bg-pink-500/20 blur-3xl rounded-full" />

      <motion.div
        className="relative bg-gray-900/40 backdrop-blur-xl border-t border-gray-700/40 text-white py-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center  space-y-6 md:space-y-0">
          {/* Left Links */}
          <motion.div
            className="flex flex-row md:flex-row gap-6 text-lg font-semibold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a
              href="#project"
              className="hover:text-pink-500 transition-all hover:tracking-wide"
            >
              Project
            </a>

            <a
              href="#tech"
              className="hover:text-pink-500 transition-all hover:tracking-wide"
            >
              Skill
            </a>

            <a
              href="#contact"
              className="hover:text-pink-500 transition-all hover:tracking-wide"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-2xl hover:text-pink-500 transition-all group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.15, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={link.icon}></i>

                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity border border-gray-700">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8 text-gray-400 font-medium text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Manoj Chougule. All rights reserved.
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;
