

import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="relative w-full sm:pt-20  bg-black lg:pt-14  overflow-hidden bg-blac flex items-center justify-center">
   




{/* <!-- Mobile (default) --> */}
<div className="absolute inset-0 z-0  pointer-events-none overflow-hidden sm:hidden">



 

      <Spline
        scene="https://prod.spline.design/6PX0a5MgueH9jFq8/scene.splinecode" 
      />

<div className='bg-black w-[2200px] h-20 absolute left-50 inset-0 z-0  top-150'></div>
</div>


{/* <!-- Medium screens (md) --> */}
<div className="absolute  h-screen inset-0 z-0 pointer-events-none ipad overflow-hidden hidden sm:block lg:hidden">
  <Spline 
    scene="https://prod.spline.design/6PX0a5MgueH9jFq8/scene.splinecode"
  
  />
<div className='bg-black w-[2200px] h-100 absolute left-50 inset-0 z-0  top-100'></div>

</div>

{/* <!-- Large screens (lg) --> */}
<div className="absolute inset-0 z-0 pointer-events-none  overflow-hidden hidden mt-18 lg:block">
     <Spline
        scene="https://prod.spline.design/6PX0a5MgueH9jFq8/scene.splinecode" 
      /><div className='bg-black w-[2200px] h-100 absolute left-50 inset-0 z-0  top-150'></div>
</div>



      {/* Content Box with responsive design */}
      <div className="relative z-10 w-full px-2 sm:px-4 md:px-6 lg:px-8 ipad " style={{ maxWidth: '77rem' }}>
        <div className="
        
          border-0 sm:border-0 md:border-[2px] md:border-white/40 
          rounded-none sm:rounded-none md:rounded-3xl 
          
        
          p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 
          
          flex flex-col items-center justify-center text-center 
          
        
          h-[60vh] min-[400px]:h-[55vh] md:h-[25vh] lg:min-h-[550px]  ipad
        ">
          <h1 className="
            text-white 
            /* Responsive text sizes */
            text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            font-light 
            mb-4 
            leading-tight 
            tracking-wide
            /* Responsive line height */
            leading-[1.2] sm:leading-tight
           
          ">
            We Develop Software<br />
            <span className="text-gray-300">Solutions For Businesses</span>
          </h1>
          
          <button className="
            group 
            bg-white/90 hover:bg-white 
            text-black 
            /* Responsive button padding */
            px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 
            rounded-full 
            font-medium 
            /* Responsive text size */
            text-xs sm:text-sm 
            transition-all duration-300 
            hover:scale-105 hover:shadow-xl hover:shadow-white/20 
            flex items-center gap-2 
            mt-4 sm:mt-6
          ">
            Get a Quote
            <svg
              className="
                /* Responsive icon size */
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