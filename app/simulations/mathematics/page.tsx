import Image from "next/image";

const mathsTopics = [
  { title: "Algebra", image: "/images/algebra.jpg" },
  { title: "Trigonometry", image: "/images/trigonometry.jpg" },
  { title: "Calculus", image: "/images/calculus.jpg" },
  { title: "Statistics", image: "/images/statistics.jpg" },
  { title: "Probability", image: "/images/probability.jpg" },
  { title: "Linear Algebra", image: "/images/linear-algebra.jpg" },
  { title: "Differential Equations", image: "/images/differential-equations.jpg" },
  { title: "Complex Numbers", image: "/images/complex-numbers.jpg" },
  { title: "Geometry", image: "/images/geometry.jpg" },
];

export default function Maths() {
  return <SubjectPage title="Maths" topics={mathsTopics} />;
}

interface Topic {
  title: string;
  image: string;
}

interface SubjectPageProps {
  title: string;
  topics: Topic[];
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
