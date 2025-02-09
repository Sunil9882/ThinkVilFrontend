import Link from "next/link";
import Image from "next/image";

export default function SubjectLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Link href="/simulations/physics" className="bg-sky-50 p-6 rounded-lg hover:bg-sky-100 transition flex flex-col items-center text-center">
        <Image src="Physics.jpg" alt="Physics" width={160} height={160} className="mb-4" priority />
        <h2 className="text-xl font-semibold">Physics</h2>
        <p className="text-sm">Discover the laws of the universe</p>
      </Link>

      <Link href="/simulations/maths" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition flex flex-col items-center text-center">
        <Image src="/Math1.jpg" alt="Maths" width={160} height={160} className="mb-4" />
        <h2 className="text-xl font-semibold">Maths</h2>
        <p className="text-sm">Explore the world of numbers and patterns</p>
      </Link>

      <Link href="/simulations/chemistry" className="bg-rose-50 p-6 rounded-lg hover:bg-rose-100 transition flex flex-col items-center text-center">
        <Image src="Chemistry.jpg" alt="Chemistry" width={160} height={160} className="mb-4" />
        <h2 className="text-xl font-semibold">Chemistry</h2>
        <p className="text-sm">Uncover the secrets of matter and reactions</p>
      </Link>
    </div>
  );
}
