"use client"; // Required for Next.js (App Router)

import React from "react";

const PuzzleSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Section - Heading & Description */}
          <div className="text-center md:text-left px-4">
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              Connect practical knowledge with theoretical knowledge in a virtual way
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Bridge the gap between theory and practice through interactive virtual experiences.
            </p>
          </div>

          {/* Right Section - Puzzle Blocks */}
          <div className="flex flex-col md:flex-row items-center md:justify-center md:space-y-0 md:space-x-[2px] space-y-[2px]">
            
            {/* Theory Block */}
            <div className="relative">
              <div className="w-24 h-24 md:w-36 md:h-36 bg-blue-500 rounded-2xl flex items-center justify-center transform rotate-90 md:rotate-0">
                <div className="absolute -right-3 md:-right-4 top-1/2 transform -translate-y-1/2 w-6 h-12 md:w-8 md:h-16 bg-blue-500 rounded-r-lg"></div>
                <span className="text-white text-sm md:text-2xl font-bold uppercase">theory</span>
              </div>
            </div>

            {/* Virtual Block */}
            <div className="relative z-20">
              <div className="w-24 h-24 md:w-36 md:h-36 bg-green-500 rounded-2xl flex items-center justify-center transform rotate-90 md:rotate-0">
                <div className="absolute -left-3 md:-left-4 top-1/2 transform -translate-y-1/2 w-6 h-12 md:w-8 md:h-16 bg-green-500 rounded-l-lg"></div>
                <div className="absolute -right-3 md:-right-4 top-1/2 transform -translate-y-1/2 w-6 h-12 md:w-8 md:h-16 bg-green-500 rounded-r-lg"></div>
                <span className="text-white text-sm md:text-2xl font-bold uppercase">virtual</span>
              </div>
            </div>

            {/* Practical Block */}
            <div className="relative">
              <div className="w-24 h-24 md:w-36 md:h-36 bg-pink-500 rounded-2xl flex items-center justify-center transform rotate-90 md:rotate-0">
                <div className="absolute -left-3 md:-left-4 top-1/2 transform -translate-y-1/2 w-6 h-12 md:w-8 md:h-16 bg-pink-500 rounded-l-lg"></div>
                <span className="text-white text-sm md:text-2xl font-bold uppercase">practical</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PuzzleSection;