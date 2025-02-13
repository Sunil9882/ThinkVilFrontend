import Link from "next/link";

export default function HomeSection() {
  return (
    <section
      className="relative text-center py-20 px-6"
      style={{
        backgroundImage: 'url("/explore.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        //  height: "400px", 
        // width: "100%",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Welcome to <span className="text-sky-300">ThinkVil</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Unlock the world of interactive learning with our <br />
          simulations in <span className="text-yellow-300 font-semibold">Physics</span>,
          <span className="text-green-300 font-semibold"> Maths</span>, and
          <span className="text-red-300 font-semibold"> Chemistry</span>.
        </p>
        
        {/* Call-to-Action Button */}
        <Link href="#explore">
          <span className="inline-block px-6 py-3 text-lg font-semibold bg-sky-500 text-white rounded-full hover:bg-sky-600 transition">
            Explore Now
          </span>
        </Link>
      </div>
    </section>
  );
}
