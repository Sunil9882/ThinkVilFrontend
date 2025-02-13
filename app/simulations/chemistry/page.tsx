import Image from "next/image";

const chemistryTopics = [
  { title: "Organic Chemistry", image: "/images/organic-chemistry.jpg" },
  { title: "Inorganic Chemistry", image: "/images/inorganic-chemistry.jpg" },
  { title: "Physical Chemistry", image: "/images/physical-chemistry.jpg" },
  { title: "Analytical Chemistry", image: "/images/analytical-chemistry.jpg" },
  { title: "Electrochemistry", image: "/images/electrochemistry.jpg" },
  { title: "Chemical Bonding", image: "/images/chemical-bonding.jpg" },
  { title: "Thermodynamics", image: "/images/thermodynamics.jpg" },
  { title: "Periodic Table", image: "/images/periodic-table.jpg" },
  { title: "Reaction Mechanisms", image: "/images/reaction-mechanisms.jpg" },
];

export default function Chemistry() {
  return <SubjectPage title="Chemistry" topics={chemistryTopics} />;
}

interface SubjectPageProps {
  title: string;
  topics: { title: string; image: string }[];
}

function SubjectPage({ title, topics }: SubjectPageProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-sky-600 text-white text-center py-4 text-2xl font-semibold mt-12">
        {title}
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <Image
                src={topic.image}
                alt={topic.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{topic.title}</h2>
              <button className="mt-3 bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-800 transition">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
