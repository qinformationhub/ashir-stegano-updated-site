import React from 'react';

const PartnerServicesSection = () => {
  const industries = [
    'Fintech & Banking',
    'Healthcare & MedTech',
    'Retail & eCommerce',
    'Manufacturing & Logistics',
    'Education & eLearning',
    'Travel & Hospitality',
    'Enterprise & SaaS Provider'
  ];

  return (
    <div className="bg-black min-h-screen text-[#aaaaaa] w-full overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-wider">
            INDUSTRIES WE SERVE
          </h2>
          <div className="w-20 h-1 bg-white mb-6"></div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="space-y-10">
              {industries
                .filter((_, i) => i % 2 === colIndex)
                .map((title, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-500 hover:border-b-2 hover:border-white pb-4 hover:transform hover:translate-y-[-2px] hover:shadow-2xl rounded-lg p-2 hover:bg-gray-900/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-white to-black rounded-full flex items-center justify-center mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#eaeaea] text-xl font-bold mb-2 tracking-wide group-hover:text-white transition-colors duration-300 leading-tight">
                          {title}
                        </h3>
                        <p className="text-[#aaaaaa] text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          Industry-specific expertise tailored to your unique domain.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Green divider */}
        <div className="relative w-full">
          <div className="w-full h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-8 w-24 h-24 border border-green-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-8 w-20 h-20 border border-green-500/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.1 }} />
                <stop offset="50%" style={{ stopColor: "#059669", stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: "#047857", stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="90%" y2="30%" stroke="url(#connectionGradient)" strokeWidth="0.5" />
            <line x1="20%" y1="80%" x2="80%" y2="70%" stroke="url(#connectionGradient)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PartnerServicesSection;
