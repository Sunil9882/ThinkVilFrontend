export default function VisionSection() {
  return (
    <section className="py-12 px-6 rounded-xl text-center bg-gray-100 border-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-6">Our Vision</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-sky-700">ThinkVil</span>, our vision is to make science and mathematics
          <span className="text-sky-700 font-semibold"> accessible, engaging, and fun</span> for learners of all ages. 
          We believe that <span className="font-semibold">interactive simulations</span> and visualizations can bridge the gap between abstract concepts and real-world applications, fostering a deeper understanding and appreciation for these subjects.
        </p>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 font-semibold mb-4">
          Empowering learners through interactive simulations.
        </p>

        {/* Embedded YouTube Video with rounded corners */}
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-64 md:h-96 rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/hSnwf9aPcJU"
            title="ThinkVil Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
