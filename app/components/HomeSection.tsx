import Link from "next/link";

export default function HomeSection() {
  return (
    <section 
      className="relative text-center py-10 px-6 pt-10 w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[30vh] lg:min-h-[30vh] xl:min-h-[60vh] rounded-xl overflow-hidden"
      style={{
        backgroundImage: 'url("/think1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}    
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
          Welcome to <span className="text-sky-300">ThinkVil</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 px-2">
          Unlock the world of interactive learning with our <br className="hidden sm:block" />
          simulations in <span className="text-yellow-300 font-semibold">Physics</span>,
          <span className="text-green-300 font-semibold"> Maths</span>, and
          <span className="text-red-300 font-semibold"> Chemistry</span>.
        </p>
        
        {/* Call-to-Action Button */}
        <Link href="/components/ExploreSection">
          <span className="inline-block px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold bg-sky-500 text-white rounded-full hover:bg-sky-600 transition cursor-pointer">
            Explore Simulations
          </span>
        </Link>
      </div>
    </section>
  );
}