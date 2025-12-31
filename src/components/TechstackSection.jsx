import React from "react";

// Blob
import Blob from "../assets/userassets/blob vector.png";

// Tech logos
import HTML from "../assets/stack/HTML.png";
import CSS from "../assets/stack/CSS.png";
import Javascript from "../assets/stack/Javascript.svg";
import ReactLogo from "../assets/stack/React.png";
import NodeJs from "../assets/stack/NodeJs.svg";
import Redux from "../assets/stack/Redux.svg";
import Tailwind from "../assets/stack/Tailwind.png";
import Express from "../assets/stack/Express.png";
import Git from "../assets/stack/Git.svg";
import Github from "../assets/stack/Github.svg";
import MongoDB from "../assets/stack/MongoDB.svg";
import Vercel from "../assets/stack/Vercel.svg";

const tech = [
  { img: HTML, name: "HTML" },
  { img: CSS, name: "CSS" },
  { img: Javascript, name: "JavaScript" },
  { img: ReactLogo, name: "React" },
  { img: NodeJs, name: "NodeJS" },
  { img: Redux, name: "Redux" },
  { img: Tailwind, name: "Tailwind CSS" },
  { img: Express, name: "Express" },
  { img: Git, name: "Git" },
  { img: Github, name: "GitHub" },
  { img: MongoDB, name: "MongoDB" },
  { img: Vercel, name: "Vercel" },
];

const TechstackSection = () => {
  return (
    <section className="relative bg-gray-900 py-20 -top-40" id="tech">
      {/* Title */}
      <h2 className="text-center text-4xl md:text-6xl font-extrabold text-pink-500 tracking-wide">
        Tech Stack
      </h2>

      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-10 px-6">
        {/* Left Text */}
        <div className="md:w-2/5">
          <h3 className="text-3xl text-pink-500 font-semibold">
            <span className="text-7xl">M</span>e and
          </h3>

          <h3 className="text-white text-3xl font-semibold mt-1">
            My Tech Stack
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I work with modern frontend technologies including HTML, CSS,
            Tailwind CSS, and JavaScript to build clean, responsive, and
            user-friendly web interfaces.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I develop interactive components and single-page applications using
            React.js, and I manage my projects using Git and GitHub for version
            control and collaboration.
          </p>
        </div>

        {/* Right Tech Icons Grid */}
        <div className="relative md:w-3/5">
          {/* Floating Blob */}
          <img
            src={Blob}
            alt="Decorative blob"
            className="absolute top-10 left-30 w-72 opacity-40 animate-blob blur-2xl"
          />

          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-5 z-10">
            {tech.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur border border-gray-700 rounded-2xl p-4 flex flex-col items-center gap-2 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
              >
                <img src={item.img} alt={item.name} className="h-14 w-14" />
                <p className="text-gray-300 text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Motion animations */}
      <style jsx>{`
        /* Floating organic blob */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(35px, -25px) scale(1.15);
          }
          66% {
            transform: translate(-25px, 25px) scale(0.92);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 9s infinite ease-in-out;
        }

        /* Card reveal animation */
        #tech .grid > div {
          opacity: 0;
          transform: translateY(25px) scale(0.96);
          animation: cardEnter 0.9s forwards ease-out;
        }

        @keyframes cardEnter {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Stagger effect */
        #tech .grid > div:nth-child(1) {
          animation-delay: 0.1s;
        }
        #tech .grid > div:nth-child(2) {
          animation-delay: 0.2s;
        }
        #tech .grid > div:nth-child(3) {
          animation-delay: 0.3s;
        }
        #tech .grid > div:nth-child(4) {
          animation-delay: 0.4s;
        }
        #tech .grid > div:nth-child(5) {
          animation-delay: 0.5s;
        }
        #tech .grid > div:nth-child(6) {
          animation-delay: 0.6s;
        }
        #tech .grid > div:nth-child(7) {
          animation-delay: 0.7s;
        }
        #tech .grid > div:nth-child(8) {
          animation-delay: 0.8s;
        }
        #tech .grid > div:nth-child(9) {
          animation-delay: 0.9s;
        }
        #tech .grid > div:nth-child(10) {
          animation-delay: 1s;
        }
        #tech .grid > div:nth-child(11) {
          animation-delay: 1.1s;
        }
        #tech .grid > div:nth-child(12) {
          animation-delay: 1.2s;
        }

        /* Gentle breathing pulse on hover */
        #tech .grid > div:hover {
          animation: pulse 1.2s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default TechstackSection;
