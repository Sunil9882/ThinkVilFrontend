"use client"; // Mark this as a Client Component

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname(); // Get current route

  return pathname === "/" ? <Footer /> : null; // Show footer only on the home page
}
