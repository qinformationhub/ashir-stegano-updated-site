"use client";
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The innovative strategies provided by Innovaxel helped us achieve our goals efficiently. Highly recommend their services!",
      author: "CEO, Investarr Capital",
      name: "Richard",
    },
    {
      text: "Innovaxel transformed our business operations with their cutting-edge solutions. Their team is incredibly professional and responsive.",
      author: "Director, Que Moncho?",
      name: "Yeinier",
    },
    {
      text: "The innovative strategies provided by Innovaxel helped us achieve our goals efficiently. Highly recommend their services!",
      author: "CEO, Investarr Capital",
      name: "Richard",
    },
    {
      text: "Innovaxel transformed our business operations with their cutting-edge solutions. Their team is incredibly professional and responsive.",
      author: "Director, Que Moncho?",
      name: "Yeinier",
    },
    {
      text: "The innovative strategies provided by Innovaxel helped us achieve our goals efficiently. Highly recommend their services!",
      author: "CEO, Investarr Capital",
      name: "Richard",
    },
    {
      text: "Innovaxel transformed our business operations with their cutting-edge solutions. Their team is incredibly professional and responsive.",
      author: "Director, Que Moncho?",
      name: "Yeinier",
    },
  ];

  return (
    <div className="bg-black text-white px-2 sm:py-8 md:py-12 lg:py-16 sm:px-4 md:px-6 lg:px-8 overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          {/* Content can go here if needed */}
        </div>

        {/* Testimonials Section */}
        <div className="mb-6 sm:mb-8 md:mb-10 px-2">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold  sm:mb-3 md:mb-1 break-words" style={{ color: '#ffffff' }}>
            TESTIMONIALS
          </h2>
          <div className="w-10 xs:w-12 sm:w-16 h-1 bg-white mb-3 sm:mb-4 md:mb-6"></div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#eaeaea' }}>
            Here's what our clients have to say about us.
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative w-full">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-72 xs:w-80 sm:w-84 md:w-88 lg:w-96 mx-2 sm:mx-3 md:mx-4 p-3 xs:p-4 sm:p-5 md:p-6 bg-transparent border border-white rounded-lg"
                >
                  <p className="mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base" style={{ color: '#aaaaaa' }}>
                    {testimonial.text}
                  </p>
                  <div className="text-xs xs:text-sm">
                    <div className="font-semibold mb-1" style={{ color: '#ffffff' }}>{testimonial.author}</div>
                    <div style={{ color: '#aaaaaa' }}>{testimonial.name}</div>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-72 xs:w-80 sm:w-84 md:w-88 lg:w-96 mx-2 sm:mx-3 md:mx-4 p-3 xs:p-4 sm:p-5 md:p-6 bg-transparent border border-white rounded-lg"
                >
                  <p className="mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base" style={{ color: '#aaaaaa' }}>
                    {testimonial.text}
                  </p>
                  <div className="text-xs xs:text-sm">
                    <div className="font-semibold mb-1" style={{ color: '#ffffff' }}>{testimonial.author}</div>
                    <div style={{ color: '#aaaaaa' }}>{testimonial.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Mobile responsive breakpoints */
        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }

        /* Extra small screens */
        @media (max-width: 375px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
