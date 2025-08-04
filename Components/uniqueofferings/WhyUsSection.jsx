import React from 'react';
import vector from "../../public/images/arrow.png";
import Image from 'next/image';

const WhyUsSection = () => {
  return (
    <div className="bg-black min-h-screen text-gray-300 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 w-full">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 tracking-wider w-full">
            WHY CHOOSE STEGANOX?
          </h2>
          <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-1 bg-white mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
            We create intelligent software solutions with purpose, speed, and scale.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* Illustration */}
          <div className="order-2 lg:order-1 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                width={400}
                src={vector}
                alt="Why choose us illustration"
                className="h-auto object-contain md:ms-32 lg:ms-32"
                priority
              />
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 lg:space-y-10">

            {/* Secure and Scalable */}
            <div className="text-center lg:text-left px-2 sm:px-0">
              <h3 className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">
                SECURE AND SCALABLE
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                We deliver solutions that are secure, scalable, and insightful.
              </p>
            </div>

            {/* Future-Ready */}
            <div className="text-center lg:text-left px-2 sm:px-0">
              <h3 className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">
                FUTURE-READY
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                Scalable architectures that grow with your business.
              </p>
            </div>

            {/* Fast & Agile */}
            <div className="text-center lg:text-left px-2 sm:px-0">
              <h3 className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">
                FAST & AGILE
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                Rapid MVPs and iterative builds keep you ahead.
              </p>
            </div>

            {/* End-to-End Expertise */}
            <div className="text-center lg:text-left px-2 sm:px-0">
              <h3 className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 tracking-wide">
                END-TO-END EXPERTISE
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                From initial strategy to launch — and beyond.
              </p>
            </div>

          </div>
          
        </div>
          {/* MVP Development Section */}
        <div className="border-t border-gray-800 pt-8 sm:pt-12 lg:pt-16 xl:pt-20">
          <div className="text-left">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 tracking-wider">
              MVP DEVELOPMENT
            </h2>
            <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-1 bg-white mb-4 sm:mb-6"></div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed">
              You have an idea, we have the expertise to bring it to life. We help you build a Minimum Viable Product (MVP) that is scalable, secure, and user-friendly.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WhyUsSection;
