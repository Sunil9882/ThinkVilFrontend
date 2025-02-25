import Image from "next/image";
import Link from "next/link";

const mathsTopics = [
  { title: "Quadratic Equation", image: "/All_Images/Simulation_Images/Mathematics/Quadratic_Equation.png", link: "/simulations/mathematics/Quadratic_Equation" },

  // { title: "Trigonometric", image: "/All_Images/Simulation_Images/Mathematics/Quadratic_Equation.png", link: "/simulations/mathematics/Quadratic_Equation" },

  // { title: "Quadratic Equation", image: "/All_Images/Simulation_Images/Mathematics/Quadratic_Equation.png", link: "/simulations/mathematics/Quadratic_Equation" },

  // { title: "Quadratic Equation", image: "/All_Images/Simulation_Images/Mathematics/Quadratic_Equation.png", link: "/simulations/mathematics/Quadratic_Equation" },
  
];

export default function Maths() {
  return <SubjectPage title="Mathematics" topics={mathsTopics} />;
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

function SubjectPage({ title, topics }: SubjectPageProps) {
  return (
    <div className="bg-gray-100 min-h-screen rounded-2xl">
      <header className="bg-teal-600 text-white text-center py-4 text-3xl font-semibold mt-12 rounded-2xl">
        {title}
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-2xl">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-green-300 shadow-lg rounded-3xl p-6 hover:bg-green-400 hover:scale-98 transition-all duration-300 flex flex-col items-center"
            >
              <div className="flex justify-center mb-auto">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={300}
                  height={200}
                  className="rounded-3xl"
                />
              </div>
              <h2 className="text-xl font-semibold mt-auto text-center">{topic.title}</h2>
              <Link href={topic.link}>
                <button className="mt-auto bg-sky-700 text-white px-4 py-2 rounded-xl hover:bg-sky-500 transition duration-300 block mx-auto hover:text-black font-bold">
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
