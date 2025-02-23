"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "authenticated") {
      alert("✅ You're Already Logged In");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert("❌ Invalid credentials. Redirecting to Sign Up...");
      setTimeout(() => router.push("/signup"), 1500);
    } else {
      alert("✅ Login successful! Redirecting...");
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-green-300 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-xl border border-gray-200 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-900">Login</CardTitle>
          <CardDescription className="text-gray-600">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <Link href="/forgot-password" className="text-sm text-green-600 hover:underline font-medium self-end">
                Forgot Password?
              </Link>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "authenticated"}
            >
              {status === "authenticated" ? "Already Logged In" : "Login"}
            </Button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-4 flex flex-col space-y-3">
            <Button onClick={() => signIn('google', { callbackUrl: "/" })} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 rounded-lg transition-all">
              <FcGoogle size={20} /> Login with Google
            </Button>
            <Button onClick={() => signIn('github', { callbackUrl: "/" })} className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg transition-all">
              <FaGithub size={20} /> Login with GitHub
            </Button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <Link href="/signup" className="text-green-600 hover:underline font-medium">Sign Up</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
