import Image from "next/image";
import Link from "next/link";

const chemistryTopics = [
  { title: "Organic Chemistry", image: "/aim1.png", link: "/chemistry/organic-chemistry" },
  { title: "Inorganic Chemistry", image: "/aim1.png", link: "/chemistry/inorganic-chemistry" },
  { title: "Physical Chemistry", image: "/aim1.png", link: "/chemistry/physical-chemistry" },
  { title: "Analytical Chemistry", image: "/aim1.png", link: "/chemistry/analytical-chemistry" },
  { title: "Electrochemistry", image: "/aim1.png", link: "/chemistry/electrochemistry" },
  { title: "Chemical Bonding", image: "/aim1.png", link: "/chemistry/chemical-bonding" },
  { title: "Thermodynamics", image: "/aim1.png", link: "/chemistry/thermodynamics" },
  { title: "Periodic Table", image: "/aim1.png", link: "/chemistry/periodic-table" },
  { title: "Reaction Mechanisms", image: "/aim1.png", link: "/chemistry/reaction-mechanisms" },
];

export default function Chemistry() {
  return <SubjectPage title="Chemistry" topics={chemistryTopics} />;
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
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-sky-600 text-white text-center py-6 text-3xl font-semibold mt-12 rounded-t-2xl">
        {title}
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-green-200 shadow-lg rounded-xl p-6 hover:bg-blue-100 hover:scale-105 transition-all duration-300 flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4 text-center">{topic.title}</h2>
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
