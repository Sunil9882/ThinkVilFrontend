"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[100] px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold flex items-center active:scale-105">
        <Image src="/logo1.jpg" alt="ThinkVil" width={30} height={30} priority />
        <span className="ml-2">ThinkVil</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-2 p-4 md:p-0 shadow-md md:shadow-none transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {[
          { href: "/simulations/physics", label: "Physics" },
          { href: "/simulations/mathematics", label: "Mathematics" },
          { href: "/simulations/chemistry", label: "Chemistry" },
          { href: "/about", label: "About" },
          { href: "/login", label: "Login" },
          { href: "/donate", label: "Donate", special: true },
        ].map(({ href, label, special }) => (
          <li key={href}>
            <Link
              href={href}
              className={`px-3 py-2 rounded block ${
                special
                  ? "bg-yellow-300 font-semibold hover:bg-yellow-400"
                  : "hover:bg-sky-200"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
