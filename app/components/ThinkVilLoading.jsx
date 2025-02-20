import React from "react";

const ThinkVilLoading = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-black">
      {/* ThinkVil Logo */}
      <h1 className="text-4xl font-bold mb-2">ThinkViL</h1>
      <p className="text-lg text-gray-600">Think Visualize Learn</p>

      {/* Loading Bar */}
      <div className="w-56 h-2 bg-gray-300 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-black animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default ThinkVilLoading;
