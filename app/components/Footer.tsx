"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

   // Show footer only on selected pages
   if (pathname !== "/" && pathname !== "/about") return null;

  return (
    <footer className="text-sky-800 rounded-t-xl mt-auto bg-gray-100 border-2 py-4">
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
          <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 font-semibold ">
            <li><Link href="/simulations/physics" className="hover:text-blue-600 transition hover:underline">Physics</Link></li>
            <li><Link href="/simulations/mathematics" className="hover:text-blue-600 transition hover:underline">Mathematics</Link></li>
            <li><Link href="/simulations/chemistry" className="hover:text-blue-600 transition hover:underline">Chemistry</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition hover:underline">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p className="py-1 font-semibold">
            📧 <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@thinkvil.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              contact@thinkvil.com
            </a>
          </p>
          <p className="font-semibold">
            📞 <a href="tel:+916377472807" className="text-blue-600 hover:underline">
              +91 6377472807
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-white text-center py-4 mt-6 rounded-t-xl">
        <p>© {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
