import Link from "next/link";

export default function VernierCalipers() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Header */}
      <header className="bg-gray-700 text-white text-center py-4 text-2xl font-semibold w-full mt-6">
        One Dimension Motion
      </header>

      {/* Title */}
      <h2 className="text-xl font-bold mt-6">
        How to use Vernier Calipers Simulation
      </h2>

      {/* Video Embed */}
      <div className="mt-6 w-full flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Vernier Calipers Tutorial"
          allowFullScreen
          className="border border-gray-300 shadow-lg"
        ></iframe>
      </div>

      {/* Simulation Button */}
      <Link href="/simulation">
        <button className="mt-6 bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Start Simulation
        </button>
      </Link>
    </div>
  );
}
