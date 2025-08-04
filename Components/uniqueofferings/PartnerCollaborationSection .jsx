import Image from 'next/image';
import React from 'react';
import partner from "../../public/images/we.jpg"

const PartnerCollaborationSection = () => {
  return (
    <div className="bg-black min-h-screen text-gray-300 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20">
        
        {/* PARTNER WITH US Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20 w-full">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 tracking-wider w-full">
            PARTNER WITH US
          </h2>
          <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-1 bg-white mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
            Collaborate with us and enjoy mutual growth and success
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* Illustration */}
          <div className="order-2 lg:order-1 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image width={400}
                src={partner} 
                alt="Partnership illustration"
                className="w-ful h-auto object-contain md:ms-32 lg:ms-32"
                priority
              />
            </div>
          </div>

          {/* Content */}
         <div className="order-1 lg:order-2 space-y-5 sm:space-y-6 lg:space-y-8">

  {/* Single Card Example */}
  <div className="text-center lg:text-left px-2 sm:px-0 border-b border-transparent hover:border-white hover:border-b-2 transition-all duration-300 pb-3">
    <h4 className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 tracking-wide">
      SEAMLESS COLLABORATION
    </h4>
    <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
      Effortlessly integrate with our team and systems.
    </p>
  </div>

  {/* Repeat for other items */}
  <div className="text-center lg:text-left px-2 sm:px-0 border-b border-transparent hover:border-white hover:border-b-2 transition-all duration-300 pb-3">
    <h3 className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 tracking-wide">
      MUTUAL BENEFITS
    </h3>
    <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
      Gain access to shared resources and exclusive opportunities.
    </p>
  </div>

  <div className="text-center lg:text-left px-2 sm:px-0 border-b border-transparent hover:border-white hover:border-b-2 transition-all duration-300 pb-3">
    <h3 className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 tracking-wide">
      COMPREHENSIVE SUPPORT
    </h3>
    <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
      Receive thorough assistance and expertise every step of the way.
    </p>
  </div>

  <div className="text-center lg:text-left px-2 sm:px-0 border-b border-transparent hover:border-white hover:border-b-2 transition-all duration-300 pb-3">
    <h3 className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 tracking-wide">
      GROWTH OPPORTUNITIES
    </h3>
    <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
      Expand your business potential through our partnership network.
    </p>
  </div>
</div>

        </div>

        {/* Ready to Take the Next Step Section */}
        <div className="border-t border-gray-800 pt-8 sm:pt-12 lg:pt-16 xl:pt-20">
          <div className="text-left">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 tracking-wider">
              READY TO TAKE THE NEXT STEP
            </h2>
            <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-1 bg-white mb-4 sm:mb-6"></div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed">
              Get in touch right away!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PartnerCollaborationSection;