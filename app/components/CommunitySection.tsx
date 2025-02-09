import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="bg-gradient-to-r from-rose-100 to-pink-200 p-8 rounded-xl text-center shadow-md">
      <h2 className="text-3xl font-bold text-rose-900 mb-4">Join Our Community</h2>
      <p className="text-lg text-gray-800 max-w-2xl mx-auto">
        Whether you're a student, teacher, or lifelong learner, we invite you to join the ThinkVil community. Explore our
        simulations, share your insights, and embark on a journey of discovery with us.
      </p>
      <Link href="/signup">
        <button className="mt-6 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200">
          Sign Up Now
        </button>
      </Link>
    </section>
  );
}
