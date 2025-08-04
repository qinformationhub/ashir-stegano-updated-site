

"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Brain, Smartphone, Palette, Cloud, Sparkles } from 'lucide-react';

const WeOfferSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

  const services = [
    {
      title: "Custom Software Development",
      description: "From concept to development, we build secure, scalable, and high-performance software tailored to your unique business needs.",
      icon: Code,
      gradient: "from-gray-800/40 to-gray-600/40",
      accentColor: "gray-600",
      delay: 0,
    },
    {
      title: "AI & Data Solutions",
      description: "Harness the power of data with machine learning, predictive analytics, NLP, and intelligent automation that drive smarter decisions.",
      icon: Brain,
      gradient: "from-gray-800/40 to-gray-600/40",
      accentColor: "gray-600",
      delay: 200,
    },
    {
      title: "Web & Mobile Applications",
      description: "Engage your customers with sleek, intuitive web and mobile apps designed for flawless experiences across all platforms.",
      icon: Smartphone,
      gradient: "from-gray-800/40 to-gray-600/40",
      accentColor: "gray-600",
      delay: 400,
    },
    {
      title: "Digital Experience & UX/UI Design",
      description: "Transform ideas into exceptional user journeys with strategic design, interactive prototyping, and conversion-focused interfaces.",
      icon: Palette,
      gradient: "from-gray-800/40 to-gray-600/40",
      accentColor: "gray-600",
      delay: 600,
    },
    {
      title: "Cloud, DevOps & Support",
      description: "Accelerate delivery and ensure reliability with cloud-native architectures, CI/CD pipelines, infrastructure automation, and 24/7 maintenance.",
      icon: Cloud,
      gradient: "from-gray-800/40 to-gray-600/40",
      accentColor: "gray-600",
      delay: 800,
    },
  ];

  // Generate orbiting particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.2,
        delay: Math.random() * 4,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // Card visibility animation
  useEffect(() => {
    const timers = services.map((_, index) =>
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Mouse and scroll event listeners
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-black text-white py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Orbiting Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full animate-orbit-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.speed + 3}s`,
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          />
        ))}
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-gray-800/20 to-gray-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-gray-800/20 to-gray-600/20 rounded-full blur-3xl animate-float-slow-delayed"></div>
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-slide"></div>
      </div>

      {/* Cursor Glow */}
      <div
        className="fixed w-48 h-48 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-300 z-0 animate-cursor-glow"
        style={{
          left: mousePosition.x - 96,
          top: mousePosition.y - 96,
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative inline-block">
            <Sparkles className="absolute -top-6 -left-6 w-5 h-5 text-white/30 animate-twinkle" />
            <Sparkles className="absolute -top-4 -right-6 w-4 h-4 text-white/20 animate-twinkle-delayed" />
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-white tracking-tight animate-text-shine">
              Services We Offer
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-slide-glow"></div>
            </h2>
            <p className="text-[#aaaaaa] text-sm md:text-base lg:text-lg mt-4 max-w-2xl mx-auto animate-fade-in-up font-light">
              Crafting visionary ideas into digital masterpieces with cutting-edge technology
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                } hover:z-10`}
                style={{ transitionDelay: `${service.delay}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-70 transition-all duration-500 blur-lg animate-glow-pulse`}></div>
                {/* Card */}
                <div className="relative bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/30 hover:shadow-xl hover:shadow-white/5 transition-all duration-500 h-full flex flex-col group-hover:scale-105">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 animate-icon-pulse`}>
                      <IconComponent className="w-full h-full text-white drop-shadow-md" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-particle-bounce"></div>
                  </div>
                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white group-hover:text-[#ffffff] transition-all duration-300 relative">
                      {service.title}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-400 ease-out"></div>
                    </h3>
                    <p className="text-[#aaaaaa] text-sm md:text-base leading-relaxed group-hover:text-[#eaeaea] transition-all duration-300">
                      {service.description}
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="flex justify-end mt-6">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 animate-arrow-pulse">
                      <ArrowRight className="w-5 h-5 text-[#aaaaaa] group-hover:text-[#ffffff] transition-all duration-300" />
                    </div>
                  </div>
                </div>
            
         
                {/* Sparkle Effect */}
                <Sparkles className="absolute -top-3 -right-3 w-4 h-4 text-white/0 group-hover:text-white/50 transition-all duration-400 animate-twinkle" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <div className="relative inline-block group">
            <button className="relative px-10 py-4 bg-black text-[#ffffff] font-semibold text-base md:text-lg rounded-full border-2 border-white/20 hover:border-white/40 hover:scale-110 transition-all duration-400 overflow-hidden animate-cta-bounce">
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Solutions
                <ArrowRight className="w-5 h-5 text-[#aaaaaa] group-hover:text-[#ffffff] transition-all duration-300 animate-arrow-dance" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 animate-ripple"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-12px) translateX(8px); }
        }
        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(-6px); }
        }
        @keyframes orbit-particle {
          0% { transform: rotate(0deg) translateX(10px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
        }
        @keyframes grid-slide {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes cursor-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        @keyframes text-shine {
          0%, 100% { text-shadow: 0 0 4px rgba(255,255,255,0.2); }
          50% { text-shadow: 0 0 12px rgba(255,255,255,0.5); }
        }
        @keyframes slide-glow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes icon-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(3deg); }
        }
        @keyframes particle-bounce {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes arrow-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes badge-bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-3px) scale(1.05); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        @keyframes twinkle-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        @keyframes cta-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes arrow-dance {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(3px); }
        }
        @keyframes ripple {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-slow-delayed { animation: float-slow-delayed 8s ease-in-out infinite; }
        .animate-orbit-particle { animation: orbit-particle 6s linear infinite; }
        .animate-grid-slide { animation: grid-slide 20s linear infinite; }
        .animate-cursor-glow { animation: cursor-glow 2.5s ease-in-out infinite; }
        .animate-text-shine { animation: text-shine 4s ease-in-out infinite; }
        .animate-slide-glow { animation: slide-glow 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        .animate-icon-pulse { animation: icon-pulse 4s ease-in-out infinite; }
        .animate-particle-bounce { animation: particle-bounce 2s ease-in-out infinite; }
        .animate-arrow-pulse { animation: arrow-pulse 2s ease-in-out infinite; }
        .animate-badge-bounce { animation: badge-bounce 3s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-twinkle-delayed { animation: twinkle-delayed 2.5s ease-in-out infinite; }
        .animate-cta-bounce { animation: cta-bounce 4s ease-in-out infinite; }
        .animate-arrow-dance { animation: arrow-dance 1.5s ease-in-out infinite; }
        .animate-ripple { animation: ripple 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default WeOfferSection;