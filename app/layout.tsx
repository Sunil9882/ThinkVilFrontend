"use client";  // This tells Next.js to treat this as a Client Component

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FooterWrapper from "./components/FooterWrapper"; 
import type React from "react";
import { SessionProvider } from "next-auth/react";
import HomeSection from "./components/HomeSection";
import ExploreSection from "./components/ExploreSection";
import ProvideSection from "./components/ProvideSection";
import VisionSection from "./components/VisionSection";
import AboutSection from "./components/AboutSection";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <SessionProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          {/* <HomeSection /> */}
          {/* <ExploreSection /> */}
          {/* <ProvideSection /> */}
          {/* <VisionSection /> */}
          {/* <AboutSection /> */}
          <FooterWrapper />
        </SessionProvider>
      </body>
    </html>
  );
}
