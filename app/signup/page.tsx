"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
      console.log("Signup API response:", data);
  
      if (response.ok) {
        alert("✅ Signup successful! Logging in...");
        await signIn("credentials", { email, password, redirect: false });
        router.push("/");
      } else {
        alert(`❌ Signup failed: ${data.message || "Try again."}`);
      }
    } catch (error) {
      console.error("Frontend signup error:", error);
      alert("❌ An unexpected error occurred. Check the console for details.");
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-green-300 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-xl border border-gray-200 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-900">Sign Up</CardTitle>
          <CardDescription className="text-gray-600">Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all">
              Sign Up
            </Button>
          </form>

          {/* Social Signup Buttons */}
          <div className="mt-4 flex flex-col space-y-3">
            <Button onClick={() => signIn('google', { callbackUrl: "/" })} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 rounded-lg transition-all">
              <FcGoogle size={20} /> Sign Up with Google
            </Button>
            <Button onClick={() => signIn('github', { callbackUrl: "/" })} className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg transition-all">
              <FaGithub size={20} /> Sign Up with GitHub
            </Button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-green-600 hover:underline font-medium">Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
