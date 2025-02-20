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

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt with:", email, password)
    // Implement login logic here (e.g., sending credentials to an API)
    router.push("/") // Redirect to home page after successful login
  }

  const handleOAuthLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`)
    // Integrate OAuth authentication logic here
  }

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
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-all">
              Login
            </Button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-4 flex flex-col space-y-3">
            <Button onClick={() => handleOAuthLogin('Google')} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 rounded-lg transition-all">
              <FcGoogle size={20} /> Login with Google
            </Button>
            <Button onClick={() => handleOAuthLogin('LinkedIn')} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
              <FaLinkedin size={20} /> Login with LinkedIn
            </Button>
            <Button onClick={() => handleOAuthLogin('GitHub')} className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg transition-all">
              <FaGithub size={20} /> Login with GitHub
            </Button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <Link href="/signup" className="text-green-600 hover:underline font-medium">Sign Up</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
