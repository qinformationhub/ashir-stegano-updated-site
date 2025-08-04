"use client"




import React from 'react';
import { FaCode, FaCloud, FaMobileAlt, FaPlug, FaRobot, FaComments, FaDraftingCompass } from 'react-icons/fa';

const SolutionLifecycle = () => {
  const expertise = [
    { title: "Custom Software Development", icon: <FaCode /> },
    { title: "SaaS & Enterprise Platforms", icon: <FaCloud /> },
    { title: "Web & Mobile App Engineering", icon: <FaMobileAlt /> },
    { title: "API Design & Systems Integration", icon: <FaPlug /> },
    { title: "AI, Machine Learning & Predictive Analytics", icon: <FaRobot /> },
    { title: "Natural Language Processing & Chatbots", icon: <FaComments /> },
    { title: "UX/UI Design & Prototyping", icon: <FaDraftingCompass /> },
    { title: "Progressive Web Apps (PWAs)", icon: <FaCloud /> }
  ];

  return (
    <div className="bg-black  pt-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
      <div className="text-left mb-12 animate-fade-in-up">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight relative inline-block group">
    <span className="relative z-10">OUR EXPERTISE</span>

    {/* Bottom White Line with Controlled Glowing Effect */}
    <span className="absolute left-0 -bottom-1 w-[60%] h-1 bg-white shadow-md group-hover:shadow-[0_0_5px_1px_rgba(255,255,255,1)]"></span>

    {/* Optional background blur */}
    <div className="absolute -inset-2 bg-white/5 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </h2>

  <p className="text-base sm:text-lg md:text-xl text-[#aaaaaa] leading-relaxed mt-6 max-w-3xl animate-fade-in-delayed">
    Our core strengths include:
  </p>
</div>


        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-gray-900/30 rounded-lg border border-gray-700 hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:bg-gray-800/40 animate-fade-in-card opacity-0 group relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white transition-all duration-500 animate-border-glow opacity-0 group-hover:opacity-100"></div>
              
              {/* Glowing dot animation */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out"></div>

              <div className="text-white text-2xl mt-1 transition-all duration-500 group-hover:scale-125 group-hover:text-white group-hover:rotate-12 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                {item.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-[#eaeaea] text-lg sm:text-xl font-semibold mb-1 group-hover:text-white transition-all duration-500 group-hover:translate-x-2 group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up-delayed">
          <button className="bg-white hover:bg-white text-black hover:text-black font-semibold px-8 py-4 rounded-md text-lg transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-white/40 transform hover:-translate-y-2 hover:scale-110 relative overflow-hidden group">
            <span className="relative z-10 group-hover:animate-pulse">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            <div className="absolute -inset-1 bg-white rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            width: inherit;
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes fadeInCard {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeInUp 1.2s ease-out 0.4s both;
        }

        .animate-fade-in-up-delayed {
          animation: fadeInUp 1.2s ease-out 1s both;
        }

        .animate-slide-in {
          animation: slideIn 1.5s ease-out 0.8s both;
        }

        .animate-fade-in-card {
          animation: fadeInCard 1s ease-out both;
        }

        .animate-border-glow {
          animation: borderGlow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: floatUpDown 3s ease-in-out infinite;
        }

        /* Shimmer keyframes */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionLifecycle;