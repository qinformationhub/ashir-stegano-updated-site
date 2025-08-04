

export default function WhatHappensNext() {
  const processSteps = [
    {
      title: "DISCOVERY CALL",
      description: "We will schedule a call to discuss your project in detail."
    },
    {
      title: "PROPOSAL",
      description: "We will provide you with a detailed proposal outlining the scope of work."
    },
    {
      title: "KICKOFF",
      description: "Once approved, we will kick off the project."
    },
    {
      title: "DELIVERY",
      description: "We will deliver the project as per the agreed timeline."
    }
  ];



  return (
    <>
   
    
    <div className="bg-black ">
      {/* Main Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:pt-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-wide sm:tracking-wider relative inline-block">
              WHAT HAPPENS NEXT?
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-white"></div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#aaaaaa] leading-relaxed mt-4 sm:mt-6 max-w-full sm:max-w-2xl">
              Here is what you can expect after you reach out to us.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="mb-16 sm:mb-14 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-900/20 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none border sm:border-none border-gray-800 hover:border-green-500/30 sm:hover:border-none transition-all duration-300"
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-start justify-between sm:block mb-3 sm:mb-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#eaeaea] tracking-wide flex-1">
                        {step.title}
                      </h3>
                      <div className="w-6 h-6 sm:hidden bg-white rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                        <span className="text-black text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-[#aaaaaa] leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>

     
    </div>
    </>
  );
}