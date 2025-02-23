"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password reset link has been sent to your email.");
      } else {
        setMessage(`❌ ${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      setMessage("❌ Failed to send reset email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-green-300 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-xl border border-gray-200 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-900">Forgot Password</CardTitle>
          <CardDescription className="text-gray-600">Enter your email to receive a password reset link</CardDescription>
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
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Reset Password"}
            </Button>
          </form>
          {message && <p className="mt-4 text-center text-green-700 font-medium">{message}</p>}
          <p className="mt-4 text-center text-sm text-gray-600">
            Remember your password? <Link href="/login" className="text-green-600 hover:underline font-medium">Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
