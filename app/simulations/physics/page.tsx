import Image from "next/image";
import Link from "next/link";

// Define topics for Physics simulations
const physicsTopics = [
  { title: "One Dimension Motion", image: "/aim1.png", link: "/simulations/physics/One_Dimension_Motion" },
  { title: "Projectile Motion", image: "/aim1.png", link: "/simulations/physics/Projectile_Motion" },
  { title: "Relative Motion", image: "/aim1.png", link: "/simulations/physics/Relative_Motion" },
  { title: "Rain Person Problem", image: "/aim1.png", link: "/simulations/physics/Rain_Person_Problem" },
  { title: "Mass Block Motion", image: "/aim1.png", link: "/simulations/physics/Mass_Block_Motion" },
  { title: "Incline Plane Motion", image: "/aim1.png", link: "/simulations/physics/Incline_Plane_Motion" },
  { title: "Pulley System", image: "/aim1.png", link: "/simulations/physics/Pulley_System" },
  { title: "Vernier Calipers", image: "/aim1.png", link: "/simulations/physics/Vernier_Calipers" },
];

// Main Physics Component
export default function Physics() {
  return <SubjectPage title="Physics" topics={physicsTopics} />;
}

interface Topic {
  title: string;
  image: string;
  link: string;
}

interface SubjectPageProps {
  title: string;
  topics: Topic[];
}

// Subject Page layout component for displaying the physics topics
function SubjectPage({ title, topics }: SubjectPageProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-sky-600 text-white text-center py-6 text-3xl font-semibold mt-12 rounded-t-2xl">
        {title}
      </header>

      {/* Topics Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-green-200 shadow-lg rounded-xl p-6 hover:bg-blue-100 hover:scale-105 transition-all duration-300 flex flex-col items-center"
            >
              {/* Image Section */}
              <div className="flex justify-center mb-4">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mt-4 text-center">{topic.title}</h2>

              {/* Explore Button */}
              <Link href={topic.link}>
                <button className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition duration-300 block mx-auto">
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
