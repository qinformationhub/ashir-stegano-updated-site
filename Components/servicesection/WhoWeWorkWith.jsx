"use client"
import React, { useState, useEffect } from 'react';

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Innovation",
      description: "Cutting-edge solutions that push boundaries"
    },
    {
      title: "Scale",
      description: "Built to grow with your business needs"
    },
    {
      title: "Leadership",
      description: "Stay ahead in your competitive landscape"
    },
    {
      title: "Security",
      description: "Enterprise-grade protection for your data"
    }
  ];

  const aboutContent = [
    {
      title: "OUR MISSION",
      description: "To empower businesses through intelligent, reliable, and future-ready software — turning complex challenges into powerful digital opportunities."
    },
    {
      title: "OUR VISION",
      description: "To be a trusted global technology partner, known for precision engineering, innovation, and delivering solutions that make a meaningful impact."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Company Name & Tagline */}
      <div className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 leading-tight tracking-tight text-white animate-glow-text">
    STEGANOX
  </h2>
  <div className="relative inline-block">
    <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-20 sm:w-32 md:w-40 lg:w-48 h-1 sm:h-1.5 bg-white rounded-full shadow-lg shadow-white/50 animate-glow"></div>
  </div>
  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mt-6 sm:mt-8 max-w-4xl mx-auto leading-relaxed px-2 text-[#eaeaea] animate-fade-in-up" style={{animationDelay: '0.5s'}}>
    Building Intelligent Software & Empowering Ambitious Businesses
  </p>
  <p className="text-xs sm:text-base md:text-lg lg:text-xl font-light mt-3 sm:mt-4 px-2 text-[#aaaaaa] animate-fade-in-up" style={{animationDelay: '0.7s'}}>
    From Concept to Development, Intelligently Mapped
  </p>
</div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start mb-8 sm:mb-12 md:mb-16">
          
          {/* Left Side - About Us Content */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="group">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-white relative">
                About Us
                <div className="absolute -inset-1 bg-white/10 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </h2>
              <div className="w-12 sm:w-16 md:w-20 h-1 bg-white rounded-full mb-4 sm:mb-6 animate-slide-expand"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light text-[#aaaaaa] transform hover:translate-x-2 transition-transform duration-300">
                At <span className="text-[#eaeaea] font-semibold hover:text-white transition-colors duration-300">Steganox</span>, we design and develop cutting-edge software solutions that help you innovate, scale, and lead in your industry.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light text-[#aaaaaa] transform hover:translate-x-2 transition-transform duration-300">
                From smart platforms to data-driven systems, we deliver <span className="text-[#eaeaea] font-semibold hover:text-white transition-colors duration-300">secure and scalable solutions</span> that transform your business vision into reality.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-4 sm:pt-6">
              <button className="group relative bg-gray-800 hover:bg-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-white/20 transform hover:scale-110 hover:-translate-y-1 border-2 border-gray-600 hover:border-white overflow-hidden w-full sm:w-auto text-white">
                <span className="relative z-10 group-hover:animate-pulse">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute -inset-1 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Interactive Features */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Main Feature Card */}
            <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 group overflow-hidden transform hover:-translate-y-2">
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-[#eaeaea] group-hover:text-white transition-colors duration-300">
                    Our Core Values
                  </h3>
                  <div className="w-10 sm:w-12 h-1 bg-white rounded-full mx-auto animate-pulse-glow"></div>
                </div>

                {/* Rotating Features */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 cursor-pointer relative overflow-hidden group/item ${
                        activeFeature === index 
                          ? 'border-white/50 bg-white/5 transform scale-105 shadow-lg shadow-white/10' 
                          : 'border-gray-700 hover:border-white/30'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                        <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                          activeFeature === index ? 'bg-white animate-ping' : 'bg-gray-600 group-hover/item:bg-white'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-[#eaeaea] group-hover/item:text-white transition-colors duration-300">
                            {feature.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-[#aaaaaa] group-hover/item:text-[#eaeaea] transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission + Vision Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {aboutContent.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-[#eaeaea] group-hover:text-white transition-colors duration-300 group-hover:animate-pulse">
                  {item.title}
                </h3>
                <div className="w-10 sm:w-12 h-1 bg-white rounded-full mb-4 sm:mb-6 transform group-hover:scale-x-150 transition-transform duration-500 group-hover:shadow-lg group-hover:shadow-white/50"></div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed font-light text-[#aaaaaa] group-hover:text-[#eaeaea] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes glowText {
          0%, 100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes slideExpand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-glow-text {
          animation: glowText 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-slide-expand {
          animation: slideExpand 1s ease-out 0.5s both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default AboutUsSection;