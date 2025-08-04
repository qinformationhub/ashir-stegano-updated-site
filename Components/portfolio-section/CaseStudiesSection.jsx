"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import invastarr from "../../public/images/invastarr_1.webp"
import Image from 'next/image';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "INVESTARR",
      description: "The Investarr platform connects innovative idea creators with potential investors. It helps people showcase their ideas to the world and offers investors the opportunity to explore and invest. By facilitating these connections, Investarr aims to foster innovation and drive investment growth worldwide.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Figma", "React JS", "Django", "Fintech", "MySQL"],
      link: "/portfolio/investarr",
      buttonText: "View in Detail",
      imageLeft: true
    },
    {
      id: 2,
      title: "FIND SURROGATE",
      description: "Find Surrogate is a dedicated platform connecting individuals seeking surrogacy with potential surrogate mothers. The service simplifies the process of finding and connecting with a surrogate, providing support and guidance throughout the journey. Whether you're looking to build your family or offer the gift of parenthood, Find Surrogate helps you.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2331&q=80",
      tags: ["Figma", "Next JS", "TypeScript", "Laravel", "MySQL", "Fintech"],
      link: "/portfolio/find-surrogate",
      buttonText: "View in Detail",
      imageLeft: false
    },
    {
      id: 3,
      title: "ECOMMERCE STORE",
      description: "A modern e-commerce platform built with cutting-edge technology to provide seamless shopping experience. Features include product catalog, shopping cart, secure payment processing, order management, and customer analytics. The platform supports multiple vendors and provides comprehensive admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      link: "/portfolio/que-moncho",
      buttonText: "View in Detail",
      imageLeft: true
    },
    {
      id: 4,
      title: "HEALTHCARE APP",
      description: "Revolutionary healthcare management system connecting patients with healthcare providers. Features include appointment scheduling, telemedicine consultations, medical records management, prescription tracking, and health monitoring. Built with privacy and security as top priorities.",
      image: invastarr,
      tags: ["Flutter", "Firebase", "Python", "Healthcare", "AI"],
      link: "/portfolio/explore-dominica",
      buttonText: "View in Detail",
      imageLeft: false
    }
  ];

  const handleCardClick = (link) => {
    window.open(link, '_self');
  };

  return (
    <div className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h1 className="text-[#ffffff] text-4xl md:text-4xl font-bold mb-6 tracking-wider uppercase relative">
            CASE STUDIES
            <div className="absolute -bottom-2 left-0 h-1 bg-white" style={{ width: '14%' }}></div>
          </h1>
          <p className="text-[#eaeaea] text-lg mb-2 max-w-4xl leading-relaxed">
            Explore our featured projects and learn how we've helped clients achieve their goals through innovative solutions.
          </p>
          <p className="text-[#aaaaaa] text-sm">
            NDA-protected projects are not listed here. Please contact us for more references.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study) => (
            <div key={study.id} className={`grid grid-cols-12 gap-8 lg:gap-12 items-stretch ${study.imageLeft ? '' : 'lg:flex-row-reverse'}`}>

              {/* Image Section - 6 Columns */}
              <div 
                className={`col-span-12 lg:col-span-6 cursor-pointer group ${study.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                onClick={() => handleCardClick(study.link)}
              >
                <div className="relative overflow-hidden rounded-2xl h-96 lg:h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                  <Image width={800} height={500}
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section - 6 Columns */}
              <div 
                className={`col-span-12 lg:col-span-6 flex flex-col justify-center cursor-pointer ${study.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
                onClick={() => handleCardClick(study.link)}
              >
                <div className="p-8 lg:p-10 h-96 lg:h-[500px] flex flex-col justify-center relative">

                  {/* Logo/Icon */}
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-white to-black rounded-lg p-3 mr-4 mt-5 lg:mt-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h2 className="text-[#ffffff] text-2xl lg:text-3xl font-bold tracking-wide">
                      {study.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-[#aaaaaa] text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-black/50 text-[#eaeaea] text-sm rounded-full border border-gray-600 hover:border-gray-500 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="self-start bg-gradient-to-r bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {study.buttonText}
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
