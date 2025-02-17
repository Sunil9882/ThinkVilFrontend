import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-6 px-6 rounded-xl bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-950 mb-5 text-center">
          About Us
        </h2>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-6">
          <div className="relative w-48 h-48 md:w-52 md:h-52 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Image
              src="/ashok.jpg"
              alt="Ashok"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative w-48 h-48 md:w-52 md:h-52 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Image
              src="/tara.jpg"
              alt="TaraChand"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, we’re <span className="font-semibold text-blue-600">Ashok Kumar</span> and <span className="font-semibold text-blue-600">Tara Chand</span>, alumni of NIT Rourkela and the <span className="font-semibold text-blue-600">founder</span> and <span className="font-semibold text-blue-600">co-founder</span> of <span className="font-semibold text-blue-600">ThinkVil</span>. During our JEE preparation, we struggled with understanding physics concepts that required visualization and a deeper connection to real-life phenomena. This challenge inspired Ashok to create <span className="font-semibold text-blue-600">ThinkVil</span>, with Tara joining as a co-founder, to build a platform where students can explore and interact with physics, chemistry, and mathematics concepts through virtual simulations, making learning more intuitive and engaging.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-600">Thinkvil</span> also helps teachers simplify complex topics, making learning fun and engaging for students. 
            Our goal is to make science accessible to everyone.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Feel free to use our free simulations, and if you find them helpful, consider supporting us with a donation. 
            Your support helps us create more resources for free or at very affordable prices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-600">If you are an Educator:</span> Financial challenges are our biggest hurdle in creating meaningful content, 
            and we’re looking for continuous supporters on a monthly/yearly basis to help sustain this vision. 
            If you’d like to support us, please consider a monthly donation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            You can give your valuable feedback at <span className="font-semibold text-blue-600">thinkvil@gmail.com</span>
          </p>
        </div>

        {/* Donate Button */}
        <div className="flex justify-center mt-6">
          <Link href="/donate">
            <span className="inline-block px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition cursor-pointer">
              Donate Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
