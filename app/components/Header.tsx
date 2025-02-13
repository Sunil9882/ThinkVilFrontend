import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-sky-100 text-sky-800 shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          ThinkVil
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/simulations/physics" className="px-3 py-2 rounded hover:bg-sky-200">
              Physics
            </Link>
          </li>
          <li>
            <Link href="/simulations/mathematics" className="px-3 py-2 rounded hover:bg-sky-200">
              Mathematics
            </Link>
          </li>
          <li>
            <Link href="/simulations/chemistry" className="px-3 py-2 rounded hover:bg-sky-200">
              Chemistry
            </Link>
          </li>
          <li>
            <Link href="/about" className="px-3 py-2 rounded hover:bg-sky-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/login" className="px-3 py-2 rounded hover:bg-sky-200">
              Login
            </Link>
          </li>
          <li>
            <Link href="/signup" className="px-3 py-2 rounded hover:bg-sky-200">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/donate" className="bg-yellow-300 px-4 py-2 rounded hover:bg-yellow-400 font-semibold">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
