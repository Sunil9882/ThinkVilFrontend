import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FooterWrapper from "./components/FooterWrapper"; // Import the wrapper
import type React from "react";
import { metadata } from "./metadata"; // Import metadata separately

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <FooterWrapper /> {/* Use the wrapper instead of Footer */}
      </body>
    </html>
  );
}
