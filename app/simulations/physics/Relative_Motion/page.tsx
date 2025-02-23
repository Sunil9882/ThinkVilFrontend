"use client"; // Mark this as a client component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use useRouter from next/navigation

const RelativeMotion = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const router = useRouter();

  // Function to handle button click
  const startSimulation = (message: string, url: string) => {
    setLoading(true);
    setLoadingMessage(message);

    setTimeout(() => {
      router.push(url); // Use Next.js router for navigation
    }, 1000); // Show loading for 1 second before redirection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-300 flex flex-col items-center rounded-2xl px-4">
      {/* Header */}
      <div className="w-full bg-blue-400 text-black text-center py-6 text-2xl font-semibold mt-12 rounded-xl">
        Relative Motion Simulation
      </div>

      {/* Title */}
      <h2 className="w-full text-center md:text-2xl font-bold mt-2 mb-6 text-xl rounded-xl">
        How to Use Relative Motion - Interactive Simulation
      </h2>

      {/* Video Section */}
      <div className="w-full max-w-3xl flex justify-center mb-6">
        <iframe
          className="w-full aspect-video rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/OGoetWCRVyM"
          title="Relative Motion Tutorial"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-2 py-2">
        <button
          onClick={() =>
            startSimulation(
              "ThinkViL Simulation is loading...",
              "/All_Simulations/PhysicsSimulations/Relative_Motion/Relative_Motion_Sim/index.html"
            )
          }
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-95"
        >
          Start Simulation
        </button>
        <button
          onClick={() =>
            startSimulation(
              "ThinkViL Questions is loading...", 
              "/All_Simulations/PhysicsSimulations/Relative_Motion/Relative_Motion_Qns/index.html"
            )
          }
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-95"
        >
          ThinkViL Questions
        </button>
      </div>

      {/* ThinkViL Loading Page */}
      {loading && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
          {/* ThinkVil Logo */}
          <h1 className="text-4xl font-bold text-black">ThinkViL</h1>
          <p className="text-lg text-gray-600">{loadingMessage}</p>

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

export default RelativeMotion;
