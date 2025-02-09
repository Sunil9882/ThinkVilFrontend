import Link from "next/link"

export default function Simulations() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Simulations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/simulations/physics" className="bg-blue-100 p-6 rounded-lg hover:bg-blue-200 transition">
          <h2 className="text-2xl font-semibold mb-4">Physics</h2>
          <p>Explore simulations in mechanics, electromagnetism, and more</p>
        </Link>
        <Link href="/simulations/maths" className="bg-green-100 p-6 rounded-lg hover:bg-green-200 transition">
          <h2 className="text-2xl font-semibold mb-4">Maths</h2>
          <p>Discover interactive visualizations of mathematical concepts</p>
        </Link>
        <Link href="/simulations/chemistry" className="bg-red-100 p-6 rounded-lg hover:bg-red-200 transition">
          <h2 className="text-2xl font-semibold mb-4">Chemistry</h2>
          <p>Experiment with virtual chemical reactions and molecular structures</p>
        </Link>
      </div>
    </div>
  )
}

