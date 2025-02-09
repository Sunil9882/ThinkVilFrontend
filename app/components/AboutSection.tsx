import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-green-100 py-12 px-6 rounded-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">About ThinkVil</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Circular Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/about.jpg" 
              alt="About ThinkVil" 
              width={200} 
              height={200} 
              className="rounded-full object-cover shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-green-700">ThinkVil</span> is a platform dedicated to making 
              <span className="font-semibold"> science and mathematics</span> more accessible and engaging for everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our interactive simulations transform complex concepts into hands-on learning experiences, 
              empowering students and enthusiasts to explore and understand in a **fun and engaging** way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
