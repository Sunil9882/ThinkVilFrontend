"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const QuadraticEquation = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const router = useRouter();

  // Function to handle button click
  const startSimulation = (message: string, url: string) => {
    setLoading(true);
    setLoadingMessage(message);

    setTimeout(() => {
      router.push(url); // Correct Next.js routing
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-300 flex flex-col items-center rounded-2xl px-4">
      {/* Header */}
      <div className="w-full bg-blue-400 text-black text-center py-6 text-2xl font-semibold mt-12 rounded-xl">
        Quadratic Equation Simulation
      </div>

      {/* Title */}
      <h2 className="w-full text-center md:text-2xl font-bold mt-2 mb-6 text-xl rounded-xl">
        How to use Quadratic Equation - Interactive Simulation
      </h2>

      {/* Video Section */}
      <div className="w-full max-w-3xl flex justify-center mb-6">
        <iframe
          className="w-full aspect-video rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/OGoetWCRVyM"
          title="Quadratic Equation Tutorial"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-2 py-2">
        <button
          onClick={() =>
            startSimulation(
              "ThinkVil Simulation is loading...",
              "/Simulations/MathematicsSimulations/Quadratic_Equation/Quadratic_Equation_Sim.html"
            )
          }
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-95"
        >
          Start Simulation
        </button>
        <button
          onClick={() =>
            startSimulation(
              "ThinkVil Questions is loading...",
              "/Simulations/MathematicsSimulations/Quadratic_Equation_Qns/Quadratic_Equation_Qns.html"
            )
          }
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-95"
        >
          ThinkVil Questions
        </button>
      </div>

      {/* ThinkViL Loading Page */}
      {loading && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-black">ThinkViL</h1>
          <p className="text-lg text-gray-600">Think Visualize Learn</p>

          {/* Progress Bar */}
          <div className="w-56 h-2 bg-gray-300 mt-4 rounded-full overflow-hidden">
            <div className="h-full bg-black animate-progress"></div>
          </div>
        </div>
      )}

      {/* Tailwind CSS Animation for Progress Bar */}
      <style>
        {`
          @keyframes progressAnimation {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progress {
            animation: progressAnimation 2.5s linear forwards;
          }
        `}
      </style>
    </div>
  );
};

export default QuadraticEquation;
