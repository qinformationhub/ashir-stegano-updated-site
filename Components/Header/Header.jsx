

"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../public/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';

export default function SteganoxHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="Company Logo" width={170} height={80} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:space-x-24 md:space-x-10">
            <Link href="/services" 
              className="text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-90 hover:opacity-100"
            >
              Services
            </Link>
            <Link href="/portfolio" 
              className="text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-90 hover:opacity-100"
            >
              Portfolio
            </Link>
            <Link href="/unique-offerings" 
              className="text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-90 hover:opacity-100"
            >
              Unique Offerings
            </Link>
            <Link href="/contact" 
              className="text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-90 hover:opacity-100"
            >
              Contact us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 cursor-pointer">
                <span>Let's Talk</span>
                <span className="text-lg">→</span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#aaaaaa] hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black z-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              <Link href="/services" 
                className="block px-3 py-2 text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-70 hover:opacity-100"
              >
                Services
              </Link>
              <Link href="/portfolio" 
                className="block px-3 py-2 text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-70 hover:opacity-100"
              >
                Portfolio
              </Link>
              <Link href="/unique-offerings" 
                className="block px-3 py-2 text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-70 hover:opacity-100"
              >
                Unique Offerings
              </Link>
              <Link href="/contact" 
                className="block px-3 py-2 text-[#aaaaaa] hover:text-white transition-all duration-300 font-medium opacity-70 hover:opacity-100"
              >
                Contact us
              </Link>
              <div className="px-3 py-2">
                <Link href="/contact">
                  <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 w-auto mx-auto">
                    <span>Let's Talk</span>
                    <span className="text-lg">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
