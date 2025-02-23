import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-6 bg-gray-100 rounded-xl">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-950 mb-8">About Us</h2>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-8">
          <div className="flex flex-col items-center">
            <div className="relative w-52 h-52 bg-white rounded-full shadow-lg overflow-hidden">
              <Image
                src="/All_Images/AboutPage/ashok.jpg"
                alt="Ashok Kumar"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800">Ashok Kumar</p>
            <a 
              href="https://www.linkedin.com/in/ashok-kumar-233613202" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2"
            >
              <Image
                src="/All_Images/AboutPage/linkedin_icon.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-52 h-52 bg-white rounded-full shadow-lg overflow-hidden">
              <Image
                src="/All_Images/AboutPage/tara.jpg"
                alt="Tara Chand"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800">Tara Chand Yadav</p>
            <a 
              href="https://www.linkedin.com/in/tara-chand-yadav-3969031b5/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2"
            >
              <Image
                src="/All_Images/AboutPage/linkedin_icon.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-6 text-lg">
          <p>
            Hi, we’re <span className="font-semibold text-blue-600">Ashok Kumar</span> and <span className="font-semibold text-blue-600">Tara Chand Yadav</span>, alumni of NIT Rourkela and the 
            <span className="font-semibold text-blue-600"> founder</span> and <span className="font-semibold text-blue-600">co-founder</span> of <span className="font-semibold text-blue-600">ThinkVil</span>. 
            During our JEE preparation, we struggled with understanding physics concepts that required visualization and a deeper connection to real-life phenomena. 
            This challenge inspired Ashok to create <span className="font-semibold text-blue-600">ThinkViL</span>, with Tara joining as a co-founder, to build a platform where students can explore and interact 
            with physics, chemistry, and mathematics concepts through virtual simulations, making learning more intuitive and engaging.
          </p>
          <p>
            <span className="font-semibold text-blue-600">ThinkViL</span> also helps teachers simplify complex topics, making learning fun and engaging for students. 
            Our goal is to make science accessible to everyone.
          </p>
          <p>
            Feel free to use our free simulations, and if you find them helpful, consider supporting us with a donation. 
            Your support helps us create more resources for free or at very affordable prices.
          </p>
          <p>
            You can give your valuable feedback at{" "}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.thinkvil@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              contact.thinkvil@gmail.com
            </a>
          </p>
        </div>

        {/* Donate Button */}
        <div className="flex justify-center mt-8">
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
