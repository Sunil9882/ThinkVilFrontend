"use client"; // Required for Next.js (App Router)

import React from "react";

const PuzzleSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Heading & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Connect practical knowledge with theoretical knowledge in a virtual way
            </h3>
            <p className="text-gray-600">
              Bridge the gap between theory and practice through interactive virtual experiences.
            </p>
          </div>

          {/* Right Section - Puzzle Blocks */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-1">
              
              {/* Theory Block */}
              <div className="relative">
                <div className="w-32 h-32 bg-blue-500 rounded-2xl flex items-center justify-center transform -rotate-3">
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-blue-500 rounded-r-lg z-10"></div>
                  <span className="text-white text-2xl font-bold uppercase">theory</span>
                </div>
              </div>

              {/* Virtual Block */}
              <div className="relative z-20">
                <div className="w-32 h-32 bg-green-500 rounded-2xl flex items-center justify-center">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-green-500 rounded-l-lg"></div>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-green-500 rounded-r-lg"></div>
                  <span className="text-white text-2xl font-bold uppercase">virtual</span>
                </div>
              </div>

              {/* Practical Block */}
              <div className="relative">
                <div className="w-32 h-32 bg-pink-500 rounded-2xl flex items-center justify-center transform rotate-3">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-pink-500 rounded-l-lg"></div>
                  <span className="text-white text-2xl font-bold uppercase">practical</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PuzzleSection;
