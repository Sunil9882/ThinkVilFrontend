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
      window.location.href = '/simulations/physics/Vernier_Calipers/Vernier_simulation/Vernier_Sim.html'; // Corrected path to Vernier_Sim.html
    }, 3000); // Delay of 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-300 flex flex-col items-center rounded-2xl">
      {/* Header */}
      <div className="w-full bg-blue-400 text-black text-center py-6 text-2xl font-semibold mt-12 rounded-xl">
        Vernier Calipers Simulation
      </div>

      {/* Title */}
      <h2 className="w-full text-center md:text-2xl font-bold mt-2 mb-6 text-xl rounded-xl">
        How to use Vernier Calipers - Interactive Simulation
      </h2>

      {/* Video Section */}
      <div className="w-full max-w-3xl flex justify-center mb-4">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/OGoetWCRVyM" 
          title="Vernier Calipers Tutorial"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button Section */}
      <div className="flex space-x-4 mt-2 py-2"> {/* Flexbox container for buttons */}
        <button
          onClick={startSimulation} // Add the onClick handler
          className="bg-sky-500 text-white text-lg px-10 py-6 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-90"
        >
          Start Simulation
        </button>
        <button
          onClick={startSimulation} // Add the onClick handler
          className="bg-sky-500 text-white text-lg px-6 py-3 rounded-xl shadow-md hover:bg-green-500 active:bg-green-800 transition duration-300 hover:scale-90"
        >
          ThinkVil Questions
        </button>
      </div>

      {/* Loading Page */}
      {loading && (
        <div
          id="loadingPage"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl"
          style={{ display: loading ? "flex" : "none" }}
        >
          ThinkVil Simulation is loading...
        </div>
      )}
    </div>
  );
};

export default VernierCalipers;
