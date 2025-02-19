import Link from "next/link";

export default function ExploreSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 to-green-100 text-center rounded-xl"
      style={{
        // backgroundImage: 'url("/exp.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Explore Our Simulations
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Dive into interactive simulations that bring <br />
        complex concepts to life in an engaging and fun way.
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Physics */}
        <Link href="/simulations/physics">
          <div className="group block p-6 bg-pink-200 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-sky-600 group-hover:underline">
              Physics
            </h3>
            <p className="text-gray-600 mt-2">
              Explore the laws of motion, electricity, and more.
            </p>
          </div>
        </Link>

        {/* Maths */}
        <Link href="/simulations/mathematics">
          <div className="group block p-6 bg-teal-200 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-green-600 group-hover:underline">
              Mathematics
            </h3>
            <p className="text-gray-600 mt-2">
              Master calculus, algebra, and geometry interactively.
            </p>
          </div>
        </Link>

        {/* Chemistry */}
        <Link href="/simulations/chemistry">
          <div className="group block p-6 bg-purple-200 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-red-600 group-hover:underline">
              Chemistry
            </h3>
            <p className="text-gray-600 mt-2">
              Experiment with chemical reactions and molecules.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
