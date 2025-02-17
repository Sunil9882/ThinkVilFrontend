import React from "react";

const ThinkVisLearn = () => {
  return (
    <header className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 lg:gap-20 mt-8">
      <div className="text-white p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-center rounded-[20px] text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-110 hover:text-black active:scale-105 bg-gradient-to-br from-blue-400 to-green-400 font-bold md:font-normal lg:font-semibold">
        Think
      </div>
      <div className="text-white p-6 md:p-8 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-center rounded-[20px] text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-110 hover:text-black active:scale-105 bg-gradient-to-br from-blue-400 to-green-400 font-bold md:font-normal lg:font-semibold">
        Visualize
      </div>
      <div className="text-white p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-center rounded-[20px] text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-110 hover:text-black active:scale-105 bg-gradient-to-br from-blue-400 to-green-400 font-bold md:font-normal lg:font-semibold">
        Learn
      </div>
    </header>
  );
};

export default ThinkVisLearn;
