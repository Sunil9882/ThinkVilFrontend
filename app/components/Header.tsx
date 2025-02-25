"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const { data: session, status } = useSession();

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (
          menuRef.current && !menuRef.current.contains(event.target as Node) &&
          profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node) &&
          profileButtonRef.current && !profileButtonRef.current.contains(event.target as Node)
        ) {
          setIsMenuOpen(false);
          setIsProfileMenuOpen(false);
        }
      }, 50);
    }

    if (isMenuOpen || isProfileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isProfileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[100] px-4 py-4 flex justify-between items-center rounded-xl">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold flex items-center active:scale-105" onClick={() => setIsMenuOpen(false)}>
        <span className="ml-2 font-extrabold font-[cursive] italic ">ThinkViL</span>
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(prev => !prev)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        ref={menuRef}
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-2 p-4 md:p-0 shadow-md md:shadow-none transition-all ${isMenuOpen ? "block" : "hidden"}`}
      >
        {[ 
          { href: "/simulations/physics", label: "Physics" },
          { href: "/simulations/mathematics", label: "Mathematics" },
          { href: "/simulations/chemistry", label: "Chemistry" },
          { href: "/about", label: "About" },
        ].map(({ href, label }) => (
          <li key={href} onClick={() => setIsMenuOpen(false)}>
            <Link href={href} className="px-3 py-2 rounded-xl font-semibold block hover:bg-sky-300 hover:text-black">
              {label}
            </Link>
          </li>
        ))}

        {/* Login Button - Now Inside Menu */}
        {status !== "authenticated" && (
          <li onClick={() => setIsMenuOpen(false)}>
            <Link 
              href="/login" 
              className="login-donate-btn px-4 py-2 bg-blue-600 text-white rounded-xl hover:text-black transition block text-center"
            >
              Login
            </Link>
          </li>
        )}
      </ul>

      {/* Donate Button - Now on the Right */}
      <Link 
        href="/donate1" 
        className="login-donate-btn px-4 py-2 bg-red-500 text-white rounded-xl hover:text-black transition font-semibold"
      >
        Donate
      </Link>

      {/* Profile Section */}
      {status === "authenticated" && (
        <div className="relative ml-4" ref={profileMenuRef}>
          <button
            ref={profileButtonRef}
            onClick={() => setIsProfileMenuOpen(prev => !prev)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400"
          >
            {session.user?.image ? (
              <Image src={session.user.image} alt="Profile" width={40} height={40} className="rounded-full" />
            ) : (
              <span className="text-lg font-bold text-white">{session.user?.name?.charAt(0).toUpperCase() ?? "U"}</span>
            )}
          </button>

          {/* Profile Dropdown Menu */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
              <button onClick={() => signOut({ callbackUrl: "/login" })} className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200">Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
