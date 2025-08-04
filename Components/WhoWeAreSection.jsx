"use client"
import Image from 'next/image';
import React from 'react';
import Images from '../public/images/box.png';

const WhoWeAreSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    
      <div className="absolute inset-0 pointer-events-none">
      
        <div className="animate-rotateSlow absolute top-10 left-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#ffffff" opacity="0.15"/>
          </svg>
        </div>
        
        <div className="animate-rotateFast absolute top-32 right-16">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#eaeaea" opacity="0.2"/>
          </svg>
        </div>

        <div className="animate-rotateReverse absolute bottom-20 left-1/4">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#aaaaaa" opacity="0.1"/>
          </svg>
        </div>

        <div className="animate-rotateSlow absolute bottom-40 right-1/3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#ffffff" opacity="0.12"/>
          </svg>
        </div>

        <div className="animate-rotateFast absolute top-1/2 left-3/4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#eaeaea" opacity="0.18"/>
          </svg>
        </div>

     
        <div className="animate-rotateReverse absolute top-16 left-1/3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#ffffff" opacity="0.13"/>
          </svg>
        </div>

        <div className="animate-rotateSlow absolute top-1/3 right-10">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#eaeaea" opacity="0.16"/>
          </svg>
        </div>

        <div className="animate-rotateFast absolute bottom-1/3 left-20">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#aaaaaa" opacity="0.14"/>
          </svg>
        </div>

        <div className="animate-rotateReverse absolute bottom-10 right-1/4">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#ffffff" opacity="0.17"/>
          </svg>
        </div>

        <div className="animate-rotateFast absolute top-2/3 left-1/2">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.69L12 19.27L6.82 22.69L8 14.74L2 9L9.91 8.26L12 2Z" fill="#eaeaea" opacity="0.19"/>
          </svg>
        </div>

       
        <div className="animate-floatUp absolute top-16 right-10 w-2 h-2 rounded-full" style={{backgroundColor: '#ffffff', opacity: 0.1}}></div>
        <div className="animate-floatDown absolute bottom-16 left-16 w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#eaeaea', opacity: 0.15}}></div>
        <div className="animate-floatSide absolute top-1/3 right-1/4 w-1 h-1 rounded-full" style={{backgroundColor: '#aaaaaa', opacity: 0.2}}></div>

    
        <div className="animate-rotateLine absolute top-20 right-1/3">
          <div className="w-8 h-0.5 bg-white opacity-10 transform rotate-45"></div>
        </div>
        
        <div className="animate-rotateLineReverse absolute bottom-32 left-1/3">
          <div className="w-6 h-0.5 bg-white opacity-8 transform rotate-12"></div>
        </div>

       
        <div className="animate-pulse1 absolute top-1/4 left-1/2 w-1 h-1 rounded-full" style={{backgroundColor: '#ffffff', opacity: 0.2}}></div>
        <div className="animate-pulse2 absolute bottom-1/4 right-1/2 w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#eaeaea', opacity: 0.15}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
       
        <div className="mb-12 text-left">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-1" style={{ color: '#ffffff' }}>
            WHO WE ARE
          </h2>
          <div className="w-10 xs:w-12 sm:w-16 h-1" style={{backgroundColor: '#ffffff'}}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="border rounded-lg overflow-hidden" style={{borderColor: '#eaeaea'}}>
            <Image
              src={Images}
              alt="About Us Image"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6 pt-4">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#aaaaaa' }}>
              At <span className="font-semibold" style={{ color: '#ffffff' }}>Steganox</span>, we turn complexity into clarity.
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#aaaaaa' }}>
              Our name is inspired by <span className="font-semibold" style={{ color: '#ffffff' }}>Steganographers</span> — experts in precision, encryption, and hidden meaning.
              We carry that spirit into the software world, building intelligent, secure, and elegantly engineered solutions that reveal true value from beneath the surface.
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#aaaaaa' }}>
              Whether it's crafting robust enterprise platforms, harnessing AI for deeper insights, or designing user experiences that intuitively guide,
              we exist to help businesses uncover opportunities hidden within their data and ideas.
            </p>
          </div>
        </div>
      </div>

      {/* Background Animation Styles */}
      <style jsx>{`
        @keyframes rotateSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateFast {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes rotateLine {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateLineReverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.3;
          }
        }

        @keyframes floatDown {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.15;
          }
          50% {
            transform: translateY(25px);
            opacity: 0.35;
          }
        }

        @keyframes floatSide {
          0%, 100% {
            transform: translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateX(20px);
            opacity: 0.4;
          }
        }

        @keyframes pulse1 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
        }

        @keyframes pulse2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.35;
          }
        }

        /* Animation Classes */
        .animate-rotateSlow {
          animation: rotateSlow 20s linear infinite;
        }

        .animate-rotateFast {
          animation: rotateFast 12s linear infinite;
        }

        .animate-rotateReverse {
          animation: rotateReverse 25s linear infinite;
        }

        .animate-rotateLine {
          animation: rotateLine 15s linear infinite;
        }

        .animate-rotateLineReverse {
          animation: rotateLineReverse 18s linear infinite;
        }

        .animate-floatUp {
          animation: floatUp 8s ease-in-out infinite;
        }

        .animate-floatDown {
          animation: floatDown 10s ease-in-out infinite;
        }

        .animate-floatSide {
          animation: floatSide 12s ease-in-out infinite;
        }

        .animate-pulse1 {
          animation: pulse1 6s ease-in-out infinite;
        }

        .animate-pulse2 {
          animation: pulse2 8s ease-in-out infinite;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WhoWeAreSection;