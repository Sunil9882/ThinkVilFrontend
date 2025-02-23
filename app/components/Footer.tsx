import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Only show footer on the main page
  if (pathname !== "/") return null;

  return (
    <footer className="text-sky-800 py-12 rounded-t-xl mt-2 bg-gray-100">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold mb-3">ThinkViL</h3>
          <p className="text-gray-700">
            Exploring the wonders of science and mathematics through interactive simulations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/simulations/physics" className="hover:text-sky-600 transition">Physics</Link></li>
            <li><Link href="/simulations/mathematics" className="hover:text-sky-600 transition">Mathematics</Link></li>
            <li><Link href="/simulations/chemistry" className="hover:text-sky-600 transition">Chemistry</Link></li>
            <li><Link href="/about" className="hover:text-sky-600 transition">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p>
            📧 <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@thinkvil.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-600 hover:underline"
            >
              contact@thinkvil.com
            </a>
          </p>
          <p>
            📞 <a href="tel:+916377472807" className="text-sky-600 hover:underline">
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
