export default function OfferSection() {
  return (
    <section className="bg-green-100 p-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-6">What We Offer</h2>
      <div className="space-y-4">
        <div className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <span className="text-green-600 font-bold text-xl mr-3">✔</span>
          <p className="text-lg text-gray-800">Interactive simulations in physics, mathematics, and chemistry</p>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <span className="text-blue-600 font-bold text-xl mr-3">✔</span>
          <p className="text-lg text-gray-800">Engaging content suitable for students, educators, and enthusiasts</p>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <span className="text-yellow-600 font-bold text-xl mr-3">✔</span>
          <p className="text-lg text-gray-800">A platform that encourages exploration and hands-on learning</p>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <span className="text-red-600 font-bold text-xl mr-3">✔</span>
          <p className="text-lg text-gray-800">Resources to supplement classroom education and self-study</p>
        </div>
      </div>
    </section>
  );
}
