import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-sky-800 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold mb-3">ThinkVil</h3>
          <p className="text-gray-700">
            Exploring the wonders of science and mathematics through interactive simulations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/simulations/physics" className="hover:text-sky-600 transition">
                Physics
              </Link>
            </li>
            <li>
              <Link href="/simulations/maths" className="hover:text-sky-600 transition">
                Maths
              </Link>
            </li>
            <li>
              <Link href="/simulations/chemistry" className="hover:text-sky-600 transition">
                Chemistry
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-600 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p>
            📧{" "}
            <a href="mailto:contact@thinkvil.com" className="text-sky-600 hover:underline">
              contact@thinkvil.com
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:+916377472807" className="text-sky-600 hover:underline">
              +91 6377472807
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} ThinkVil. All rights reserved.
      </div>
    </footer>
  );
}
