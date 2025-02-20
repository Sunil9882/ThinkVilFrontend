'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.")
      return
    }
    console.log("Signup attempt with:", name, email, password)
    router.push("/")
  }

  const handleOAuthSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`)
    // Integrate OAuth authentication logic here
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-blue-300 p-4">
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
                minLength={6}
                className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all">
              Sign Up
            </Button>
          </form>

          {/* Social Sign-Up Buttons */}
          <div className="mt-4 flex flex-col space-y-3">
            <Button onClick={() => handleOAuthSignup('Google')} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 rounded-lg transition-all">
              <FcGoogle size={20} /> Sign Up with Google
            </Button>
            <Button onClick={() => handleOAuthSignup('LinkedIn')} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
              <FaLinkedin size={20} /> Sign Up with LinkedIn
            </Button>
            <Button onClick={() => handleOAuthSignup('GitHub')} className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg transition-all">
              <FaGithub size={20} /> Sign Up with GitHub
            </Button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link href="/login" className="text-green-600 hover:underline font-medium">Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
