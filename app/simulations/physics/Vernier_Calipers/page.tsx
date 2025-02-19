"use client"; // Mark this as a client component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use useRouter from next/navigation

const VernierCalipers = () => {
  const [loading, setLoading] = useState(false); // To manage loading state
  const router = useRouter(); // Initialize the router

  // Function to handle button click
  const startSimulation = () => {
    setLoading(true); // Show loading screen

    setTimeout(() => {
      // Redirect to the HTML file placed in the 'public' folder
      window.location.href = "/Vernier_simulation/Vernier_Sim.html"; // Corrected path to Vernier_Sim.html
    }, 10); // Delay for 10 milliseconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-300 flex flex-col items-center rounded-2xl px-4">
      {/* Header */}
      <div className="w-full bg-blue-400 text-black text-center py-6 text-2xl font-semibold mt-12 rounded-xl">
        Vernier Calipers Simulation
      </div>

      {/* Title */}
      <h2 className="w-full text-center md:text-2xl font-bold mt-2 mb-6 text-xl rounded-xl">
        How to use Vernier Calipers - Interactive Simulation
      </h2>

      {/* Video Section */}
      <div className="w-full max-w-3xl flex justify-center mb-6">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/OGoetWCRVyM"
          title="Vernier Calipers Tutorial"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button Section - Responsive */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-2 py-2">
        <button
          onClick={startSimulation}
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-95"
        >
          Start Simulation
        </button>
        <button
          onClick={startSimulation}
          className="bg-sky-500 text-white text-lg px-10 py-4 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-95"
        >
          ThinkVil Questions
        </button>
      </div>

      {/* Loading Page */}
      {loading && (
        <div
          id="loadingPage"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl"
        >
          ThinkVil Simulation is loading...
        </div>
      )}
    </div>
  );
};

export default VernierCalipers;
