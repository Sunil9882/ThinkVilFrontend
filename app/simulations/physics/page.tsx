import Image from "next/image";
import Link from "next/link";

const physicsTopics = [
  { title: "Vernier Calipers", image: "/images/vernier.jpg", link: "/vernier-calipers" },
  { title: "Unit and Dimensions", image: "/images/unit-dimensions.jpg", link: "/unit-dimensions" },
  { title: "One Dimension Motion", image: "/images/one-d-motion.jpg", link: "/one-dimension-motion" },
  { title: "Relative Motion", image: "/images/relative-motion.jpg", link: "/relative-motion" },
  { title: "Projectile Motion", image: "/images/projectile-motion.jpg", link: "/projectile-motion" },
  { title: "Rain Person Problem", image: "/images/rain-person.jpg", link: "/rain-person-problem" },
  { title: "Force and Friction", image: "/images/force-friction.jpg", link: "/force-friction" },
  { title: "Incline Plane Motion", image: "/images/incline-plane.jpg", link: "/incline-plane-motion" },
  { title: "Pulley System", image: "/images/pulley-system.jpg", link: "/pulley-system" },
];

export default function Physics() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-sky-700 text-white text-center py-4 text-2xl font-semibold mt-12">
        PHYSICS
      </header>

      {/* Content Grid */}
      <div className="container mx-auto px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {physicsTopics.map((topic, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <Image
                src={topic.image}
                alt={topic.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{topic.title}</h2>

              {/* Explore Button with Dynamic Link */}
              <Link href={`/simulations/physics${topic.link}`}>
                <button className="mt-3 bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-700 transition duration-300">
                  Explore
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
