import React from 'react';

export default function SteganoxBrands() {
  return (
    <section className="bg-black bg-opacity-50 py-6 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-30">
          
          {/* New York Weekly */}
          <div className="text-[#eaeaea] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="DM Sans text-sm md:text-base tracking-wide">
              <div className="font-normal">NEW YORK</div>
              <div className="font-normal -mt-1">WEEKLY</div>
            </div>
          </div>

          {/* Mindvalley */}
          <div className="text-[#eaeaea] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="DM Sans text-lg md:text-xl font-medium flex items-center">
              <span>Mindvalley</span>
              <span className="ml-1 text-sm">▼</span>
            </div>
          </div>

          {/* Venture Capital Post */}
          <div className="text-[#eaeaea] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="DM Sans text-xs md:text-sm font-medium tracking-wider">
              VENTURE CAPITAL POST
            </div>
          </div>

          {/* Digital Journal */}
          <div className="text-[#eaeaea] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="DM Sans text-sm md:text-base font-medium flex items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white mr-2"></div>
              <span>DIGITAL JOURNAL</span>
            </div>
          </div>

          {/* USA Today */}
          <div className="text-[#eaeaea] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="DM Sans text-sm md:text-base font-medium flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xs md:text-sm">USA</span>
              </div>
              <span>TODAY</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}