


import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="relative w-full sm:pt-20 bg-black lg:pt-14 overflow-hidden flex items-center justify-center">
      
      {/* Single Spline component for all screens */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Spline
          scene="https://prod.spline.design/6PX0a5MgueH9jFq8/scene.splinecode" 
          className="w-full h-full object-cover"
        />
        
        {/* Responsive overlay to hide bottom part */}
        <div className="
          bg-black 
          absolute 
          left-0 
          right-0 
          z-10
          /* Mobile */
          h-20 
          top-[calc(100%-5rem)]
          /* Tablet */
          sm:h-24 
          sm:top-[calc(100%-6rem)]
          /* Medium */
          md:h-26
          md:top-[calc(100%-6.5rem)]
          /* Desktop - Slightly increased */
          lg:h-32 
          lg:top-[calc(100%-8rem)]
        "></div>
      </div>

      {/* Content Box with responsive design */}
      <div className="relative z-20 w-full px-2 sm:px-4 md:px-6 lg:px-8" style={{ maxWidth: '77rem' }}>
        <div className="
          border-0 sm:border-0 md:border-[2px] md:border-white/40 
          rounded-none sm:rounded-none md:rounded-3xl 
          p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 
          flex flex-col items-center justify-center text-center 
          /* Better responsive heights */
          h-[60vh] min-[400px]:h-[55vh] sm:h-[50vh] md:h-[45vh] lg:min-h-[580px] xl:min-h-[600px]
        ">
          <h1 className="
            text-white 
            text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            font-light 
            mb-4 
            leading-tight 
            tracking-wide
            leading-[1.2] sm:leading-tight
          ">
            We Develop Software<br />
            <span className="text-gray-300">Solutions For Businesses</span>
          </h1>
          
          <button className="
            group 
            bg-white/90 hover:bg-white 
            text-black 
            px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 
            rounded-full 
            font-medium 
            text-xs sm:text-sm 
            transition-all duration-300 
            hover:scale-105 hover:shadow-xl hover:shadow-white/20 
            flex items-center gap-2 
            mt-4 sm:mt-6
          ">
            Get a Quote
            <svg
              className="
                w-3 h-3 sm:w-4 sm:h-4 
                transition-transform duration-300 group-hover:translate-x-1
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}