import Image from "next/image";

const ProvideSection = () => {
  const features = [
    {
      title: "Use free simulations and Engage with Science",
      image: "/All_Images/ProvideSection/aim1.png",
    },
    {
      title: "Connect Practical knowledge with Theoretical in a Virtual Way",
      image: "/All_Images/ProvideSection/aim2.png",
    },
    {
      title: "Strong Concept with ThinkVil Questions",
      image: "/All_Images/ProvideSection/question2.jpg",
    },
    {
      title: "Learning through YouTube Videos",
      link: "https://www.youtube.com/@Thinkvil",
      image: "/All_Images/ProvideSection/youtube_icon.png",
    },
  ];

  return (
    <section className="py-12 px-6 rounded-xl bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What We Are Providing
      </h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center shadow-md rounded-xl p-6 md:p-8 bg-gray-100"
          >
            {/* Text Content with Minimum Height of the First Text Area */}
            <div className="md:w-3/5 text-center md:text-left min-h-[80px] h-auto flex items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>

            {/* Image or YouTube Logo with Link */}
            <div className="md:w-2/5 flex justify-center mt-4 md:mt-0">
              {feature.link ? (
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-105"
                >
                  <Image
                    src={feature.image}
                    alt="YouTube"
                    width={200}
                    height={0}
                    className="h-auto rounded-xl shadow-lg hover:shadow-xl"
                  />
                </a>
              ) : (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={200}
                  height={0}
                  className="h-auto rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvideSection;
