import React from "react";

// import logos
import VSCodeLogo from "../assets/stack/vscode.png";
import AILogo from "../assets/stack/Chatgpt.jpg";
import GitHubLogo from "../assets/stack/GitHub.svg";
import VercelLogo from "../assets/stack/vercel-text.svg";
import Vite from "../assets/stack/vite.svg";

const Tools = () => {
  const tools = [
    { name: "VS Code", logo: VSCodeLogo },
    { name: "AI Tools", logo: AILogo },
    { name: "GitHub", logo: GitHubLogo },
    { name: "Vercel", logo: VercelLogo },
    { name: "vite", logo: Vite },
  ];

  return (
    <div className="py-16 relative -top-40 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-4">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 bg-linear-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-lg hover:scale-110 hover:rotate-3 transition-transform duration-500 tool-item"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="h-16 w-16 object-contain mb-2 animate-bounce-slow"
            />
            <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Smooth section fade in */
        .py-16 {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slow floating bounce */
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }

        /* Card reveal + stagger */
        .tool-item {
          opacity: 0;
          transform: translateY(25px) scale(0.96);
          animation: cardReveal 0.9s forwards ease-out;
        }

        .tool-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        .tool-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        .tool-item:nth-child(3) {
          animation-delay: 0.3s;
        }
        .tool-item:nth-child(4) {
          animation-delay: 0.4s;
        }
        .tool-item:nth-child(5) {
          animation-delay: 0.5s;
        }

        @keyframes cardReveal {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Glow pulse on hover */
        .tool-item:hover {
          box-shadow: 0 20px 40px rgba(255, 0, 120, 0.25),
            0 0 25px rgba(255, 0, 180, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Tools;
